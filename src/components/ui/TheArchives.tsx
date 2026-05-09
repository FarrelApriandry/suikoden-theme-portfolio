import { motion } from "framer-motion";

interface HistoricalRecord {
  id: string;
  type: "Education" | "Experience";
  title: string;
  role: string;
  date: string;
  description: string;
}

const records: HistoricalRecord[] = [
  {
    id: "education-1",
    type: "Education",
    title: "Universitas Tidar",
    role: "Undergraduate Student - Information Technology",
    date: "Aug 2024 - Present",
    description:
      "4th-semester student focused on collaborative academic projects and research, including preparation for KMI Expo 2025.",
  },
  {
    id: "experience-1",
    type: "Experience",
    title: "HAKI-UNTIDAR",
    role: "Fullstack Developer & DevSecOps",
    date: "Present",
    description:
      "Developing and securing the management center for intellectual works protection at Universitas Tidar.",
  },
  {
    id: "experience-2",
    type: "Experience",
    title: "Nusantara: Pasar Bubrah",
    role: "Project Manager & Game Developer",
    date: "Ongoing",
    description:
      "Leading the creation of a psychological horror-adventure game rooted in Central Java culture.",
  },
];

const TheArchives = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getBadgeColor = (type: "Education" | "Experience") => {
    return type === "Education"
      ? "bg-suikoden-blue/30 text-slate-100"
      : "bg-suikoden-border/30 text-slate-100";
  };

  return (
    <div className="flex w-full min-w-0 flex-col gap-8 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="border-b-2 border-suikoden-border/50 pb-4">
        <p className="font-vt323 text-lg md:text-xl text-slate-300 mt-2 wrap-break-word">
          Historical records, academic journeys, and combat experiences.
        </p>
      </div>

      {/* Historical Records (Timeline Cards) */}
      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {records.map((record, index) => (
          <motion.div
            key={record.id}
            className="relative flex flex-col gap-2 p-5 rounded-md border border-suikoden-border/40 bg-zinc-900/60 shadow-md border-l-4 border-l-suikoden-border min-w-0"
            variants={cardVariants}
          >
            {/* Top Row: Title and Date */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 min-w-0">
              <div className="flex flex-col gap-2 min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="font-press-start text-sm text-suikoden-border wrap-break-word">
                    {record.title}
                  </h2>
                  <span
                    className={`${getBadgeColor(
                      record.type
                    )} px-2 py-0.5 rounded-sm text-[10px] font-press-start whitespace-nowrap`}
                  >
                    {record.type}
                  </span>
                </div>
              </div>
              <div className="font-vt323 text-base text-slate-400 whitespace-nowrap">
                {record.date}
              </div>
            </div>

            {/* Role */}
            <div className="font-press-start text-[10px] text-slate-300 uppercase tracking-wider mb-2 wrap-break-word">
              {record.role}
            </div>

            {/* Description */}
            <p className="font-vt323 text-sm text-slate-300 leading-relaxed wrap-break-word">
              {record.description}
            </p>

            {/* Decorative Element */}
            <div className="absolute -left-1 top-0 bottom-0 w-1 bg-linear-to-b from-suikoden-border via-suikoden-border/50 to-transparent rounded-full" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TheArchives;
