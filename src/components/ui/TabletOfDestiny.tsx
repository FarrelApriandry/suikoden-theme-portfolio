const mockProjects = [
  {
    title: "Tenkai Registry",
    description:
      "A recruitment ledger that tracks legendary allies and their missions.",
    techStack: ["Astro", "React", "Supabase"],
  },
  {
    title: "Runic Forge",
    description:
      "A JRPG-inspired dashboard for managing tech runes and skill synergies.",
    techStack: ["TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Inn Guestbook",
    description:
      "A cozy message board where travelers share stories and guidance.",
    techStack: ["PostgreSQL", "Supabase", "Edge Functions"],
  },
];

const TabletOfDestiny = () => {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {mockProjects.map((project) => (
        <article
          key={project.title}
          className="h-full flex flex-col justify-between gap-3 rounded-xl border border-suikoden-border/70 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 p-4 text-slate-100 shadow-lg"
        >
          <div className="space-y-2">
            <h3 className="text-lg font-press-start text-suikoden-border">
              {project.title}
            </h3>
            <p className="text-base leading-relaxed text-slate-200">
              {project.description}
            </p>
          </div>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-suikoden-border/60 bg-suikoden-blue/30 px-2 py-1 text-xs uppercase tracking-wide text-slate-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default TabletOfDestiny;