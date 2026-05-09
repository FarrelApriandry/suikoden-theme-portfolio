import { motion } from "framer-motion";
import { GitGraph, ContactRound, BookOpen, Gamepad2 } from "lucide-react";

interface PortalLink {
  id: string;
  title: string;
  lore: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  color: string;
}

const portals: PortalLink[] = [
  {
    id: "github",
    title: "GitHub Profile",
    lore: "Where legendary code is forged",
    icon: GitGraph,
    url: "https://github.com/FarrelApriandry",
    color: "#d4af37",
  },
  {
    id: "linkedin",
    title: "LinkedIn Profile",
    lore: "Connect with fellow professionals",
    icon: ContactRound,
    url: "https://www.linkedin.com/in/farrel-apriandry/",
    color: "#d4af37",
  },
  {
    id: "medium",
    title: "Medium Profile",
    lore: "Ancient knowledge awaits",
    icon: BookOpen,
    url: "https://fapriandry.medium.com/",
    color: "#d4af37",
  },
  {
    id: "steam",
    title: "The Grand Theater",
    lore: "Experience legendary tales",
    icon: Gamepad2,
    url: "https://steampowered.com",
    color: "#d4af37",
  },
];

const BlinkingMirror = () => {
  return (
    <div className="flex w-full min-w-0 flex-col gap-6 lg:gap-8 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="border-b-2 border-suikoden-border/50 pb-4 text-center md:text-left">
        <h2 className="font-press-start text-lg md:text-xl text-suikoden-border">
          Blinking Mirror
        </h2>
        <p className="font-vt323 text-lg md:text-xl text-slate-300 mt-2">
          The mirror hums with magical energy... Select a destination to teleport.
        </p>
      </div>

      {/* Portal Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
        {portals.map((portal) => {
          const Icon = portal.icon;
          return (
            <a
              key={portal.id}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <motion.div
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg border-2 border-suikoden-border/40 bg-zinc-900/80 text-slate-200 transition-colors cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(212, 175, 55, 1)",
                  backgroundColor: "rgba(30, 58, 138, 0.4)",
                }}
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-suikoden-border" />
                <span className="font-press-start text-xs md:text-sm text-suikoden-border">
                  {portal.title}
                </span>
                <p className="font-vt323 text-base md:text-lg text-slate-400 text-center">
                  {portal.lore}
                </p>
              </motion.div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BlinkingMirror;
