const CommandersRoom = () => {
    return (
        <div className="grid w-full min-w-0 gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-8">
            <div className="flex w-full min-w-0 flex-col items-center gap-4 lg:items-stretch">
                <div className="aspect-4/5 w-full max-w-80 overflow-hidden rounded-md border-4 border-suikoden-border bg-zinc-900 shadow-inner">
                <img
                    className="h-full w-full object-cover object-top"
                    src="/potrait-photo-sangat-amat-profesional.png"
                    alt="Portrait of Farrel Apriandry"
                    loading="lazy"
                    decoding="async"
                />
                </div>
                <div className="w-full max-w-80 space-y-3 border border-suikoden-border/70 bg-zinc-950/95 p-4">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-press-start text-[10px] text-suikoden-border">
                        Name
                    </span>
                    <span className="font-vt323 text-lg leading-6 text-slate-100 wrap-break-word">
                        Farrel Apriandry (Rel)
                    </span>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-press-start text-[10px] text-suikoden-border">
                        Class
                    </span>
                    <span className="font-vt323 text-lg leading-6 text-slate-100 wrap-break-word">
                        Game Programmer / Software Engineer
                    </span>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-press-start text-[10px] text-suikoden-border">
                        Level
                    </span>
                    <span className="font-vt323 text-lg leading-6 text-slate-100">
                        20
                    </span>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-press-start text-[10px] text-suikoden-border">
                        Base
                    </span>
                    <span className="font-vt323 text-lg leading-6 text-slate-100 wrap-break-word">
                        Magelang, Central Java
                    </span>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex min-w-0 flex-col gap-4 lg:max-w-3xl">
                <div className="font-press-start text-sm md:text-base text-suikoden-border border-b-2 border-suikoden-border/50 pb-2">
                  Character Lore
                </div>
                <p className="w-full max-w-none font-vt323 text-base md:text-lg leading-7 text-slate-200 wrap-break-word">
                  I am a enthusiast Game Developer and Software Engineer who translates complex logic into immersive experiences.
                  My journey is deeply rooted in Unreal Engine (C++ & Blueprints) and Godot Engine (GDScript).
                  I am currently spearheading "ZAPmarine", a co-op exploration game that breathes deep-sea life into the ocean depths.
                </p>
                <p className="w-full max-w-none font-vt323 text-base md:text-lg leading-7 text-slate-200 wrap-break-word">
                  My class extends far beyond game engines; I am a relentless builder of robust systems.
                  In the enterprise sector, I operate as a Full-Stack Developer and DevSecOps,
                  engineering secure platforms like "HAKI-UNTIDAR" for intellectual property management,
                  and "VocaTIonal", a zero-trust inspired grievance system featuring automated migrations and anonymous reporting.
                </p>
                <p className="w-full max-w-none font-vt323 text-base md:text-lg leading-7 text-slate-200 wrap-break-word">
                  My technical arsenal spans cross-platform apps and data-driven engineering.
                  I forged the "RUPIAH Finance Tracker" using Flutter and Firebase for real-time mobile syncing,
                  and constructed "Meragement" with Astro and React to optimize team collaboration.
                  In the realm of data, I built "GolekDuit", an automated Python and Node.js engine
                  that actively scrapes IDX data to uncover swing trading opportunities using technical analysis and volume breakouts.
                </p>
                <p className="w-full max-w-none font-vt323 text-base md:text-lg leading-7 text-slate-200 wrap-break-word">
                  I strongly believe in turning personal passions into high-performance code.
                  This drive birthed "Once-Tube", a lightning-fast Python TUI with a TWICE aesthetic, and "Jihyo-Archive",
                  a highly polished, editorial-style web vault built on Supabase. Ultimately, my mindset is driven by business viability.
                  I don't just write code; I forge tools, solve real-world problems, and constantly grind for EXP to evolve into a holistic, multidisciplinary developer.
                </p>
            </div>
        </div>
    );
};

export default CommandersRoom;