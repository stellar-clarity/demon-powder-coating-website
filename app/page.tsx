import Link from "next/link";

const services = [
  {
    icon: "🔥",
    title: "Custom Wheels",
    desc: "Transform stock or aftermarket wheels with a finish that turns heads. From matte black to gloss red — we coat it all.",
  },
  {
    icon: "🚗",
    title: "Automotive Parts",
    desc: "Calipers, suspension components, engine parts — professional coating that handles heat, chemicals, and the Colorado elements.",
  },
  {
    icon: "🔩",
    title: "Industrial Coating",
    desc: "Racks, frames, brackets, enclosures. If it's metal and needs a durable finish, we've got you covered.",
  },
  {
    icon: "🏍️",
    title: "Motorcycle Parts",
    desc: "Frames, exhaust guards, foot pegs, and more. Give your bike the custom look it deserves.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85"
          alt="Demon Powder Coating hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        {/* Red gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <p className="font-display text-fire text-2xl tracking-[0.4em] mb-4">
            CASTLE ROCK, CO
          </p>
          {/* Main headline */}
          <h1 className="font-display text-[80px] sm:text-[120px] md:text-[160px] leading-none tracking-wider text-light mb-6">
            BUILT{" "}
            <span className="text-accent">DIFFERENT.</span>
            <br />
            COATED TO LAST.
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
            Demon Powder Coating delivers premium, durable finishes for wheels,
            automotive parts, motorcycles, and industrial metalwork. No
            shortcuts. No compromises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-red-700 text-light font-display text-2xl tracking-widest px-10 py-4 transition-colors"
            >
              GET A FREE QUOTE
            </Link>
            <Link
              href="/gallery"
              className="border border-light hover:border-accent hover:text-accent text-light font-display text-2xl tracking-widest px-10 py-4 transition-colors"
            >
              VIEW OUR WORK
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted gap-2">
          <span className="font-display tracking-widest text-sm">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-fire text-xl tracking-[0.3em] mb-3">WHAT WE DO</p>
            <h2 className="font-display text-6xl md:text-8xl text-light tracking-wider">
              OUR SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-surface border border-bg hover:border-accent group transition-all p-8"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-display text-3xl tracking-wider text-light group-hover:text-accent transition-colors mb-3">
                  {s.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="border border-accent text-accent hover:bg-accent hover:text-light font-display text-xl tracking-widest px-10 py-4 transition-colors"
            >
              SEE ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER BANNER */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
          alt="Workshop"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="font-display text-fire text-xl tracking-[0.3em] mb-4">THE DEMON DIFFERENCE</p>
          <h2 className="font-display text-6xl md:text-8xl text-light tracking-wider mb-8">
            BEFORE &amp; AFTER
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg font-body mb-12">
            Every project starts with prep and ends with perfection. We
            sandblast, prime, coat, and cure — delivering a finish that
            outperforms paint in every way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1567346322503-f9f2e2a7c3e0?w=800&q=80",
                label: "Stock Wheels → Matte Black",
              },
              {
                img: "https://images.unsplash.com/photo-1608455171836-a92c54840d6b?w=800&q=80",
                label: "Rusted Frame → Gloss Red",
              },
              {
                img: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=800&q=80",
                label: "Faded Parts → Custom Fire Orange",
              },
            ].map((item) => (
              <div key={item.label} className="group relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-bg/40 group-hover:bg-bg/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg to-transparent p-4">
                  <p className="font-display text-xl tracking-widest text-accent">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DEMON */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-fire text-xl tracking-[0.3em] mb-4">WHY CHOOSE US</p>
            <h2 className="font-display text-6xl md:text-7xl text-light tracking-wider leading-none mb-8">
              PRECISION.<br />
              <span className="text-accent">DURABILITY.</span><br />
              RESULTS.
            </h2>
            <ul className="space-y-4 text-muted font-body">
              {[
                "State-of-the-art powder coat oven — full-size parts welcome",
                "Meticulous sandblasting & prep — no shortcuts",
                "500+ colors available — matte, gloss, satin, texture",
                "Built and operated right here in Castle Rock, CO",
                "Quick turnaround without sacrificing quality",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="text-accent mt-1">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block mt-10 bg-accent hover:bg-red-700 text-light font-display text-2xl tracking-widest px-10 py-4 transition-colors"
            >
              START YOUR PROJECT
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Workshop"
              className="w-full h-96 object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-accent px-6 py-4">
              <p className="font-display text-3xl text-light tracking-widest">10+ YEARS</p>
              <p className="font-display text-lg text-light/70 tracking-widest">OF EXPERIENCE</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-accent py-16 px-6 text-center">
        <h2 className="font-display text-5xl md:text-7xl text-light tracking-wider mb-6">
          READY TO TRANSFORM YOUR PARTS?
        </h2>
        <p className="text-light/80 font-body text-lg mb-8 max-w-xl mx-auto">
          Drop us a line and we&apos;ll get back to you with a free estimate. No
          project is too big or too small.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-bg hover:bg-surface text-light font-display text-2xl tracking-widest px-12 py-5 transition-colors border border-light/20"
        >
          GET YOUR FREE QUOTE
        </Link>
      </section>
    </>
  );
}
