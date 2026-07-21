import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { question, context } = await request.json();

    if (!question || !context) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { response: "AI assistant is not configured. Please use the local chatbot." },
        { status: 200 }
      );
    }

    const systemPrompt = `You are a helpful portfolio assistant for Arshid Ahmad Malik. Your ONLY purpose is to answer questions about Arshid's portfolio, background, skills, projects, experience, and contact information.

STRICT RULES:
1. ONLY answer questions related to Arshid's portfolio
2. NEVER answer general knowledge questions
3. NEVER make up information not provided in the context
4. If asked about something not in the portfolio, politely decline
5. Keep responses concise and professional
6. Use the provided context as your only source of truth

PORTFOLIO CONTEXT:
${context}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error("OpenAI API error");
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { response: "I'm having trouble connecting right now. Please try again or ask me something else about Arshid's portfolio." },
      { status: 200 }
    );
  }
}