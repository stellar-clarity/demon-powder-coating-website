import Link from "next/link";

const services = [
  {
    title: "Custom Wheels",
    icon: "🔥",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    desc: "From daily drivers to show cars — we strip, prep, and coat your wheels to an impeccable finish. Matte black, gloss white, candy red, satin bronze — if you can dream it, we can coat it.",
    details: [
      "All sizes from 15\" to 30\"",
      "Chrome delete / color change",
      "Two-tone and accent options",
      "TPMS sensor-safe process",
    ],
  },
  {
    title: "Automotive Parts",
    icon: "🚗",
    img: "https://images.unsplash.com/photo-1608455171836-a92c54840d6b?w=800&q=80",
    desc: "Brake calipers, suspension arms, subframes, engine brackets — powder coating dramatically outperforms paint in heat resistance, chip resistance, and UV durability.",
    details: [
      "Brake calipers (show-quality finish)",
      "Suspension & chassis components",
      "Engine bay parts",
      "Exhaust heat shields",
    ],
  },
  {
    title: "Industrial Coating",
    icon: "🔩",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    desc: "Racks, shelving, enclosures, frames, and fabricated metal. We work with local fabricators, contractors, and businesses to deliver durable coatings at volume.",
    details: [
      "Steel & aluminum fabrications",
      "Commercial & residential railing",
      "Equipment enclosures",
      "Custom brackets and frames",
    ],
  },
  {
    title: "Motorcycle Parts",
    icon: "🏍️",
    img: "https://images.unsplash.com/photo-1567346322503-f9f2e2a7c3e0?w=800&q=80",
    desc: "Frames, forks, swingarms, exhaust guards, foot controls — we keep your bike looking savage. High-temp coating options for heat-exposed parts.",
    details: [
      "Full frame coating",
      "High-temp exhaust coating",
      "Custom color matching",
      "Wrinkle and texture finishes",
    ],
  },
  {
    title: "Outdoor Furniture & Fixtures",
    icon: "🪑",
    img: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=800&q=80",
    desc: "Patio furniture, gates, fencing, and decorative metalwork. Powder coating provides years of protection against Colorado weather — UV, snow, and everything in between.",
    details: [
      "Patio & outdoor furniture",
      "Gates and fencing",
      "Decorative ironwork",
      "Commercial fixtures",
    ],
  },
  {
    title: "Restoration",
    icon: "⚙️",
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    desc: "Bringing old metal back to life. Rust removal, media blasting, surface prep — and a finish that makes it look like it just rolled off the factory floor. But better.",
    details: [
      "Classic & vintage vehicles",
      "Antique equipment",
      "Architectural salvage",
      "Heirlooms & display pieces",
    ],
  },
];

function ProcessStep({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-14 h-14 bg-accent flex items-center justify-center font-display text-2xl text-light">
        {num}
      </div>
      <div>
        <h4 className="font-display text-2xl tracking-wider text-light mb-2">{title}</h4>
        <p className="text-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-surface border-b border-bg">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-fire text-xl tracking-[0.3em] mb-3">WHAT WE OFFER</p>
          <h1 className="font-display text-7xl md:text-9xl text-light tracking-wider leading-none">
            SERVICES
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-surface border border-bg hover:border-accent group transition-all overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-display text-4xl tracking-wider text-light group-hover:text-accent transition-colors mb-3">
                  {s.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-fire mt-0.5">▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-display text-fire text-xl tracking-[0.3em] mb-4">HOW IT WORKS</p>
            <h2 className="font-display text-6xl md:text-7xl text-light tracking-wider mb-12">
              THE PROCESS
            </h2>
            <div className="space-y-8">
              <ProcessStep
                num="01"
                title="DROP OFF & CONSULT"
                desc="Bring your parts in. We'll assess condition, discuss your color goals, and give you a straight quote — no hidden fees."
              />
              <ProcessStep
                num="02"
                title="DISASSEMBLY & PREP"
                desc="We strip old coatings, sandblast or media blast to bare metal, and treat for any surface contamination. Prep is everything."
              />
              <ProcessStep
                num="03"
                title="POWDER APPLICATION"
                desc="Electrostatically applied powder adheres evenly across every surface. We work with 500+ colors — matte, gloss, satin, texture, and more."
              />
              <ProcessStep
                num="04"
                title="CURE & INSPECT"
                desc="Parts go into our industrial oven to cure at the precise temperature and time. Then a final quality inspection before pickup."
              />
            </div>
          </div>
          <div className="sticky top-24">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Powder coat process"
              className="w-full h-auto object-cover"
            />
            <div className="bg-accent p-6 mt-6">
              <h3 className="font-display text-3xl tracking-wider text-light mb-2">
                READY TO START?
              </h3>
              <p className="text-light/80 text-sm font-body mb-4">
                Get a free estimate — typically quoted same-day for standard parts.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-bg hover:bg-surface text-light font-display text-xl tracking-widest px-8 py-3 transition-colors"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
