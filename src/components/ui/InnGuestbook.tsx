import { ScrollArea } from "@/components/ui/scroll-area";

const mockMessages = [
  {
    name: "Nanami",
    message: "The inn is warm tonight. Rest well, traveler.",
    time: "Just now",
  },
  {
    name: "Viktor",
    message: "Keep your blade sharp and your heart steady.",
    time: "1 hour ago",
  },
  {
    name: "Flik",
    message: "The next quest awaits at dawn. Stay ready.",
    time: "Yesterday",
  },
];

const InnGuestbook = () => {
  return (
    <section className="space-y-6">
      <div className="rounded-xl border border-suikoden-border/70 bg-zinc-900/90 p-4 shadow-lg">
        <h2 className="font-press-start text-sm text-suikoden-border">
          Inn Guestbook
        </h2>
        <p className="mt-2 text-base text-slate-200">
          Leave a message for fellow travelers.
        </p>
        <form className="mt-4 flex flex-col gap-3">
          <label className="block text-xs font-press-start uppercase text-slate-300">
            Traveler Name
            <input
              type="text"
              name="visitorName"
              placeholder="Enter your name"
              className="mt-2 w-full rounded-lg border border-suikoden-border/50 bg-zinc-950/80 px-3 py-2 text-base text-slate-100 outline-none transition focus:border-suikoden-border"
            />
          </label>
          <label className="block text-xs font-press-start uppercase text-slate-300">
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="Share your story..."
              className="mt-2 w-full rounded-lg border border-suikoden-border/50 bg-zinc-950/80 px-3 py-2 text-base text-slate-100 outline-none transition focus:border-suikoden-border"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg border border-suikoden-border bg-suikoden-blue/70 px-4 py-2 text-xs font-press-start uppercase text-slate-100 transition hover:bg-suikoden-blue/90"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="rounded-xl border border-suikoden-border/70 bg-zinc-900/90 p-4 shadow-lg">
        <h3 className="font-press-start text-xs text-suikoden-border">
          Recent Messages
        </h3>
        <ScrollArea className="mt-3 h-48 md:h-64 rounded-md border border-suikoden-border/50 bg-zinc-950 p-4">
          <ul className="space-y-3">
            {mockMessages.map((entry) => (
              <li
                key={`${entry.name}-${entry.time}`}
                className="rounded-lg border border-suikoden-border/40 bg-zinc-950/80 p-3"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-press-start text-xs text-suikoden-border">
                    {entry.name}
                  </span>
                  <span className="text-xs text-slate-400">{entry.time}</span>
                </div>
                <p className="mt-2 text-base font-vt323 text-slate-200">
                  {entry.message}
                </p>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </section>
  );
};

export default InnGuestbook;