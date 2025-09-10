import axios from "axios";
import combinedData from "../api_data/combined.json" assert { type: "json" };

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "https://rushrash.com");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,POST,PUT,PATCH,DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  const systemMessage = `
You are RushRash's AI assistant.
Use only the structured dataset from combined.json:
${JSON.stringify(combinedData, null, 2)}

Rules:
- Answer only based on this dataset.
- If question is outside these topics, reply that you only support RushRash info.
- Be concise and helpful.
`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemMessage },
          { role: "user", content: message },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const reply = response.data.choices?.[0]?.message?.content ?? "";
    res.status(200).json({ reply });
  } catch (err) {
    console.error("OpenAI fetch error:", err.response?.data || err.message);
    res.status(500).json({ reply: "⚠️ Sorry, something went wrong." });
  }
}
