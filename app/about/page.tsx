import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-surface border-b border-bg">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-fire text-xl tracking-[0.3em] mb-3">THE STORY</p>
          <h1 className="font-display text-7xl md:text-9xl text-light tracking-wider leading-none">
            ABOUT
          </h1>
        </div>
      </section>

      {/* Kevin's Story */}
      <section className="py-24 px-6 bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Kevin in the shop"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent px-6 py-4">
              <p className="font-display text-3xl text-light tracking-widest">KEVIN EITNIEAR</p>
              <p className="font-display text-lg text-light/70 tracking-widest">OWNER & OPERATOR</p>
            </div>
          </div>

          <div>
            <p className="font-display text-fire text-xl tracking-[0.3em] mb-4">CASTLE ROCK, CO</p>
            <h2 className="font-display text-6xl text-light tracking-wider leading-none mb-8">
              BUILT FROM<br />
              <span className="text-accent">PASSION.</span>
            </h2>
            <div className="space-y-5 text-muted font-body leading-relaxed">
              <p>
                Kevin Eitniear has spent his career surrounded by metal, machines, and the
                satisfaction of making things look and perform better. What started as a
                passion for custom automotive work evolved into Demon Powder Coating — a
                full-service coating shop serving Castle Rock and the greater Denver metro.
              </p>
              <p>
                The name &quot;Demon&quot; isn&apos;t just branding. It&apos;s an attitude. An obsession with
                getting things right. An intolerance for mediocrity. When a part leaves
                Kevin&apos;s shop, it goes out looking sharp and built to last — or it doesn&apos;t
                go out at all.
              </p>
              <p>
                From weekend car builds to commercial fabrication runs, Demon handles it all
                with the same level of attention. No big corporate workflow. No cutting
                corners. Just one craftsman, one shop, and one standard: do it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-fire text-xl tracking-[0.3em] mb-3">WHAT DRIVES US</p>
            <h2 className="font-display text-6xl md:text-8xl text-light tracking-wider">
              THE DEMON CODE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "OBSESSIVE PREP",
                icon: "⚡",
                desc: "90% of a great powder coat is in the prep work. We blast, clean, and prep every surface to bare metal before a single molecule of powder touches it.",
              },
              {
                title: "ZERO SHORTCUTS",
                icon: "🔥",
                desc: "We run the right cure times, the right temperatures, the right film thicknesses. Not the fast way — the right way. Every time.",
              },
              {
                title: "STAND BEHIND IT",
                icon: "🛡️",
                desc: "If something isn't right, we make it right. Full stop. Our reputation in Castle Rock matters more than any single job.",
              },
            ].map((v) => (
              <div key={v.title} className="border border-bg hover:border-accent group transition-all p-10 text-center">
                <div className="text-5xl mb-6">{v.icon}</div>
                <h3 className="font-display text-3xl tracking-wider text-light group-hover:text-accent transition-colors mb-4">
                  {v.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-6 bg-bg">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-display text-fire text-xl tracking-[0.3em] mb-4">WHERE TO FIND US</p>
          <h2 className="font-display text-6xl text-light tracking-wider mb-6">
            CASTLE ROCK, CO
          </h2>
          <p className="text-muted font-body text-lg max-w-xl mx-auto mb-10">
            We&apos;re locally owned and operated. Drop your parts off in person — we always want to
            see what we&apos;re working with and give you an accurate, honest quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-red-700 text-light font-display text-2xl tracking-widest px-12 py-5 transition-colors"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </>
  );
}
