export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { taste, include, avoid, health } = req.body;

  const prompt = `
You are a nutrition expert. Generate a healthy recipe that:
- Matches these taste preferences: ${taste}
- Uses ingredients: ${include}
- Avoids: ${avoid}
- Is suitable for someone with: ${health}

Return:
1. Recipe Name
2. Ingredients
3. Instructions
4. Nutritional breakdown
`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.CLAUDE_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307",  // change to haiku if needed
        max_tokens: 1000,
        temperature: 0.7,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    });

    const data = await response.json();
    console.log("Claude raw response:", JSON.stringify(data, null, 2));

    const recipe = data?.content?.[0]?.text?.trim();

    if (!recipe) {
      res.status(500).json({ error: "No recipe generated", fullResponse: data });
    } else {
      res.status(200).json({ recipe });
    }
  } catch (err) {
    console.error("Claude API error:", err);
    res.status(500).json({ error: "Claude API request failed." });
  }
}