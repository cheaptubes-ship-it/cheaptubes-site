import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/catalog";

export default function MaterialsPage() {
  return (
    <div className="w-full bg-slate-950">

      {/* HEADER */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900/90 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-blue-300 text-sm tracking-widest font-semibold">
            MATERIALS CATALOG
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Advanced Nanomaterials for Real-World Performance
          </h1>

          <p className="text-gray-300 text-lg mt-6 leading-relaxed">
            Explore our full catalog of graphene, CNTs, MXenes, dispersions,
            and fullerenes—each engineered for consistency, reliable performance,
            and application-ready integration at modern loadings.
          </p>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group rounded-2xl border border-white/10 overflow-hidden 
                  bg-slate-900 hover:border-blue-400 transition shadow-xl 
                  hover:shadow-blue-900/30"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition">
                    {cat.name}
                  </h3>

                  <p className="text-gray-300 text-sm mt-3">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need Help Selecting the Right Material?
          </h2>

          <p className="text-gray-300 text-lg mt-4">
            Tell us your application—polymer compounding, coatings, energy,
            electronics—and we’ll recommend the best material, loading,
            and documentation for your needs.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-10 py-4 rounded-xl bg-blue-500 
              hover:bg-blue-600 transition text-white font-semibold shadow-lg text-lg"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
