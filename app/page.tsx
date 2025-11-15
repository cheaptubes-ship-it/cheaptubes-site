import Image from "next/image";
import Link from "next/link";
import { pillars, categories } from "../lib/catalog";

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero-bg.jpg"
          alt="Nanomaterials abstract background"
          fill
          className="object-cover opacity-30"
          priority
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
          <p className="text-blue-300 tracking-widest text-sm font-semibold">
            INNOVATION AT THE MOLECULAR LEVEL
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mt-4">
            Advanced Nanomaterials for{" "}
            <span className="text-blue-400">Tomorrow&apos;s Solutions</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mt-6">
            Engineered at the nanoscale, our graphene, carbon nanotubes,
            and advanced nanomaterials deliver exceptional performance across
            industrial, medical, and research applications.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="/categories"
              className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium text-white shadow-lg"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border border-white/20 hover:border-blue-400 transition font-medium text-white"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>


      {/* PILLARS SECTION */}
      <section className="py-24 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Pillars
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {pillars.map((pillar) => (
              <Link
                key={pillar.slug}
                href={`/pillars/${pillar.slug}`}
                className="bg-slate-900 rounded-2xl p-8 border border-white/10 hover:border-blue-400 transition shadow-xl hover:shadow-blue-900/20"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-300">
                  {pillar.title}
                </h3>
                <p className="text-gray-300 text-sm">{pillar.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* CATEGORY GRID */}
      <section className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Material Categories
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:shadow-blue-900/20 transition"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition">
                    {cat.name}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Custom Nanomaterial Solutions?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            We engineer bespoke formulations, dispersions, and advanced
            nanoscale materials for R&D, pilot programs, and full-scale
            commercialization.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium text-white shadow-lg text-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
