import { motion } from "framer-motion";

const menuItems = ["Status", "108 Stars", "Runes Inventory", "Inn Guestbook"];

const NavigationMenu = () => {
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