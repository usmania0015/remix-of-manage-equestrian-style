import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "Build an ivory dressage look",
  "Outfit for a summer schooling day",
  "Espresso palette for show jumping",
];

const StylingConcierge = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Bonjour. I am your Manège Atelier concierge. Tell me your discipline, occasion, or a palette in mind — I will compose an outfit for you and your horse.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const userMsg: Msg = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
      const res = await fetch(`${SUPABASE_URL}/functions/v1/styling-concierge`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(session?.access_token ? { Authorization: `Bearer ${session.access_token}` } : {}),
        },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Something went wrong" }));
        toast.error(err.error || "Concierge unavailable");
        setLoading(false);
        return;
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";
      setMessages([...next, { role: "assistant", content: "" }]);
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") continue;
          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content;
            if (delta) {
              assistantText += delta;
              setMessages((m) => {
                const copy = [...m];
                copy[copy.length - 1] = { role: "assistant", content: assistantText };
                return copy;
              });
            }
          } catch {}
        }
      }
    } catch (e) {
      toast.error("Could not reach the concierge");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    send(input.trim());
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Open styling concierge"
      >
        {open ? <X className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-md h-[600px] max-h-[80vh] bg-background border border-border shadow-2xl rounded-sm flex flex-col animate-fade-in">
          <div className="px-5 py-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <h3 className="font-serif text-lg">Atelier Concierge</h3>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Personal styling for rider and horse
            </p>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-sm text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {m.content || (loading && i === messages.length - 1 ? "…" : "")}
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs px-3 py-1.5 border border-border rounded-full hover:bg-muted transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a look, palette, occasion…"
              disabled={loading}
              className="flex-1 bg-muted px-4 py-2 rounded-full text-sm outline-none focus:ring-1 focus:ring-primary"
            />
            <Button type="submit" size="icon" disabled={loading || !input.trim()} className="rounded-full">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default StylingConcierge;
