import { motion } from "framer-motion";
import { useState } from "react";
import useSound from "use-sound";

const menuItems = ["Status", "108 Stars", "Runes Inventory", "Inn Guestbook"];

const NavigationMenu = () => {
  const [canPlaySound, setCanPlaySound] = useState(false);
  const [playHover] = useSound("/sounds/cursor.mp3", {
    volume: 0.4,
    interrupt: true,
  });
  const [playSelect] = useSound("/sounds/select.mp3", {
    volume: 0.5,
    interrupt: true,
  });

  const handleHover = () => {
    if (!canPlaySound) {
      return;
    }
    try {
      playHover();
    } catch {
      // Ignore audio failures or missing files.
    }
  };

  const handleClick = () => {
    setCanPlaySound(true);
    try {
      playSelect();
    } catch {
      // Ignore audio failures or missing files.
    }
  };

  return (
    <nav
      aria-label="Main menu"
      className="flex flex-col gap-2 rounded-xl border border-suikoden-border/70 bg-zinc-900/90 p-4 shadow-lg"
    >
      {menuItems.map((item) => (
        <motion.button
          key={item}
          type="button"
          whileHover={{ x: 10 }}
          onMouseEnter={handleHover}
          onClick={handleClick}
          className="group flex items-center justify-between border-l-4 border-transparent bg-zinc-950/70 px-3 py-2 text-left text-xs font-press-start uppercase tracking-wide text-slate-100 transition-colors duration-150 hover:border-suikoden-border hover:text-suikoden-border"
        >
          <span>{item}</span>
          <span className="text-[10px] text-slate-400 group-hover:text-suikoden-border">
            ►
          </span>
        </motion.button>
      ))}
    </nav>
  );
};

export default NavigationMenu;