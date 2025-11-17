"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black text-white py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/20 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* StoryBrand Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Nanomaterials That Make Your Products  
          <span className="text-blue-400"> Stronger, Lighter, and More Conductive</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Graphene, carbon nanotubes, nanocomposites, and advanced dispersions — 
          engineered for real-world performance and trusted by over{" "}
          <span className="text-white font-medium">10,000 customers worldwide</span>.
        </p>

        {/* Value Props */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            "Cheaper • Stronger",
            "Thinner • Lighter",
            "Higher Conductivity",
            "Fewer Chemicals Needed",
          ].map((item) => (
            <div
              key={item}
              className="border border-white/10 bg-white/5 rounded-xl p-5 text-sm font-medium tracking-wide"
            >
              {item}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/products"
            className="px-8 py-4 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-xl transition shadow-lg shadow-blue-600/20"
          >
            Browse Products
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 text-lg font-semibold bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition"
          >
            Request Pricing
          </Link>
        </div>

        {/* Trust and Guarantee */}
        <p className="mt-10 text-gray-400 text-sm max-w-xl mx-auto">
          All materials ship with SDS & TDS. Guaranteed to meet published specs — 
          or we replace or refund your order.
        </p>
      </div>
    </section>
  );
}
