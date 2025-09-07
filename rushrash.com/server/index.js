import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import servicesList from "../src/components/ai/servicesList.js";
import offersList from "../src/components/ai/offersList.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Helper: summarize services
const servicesSummary = servicesList
  .map((s, i) => `${i + 1}. ${s.name} — ${s.desc}`)
  .join("\n");

// Helper: summarize offers
const offersSummary = offersList
  .map((o) => {
    const serviceName = servicesList.find((s) => s.id === o.serviceId)?.name;
    return `${serviceName}: ${o.name} — $${o.price}, Duration: ${o.duration}`;
  })
  .join("\n");

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  const systemMessage = `
You are RushRash's service assistant.
You have two datasets:
1. Services (categories): ${servicesList.map((s) => s.name).join(", ")}
2. Offers: ${offersSummary}

Rules:
- If the user asks "what are your services", list only **services** with descriptions.
- If the user asks for "offers" for a specific service, list the offers linked to that service.
- For vague "any offers", politely ask which service they want or show all offers grouped by service.
- Never make up offers; only use the offersList data.
`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemMessage },
          { role: "user", content: userMessage },
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
    res.json({ reply });
  } catch (error) {
    console.error("OpenAI fetch error:", error.response?.data || error.message);
    res.status(500).json({ reply: "⚠️ Sorry, something went wrong." });
  }
});

app.listen(5000, () =>
  console.log("✅ Chatbot backend running on http://localhost:5000")
);
