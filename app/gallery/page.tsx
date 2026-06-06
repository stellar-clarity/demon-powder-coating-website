const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Custom coated wheels",
    label: "Matte Black Wheels",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1608455171836-a92c54840d6b?w=800&q=80",
    alt: "Brake caliper red",
    label: "Red Brake Calipers",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1567346322503-f9f2e2a7c3e0?w=800&q=80",
    alt: "Motorcycle frame",
    label: "Matte Black Frame",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    alt: "Workshop shot",
    label: "In The Shop",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=800&q=80",
    alt: "Orange coated parts",
    label: "Fire Orange Finish",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    alt: "Restoration project",
    label: "Full Restoration",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?w=800&q=80",
    alt: "Gloss black rim",
    label: "Gloss Black Rims",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80",
    alt: "Industrial parts",
    label: "Industrial Coating",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Custom finish",
    label: "Two-Tone Custom",
    span: "",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-surface border-b border-bg">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-fire text-xl tracking-[0.3em] mb-3">OUR WORK</p>
          <h1 className="font-display text-7xl md:text-9xl text-light tracking-wider leading-none">
            GALLERY
          </h1>
          <p className="text-muted font-body mt-4 max-w-xl">
            Every finish tells a story. Browse our recent work across wheels, automotive parts, industrial fabrication, and restoration.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group cursor-pointer ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/50 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <span className="font-display text-2xl tracking-widest text-accent">
                      {img.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-accent text-center">
        <h2 className="font-display text-5xl md:text-7xl text-light tracking-wider mb-4">
          WANT RESULTS LIKE THESE?
        </h2>
        <p className="text-light/80 font-body text-lg mb-8">
          Bring your parts in. Let&apos;s talk about what we can build together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-bg hover:bg-surface text-light font-display text-2xl tracking-widest px-12 py-5 transition-colors"
        >
          GET A FREE QUOTE
        </a>
      </section>
    </>
  );
}
