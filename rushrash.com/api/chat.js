// /api/chat.js
import axios from "axios";
import servicesList from "../src/components/ai/servicesList.js";
import offersList from "../src/components/ai/offersList.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  const systemMessage = `
You are RushRash's service assistant.
Services: ${servicesList.map((s) => s.name).join(", ")}
Offers: ${offersList
    .map(
      (o) =>
        `${servicesList.find((s) => s.id === o.serviceId)?.name}: ${
          o.name
        } — $${o.price}, Duration: ${o.duration}`
    )
    .join("\n")}

Rules:
- If the user asks "what are your services", list only services with descriptions.
- If the user asks for "offers" for a specific service, list only those offers.
- For vague "any offers", ask which service or show grouped offers.
- Never make up offers; only use the offersList data.
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
    console.error(err.response?.data || err.message);
    res.status(500).json({ reply: "⚠️ Sorry, something went wrong." });
  }
}
