export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-surface border-b border-bg">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-fire text-xl tracking-[0.3em] mb-3">REACH OUT</p>
          <h1 className="font-display text-7xl md:text-9xl text-light tracking-wider leading-none">
            CONTACT
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-5xl text-light tracking-wider mb-10">
              LET&apos;S TALK ABOUT<br />
              <span className="text-accent">YOUR PROJECT.</span>
            </h2>

            <div className="space-y-8 text-muted font-body">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <p className="font-display text-2xl tracking-widest text-light mb-1">LOCATION</p>
                  <p>Castle Rock, CO 80104</p>
                  <p className="text-sm mt-1">By appointment — call ahead for drop-off.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent flex items-center justify-center text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <p className="font-display text-2xl tracking-widest text-light mb-1">PHONE</p>
                  <a href="tel:7205550198" className="hover:text-accent transition-colors">
                    (720) 555-0198
                  </a>
                  <p className="text-sm mt-1">Mon–Fri 8am–5pm, Sat 9am–2pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent flex items-center justify-center text-xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="font-display text-2xl tracking-widest text-light mb-1">EMAIL</p>
                  <a
                    href="mailto:kevin@demonpowdercoating.com"
                    className="hover:text-accent transition-colors break-all"
                  >
                    kevin@demonpowdercoating.com
                  </a>
                  <p className="text-sm mt-1">Typically respond within 24 hours.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-surface border border-bg p-6">
              <p className="font-display text-2xl tracking-widest text-fire mb-3">PRO TIP</p>
              <p className="text-muted text-sm leading-relaxed font-body">
                Not sure what finish you want? Bring in a reference photo or describe the vibe —
                we&apos;ve got 500+ colors in stock and can mix custom. The clearer your vision,
                the better we can nail it.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface border border-bg p-8">
            <h3 className="font-display text-4xl tracking-wider text-light mb-8">GET A QUOTE</h3>
            <form
              action="mailto:kevin@demonpowdercoating.com"
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label className="block font-display text-lg tracking-widest text-muted mb-2">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-bg border border-bg focus:border-accent outline-none text-light font-body px-4 py-3 transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block font-display text-lg tracking-widest text-muted mb-2">
                  PHONE
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-bg border border-bg focus:border-accent outline-none text-light font-body px-4 py-3 transition-colors"
                  placeholder="(720) 555-0000"
                />
              </div>

              <div>
                <label className="block font-display text-lg tracking-widest text-muted mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-bg border border-bg focus:border-accent outline-none text-light font-body px-4 py-3 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block font-display text-lg tracking-widest text-muted mb-2">
                  WHAT NEEDS COATING? *
                </label>
                <select
                  name="service"
                  className="w-full bg-bg border border-bg focus:border-accent outline-none text-light font-body px-4 py-3 transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option>Custom Wheels</option>
                  <option>Automotive Parts</option>
                  <option>Motorcycle Parts</option>
                  <option>Industrial / Fabrication</option>
                  <option>Outdoor Furniture</option>
                  <option>Restoration</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block font-display text-lg tracking-widest text-muted mb-2">
                  TELL US MORE
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-bg border border-bg focus:border-accent outline-none text-light font-body px-4 py-3 transition-colors resize-none"
                  placeholder="Describe your parts, color ideas, timeline, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-red-700 text-light font-display text-2xl tracking-widest py-4 transition-colors"
              >
                SEND MY REQUEST
              </button>

              <p className="text-muted text-xs text-center font-body">
                This will open your email client. Or call us directly at (720) 555-0198.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
