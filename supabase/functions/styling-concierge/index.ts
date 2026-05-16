// Manège AI Styling Concierge — streams responses from Lovable AI Gateway
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are the Manège Atelier Concierge — a refined, knowledgeable personal stylist for Manège Equestrian, a luxury equestrian fashion house.

Voice: warm, considered, editorial — like a Parisian atelier consultant. Never use exclamation marks. Be concise (2-4 short paragraphs maximum). Use occasional French flourishes sparingly.

You help riders curate outfits for:
- Disciplines: Show Jumping, Dressage, Eventing
- Occasions: training, competition, lessons, casual barn days
- Palettes: Ivory, Espresso, Sage, Noir, Burgundy, Champagne

Product universe (recommend only from these categories):
- Rider: Riding Jackets, Show Jackets, Riding Breeches, Tights, Show Shirts, Base Layers, Tops, Vests, Sweaters, Gloves, Belts, Riding Socks
- Horse: Saddle Pads (Dressage / Jumping), Ear Bonnets, Polo Wraps, Boots (Brushing / Tendon / Bell), Halters, Blankets

When suggesting an outfit, propose a coordinated set (rider top + bottoms + matching saddle pad + ear bonnet) and explain the palette logic in one sentence. Suggest visiting /shop or /signature for The Ilyana Collection. Never invent prices or product names beyond the categories above.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "AI not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        stream: true,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits in workspace settings." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: text }), {
        status: response.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
