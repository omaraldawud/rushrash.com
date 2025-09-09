// /api/chat.js
import axios from "axios";
import combinedData from "../api_data/combined.json" with { type: "json" };

export default async function handler(req, res) {
  console.log("API route hit", req.method);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  // Prepare system message for GPT
  const systemMessage = `
You are RushRash's AI assistant.
Only use the following structured dataset:

Company:
${JSON.stringify(combinedData.company, null, 2)}

Services:
${combinedData.services
  .map(
    (s) =>
      `${s.srvc_title}: ${s.srvc_description}\nVariations:\n${s.srvc_variations
        .map(
          (v) =>
            `- ${v.srvc_var_desc}: $${v.srvc_var_price_min} - $${v.srvc_var_price_max}, Duration: ${v.srvc_var_duration_min} - ${v.srvc_var_duration_max} hours, Warranty: ${v.srvc_var_warranty}`
        )
        .join("\n")}`
  )
  .join("\n\n")}

Offers:
${combinedData.offersList
  .map(
    (o) =>
      `${
        combinedData.services.find((s) => s.id === o.serviceId)?.srvc_title
      }: ${o.name} — $${o.price}, Duration: ${o.duration}`
  )
  .join("\n")}

Brands:
${combinedData.brands
  .map(
    (b) =>
      `${b.name}: ${b.brand_desc}\nProducts: ${b.products
        .map(
          (p) =>
            `- ${p.name} (${p.type}), Best for: ${
              p.best_for
            }, Specs: ${JSON.stringify(p.specs)}`
        )
        .join("\n")}`
  )
  .join("\n\n")}

FAQs:
${combinedData.faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n")}

Rules:
- Only answer based on the dataset above.
- If the question is outside these topics, reply that you only support questions about RushRash services, offers, brands, company info, and FAQs.
- Be concise and helpful. Do not hallucinate new info.
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
