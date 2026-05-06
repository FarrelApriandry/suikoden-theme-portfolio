import { Flame, Sparkles, Swords, Wand2 } from "lucide-react";

const mockRunes = [
  {
    name: "Fire Rune",
    description: "Ignites a blazing strike that scorches enemy lines.",
    icon: Flame,
  },
  {
    name: "Unity Rune",
    description: "Amplifies party synergy for devastating unite attacks.",
    icon: Sparkles,
  },
  {
    name: "Blade Rune",
    description: "Sharpens reflexes and empowers critical swordplay.",
    icon: Swords,
  },
  {
    name: "Mystic Rune",
    description: "Channels ancient magic into protective wards.",
    icon: Wand2,
  },
];

const RunesForge = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {mockRunes.map((rune) => {
        const Icon = rune.icon;
        return (
          <article
            key={rune.name}
            className="flex items-start gap-4 rounded-xl border border-suikoden-border/70 bg-zinc-900/80 p-4 text-slate-100 shadow-lg"
          >
            <div className="rounded-lg border border-suikoden-border/50 bg-zinc-950/80 p-2 text-suikoden-border">
              <Icon className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-press-start text-sm text-suikoden-border">
                {rune.name}
              </h3>
              <p className="text-base font-vt323 text-slate-200">
                {rune.description}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default RunesForge;