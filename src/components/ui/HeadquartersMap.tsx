import { motion } from "framer-motion";
import { Castle, ScrollText, Tent, Crown, BookOpen, Compass } from "lucide-react"; // Tambah Crown, BookOpen, Compass
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InnGuestbook from "@/components/ui/InnGuestbook";
import RunesForge from "@/components/ui/RunesForge";
import TabletOfDestiny from "@/components/ui/TabletOfDestiny";
import CommandersRoom from "@/components/ui/CommandersRoom";

const mapNodes = [
  {
    id: "commander",
    label: "Commander's Room",
    top: "15%",
    left: "25%",
    icon: Crown,
  },
  {
    id: "tablet",
    label: "Tablet of Destiny",
    top: "20%",
    left: "50%",
    icon: ScrollText,
  },
  {
    id: "runes",
    label: "Runes Forge",
    top: "50%",
    left: "70%",
    icon: Castle,
  },
  {
    id: "archives",
    label: "The Archives",
    top: "70%",
    left: "65%",
    icon: BookOpen,
  },
  {
    id: "inn",
    label: "The Inn",
    top: "60%",
    left: "30%",
    icon: Tent,
  },
  {
    id: "mirror",
    label: "Blinking Mirror",
    top: "80%",
    left: "45%",
    icon: Compass,
  },
];

const HeadquartersMap = () => {
  return (
    <div
      className="relative w-full aspect-4/3 max-w-4xl mx-auto rounded-xl border-4 border-suikoden-border bg-zinc-800 overflow-hidden shadow-2xl"
      style={{
        backgroundImage: "url('/map-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        imageRendering: "pixelated",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      {mapNodes.map((node) => {
        const Icon = node.icon;
        return (
          <Dialog key={node.id}>
            <DialogTrigger asChild>
              <motion.button
                type="button"
                className="absolute z-10 flex flex-col items-center gap-1 text-suikoden-border drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                style={{ top: node.top, left: node.left }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="hidden md:block text-xs font-press-start">
                  {node.label}
                </span>
                <Icon className="h-6 w-6" />
              </motion.button>
            </DialogTrigger>
            <DialogContent className="w-[90vw] sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl max-h-[85vh] overflow-y-auto rounded-xl border-4 border-suikoden-border bg-zinc-950 p-6 md:p-8 text-slate-100">
              <DialogTitle className="font-press-start text-sm text-suikoden-border">
                {node.label}
              </DialogTitle>
              <div className="space-y-4">
                {node.id === "commander" ? <CommandersRoom /> : null}
                {node.id === "tablet" ? <TabletOfDestiny /> : null}
                {node.id === "inn" ? <InnGuestbook /> : null}
                {node.id === "runes" ? <RunesForge /> : null}
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
};

export default HeadquartersMap;