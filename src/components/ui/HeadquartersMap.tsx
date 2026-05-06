import { motion } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TabletOfDestiny from "@/components/ui/TabletOfDestiny";

const mapNodes = [
  {
    id: "tablet",
    label: "Tablet of Destiny",
    top: "20%",
    left: "50%",
  },
  {
    id: "inn",
    label: "The Inn",
    top: "60%",
    left: "30%",
  },
  {
    id: "runes",
    label: "Runes Forge",
    top: "50%",
    left: "70%",
  },
];

const HeadquartersMap = () => {
  return (
    <div className="relative w-full aspect-[4/3] max-w-4xl mx-auto rounded-xl border-4 border-suikoden-border bg-zinc-800 overflow-hidden shadow-2xl">
      {mapNodes.map((node) => (
        <Dialog key={node.id}>
          <DialogTrigger asChild>
            <motion.button
              type="button"
              className="absolute flex flex-col items-center gap-1 text-suikoden-border"
              style={{ top: node.top, left: node.left }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-press-start">{node.label}</span>
              <span className="text-2xl leading-none">▼</span>
            </motion.button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl border-4 border-suikoden-border bg-zinc-950 text-slate-100">
            <DialogTitle className="font-press-start text-sm text-suikoden-border">
              {node.label}
            </DialogTitle>
            <div className="space-y-4">
              {node.id === "tablet" ? <TabletOfDestiny /> : null}
              {node.id === "inn" ? (
                <div className="rounded-lg border border-suikoden-border/60 bg-zinc-900/80 p-4 text-base text-slate-200">
                  Inn Guestbook Content
                </div>
              ) : null}
              {node.id === "runes" ? (
                <div className="rounded-lg border border-suikoden-border/60 bg-zinc-900/80 p-4 text-base text-slate-200">
                  Runes Forge Content
                </div>
              ) : null}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default HeadquartersMap;