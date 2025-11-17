"use client";

import Image from "next/image";
import Link from "next/link";
import { pillars, categories } from "../lib/catalog";
import {
  Award,
  ShieldCheck,
  Globe,
  FileCheck,
  Zap,
  Beaker,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">

{/* HERO SECTION (Brightened — Option B) */}
<section className="relative w-full min-h-[70vh] flex items-center justify-center bg-slate-950 overflow-hidden border-b border-white/10">

  {/* Background image (brighter) */}
  <Image
    src="/hero-bg.jpg"
    alt="Nanomaterials abstract background"
    fill
    priority
    className="object-cover opacity-90"
  />

  {/* Softer gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/40" />

  {/* Optional nano-tech radial brighten (boosts clarity) */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

  <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">

    {/* TAGLINE */}
    <p className="text-blue-300 tracking-widest text-sm font-semibold">
      ADVANCED MATERIALS FOR REAL-WORLD PERFORMANCE
    </p>

    {/* HEADLINE */}
    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mt-4 drop-shadow-xl">
      Advanced Nanomaterials,
      <br className="hidden md:block" />
      <span className="text-blue-400">Engineered for Real-World Use</span>
    </h1>

    {/* SUBTEXT */}
    <p className="text-gray-100 text-lg md:text-xl mt-6 leading-relaxed max-w-3xl mx-auto">
      Reliable graphene, CNTs, dispersions, and nanocomposites—designed to meet
      modern loading levels, deliver consistent results, and help your work perform
      exactly as intended.
    </p>

    {/* CTAs */}
    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
      <Link
        href="/categories"
        className="px-10 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold text-white shadow-lg shadow-blue-900/40 text-lg"
      >
        Explore Products
      </Link>

      <Link
        href="/contact"
        className="px-10 py-4 rounded-xl border border-white/30 hover:border-blue-400 transition font-medium text-white text-lg"
      >
        Request a Quote
      </Link>
    </div>

  </div>
</section>


      {/* PROBLEM SECTION */}
      <section className="bg-slate-950 border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
            
            <div>
            <p className="text-slate-300 mb-4">
  Most teams don’t struggle with nanomaterials—they struggle with how materials behave once they reach the lab or production line.
</p>

<p className="text-slate-300 mb-4">
  Graphene is often used at extremely low loadings (0.005–0.02 wt%). At those levels, a material with dozens of stacked layers cannot provide meaningful mechanical or conductivity improvements.
</p>

<p className="text-slate-300 mb-4">
  CNTs introduce their own challenges: agglomeration, poor wetting, sensitivity to processing history, and batch-to-batch variability that derails consistency.
</p>

<p className="text-slate-300">
  The market doesn’t need hype—it needs reliable, application-qualified materials.
</p>

            </div>

            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6 shadow-2xl shadow-black/40">
              <h3 className="text-lg font-semibold text-white mb-3">
                Common issues we hear from customers
              </h3>

              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 bg-blue-400 rounded-full" /> Unusable or inconsistent materials</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 bg-blue-400 rounded-full" /> Specs not matching datasheets</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 bg-blue-400 rounded-full" /> Dispersions that fail in processing</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 bg-blue-400 rounded-full" /> Missing or slow documentation</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 bg-blue-400 rounded-full" /> Lost R&D budget</li>
              </ul>

              <p className="mt-5 text-sm text-slate-300">
                We fix this with realistic specs, reliable batches, and real support.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* WHY TRUST */}
      <section className="py-24 bg-slate-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-300 text-sm font-semibold tracking-widest">
              WHY ENGINEERS, RESEARCHERS & MANUFACTURERS TRUST US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Real Materials. Real Specs. Real Support.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Feature
              icon={Award}
              title="20+ Years Supplying Nanomaterials"
              text="We've seen every failure mode—and built processes to avoid them."
            />
            <Feature
              icon={ShieldCheck}
              title="Trusted by Leading Institutions"
              text="Used by universities, aerospace, automotive, energy & defense."
            />
            <Feature
              icon={Globe}
              title="Over 10,000 Customers Worldwide"
              text="Global users rely on our materials for consistent performance."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <Feature
              icon={FileCheck}
              title="Guaranteed to Match Specs"
              text="If anything doesn’t meet spec, we replace or refund. No stress."
            />
            <Feature
              icon={Beaker}
              title="Instant SDS, TDS & Quotes"
              text="Auto-generated documentation—no delays or follow-ups needed."
            />
            <Feature
              icon={Zap}
              title="Built for Real-World Use"
              text="Optimized for low loadings and real process conditions."
            />
          </div>

        </div>
      </section>


      {/* PILLARS */}
      <section className="py-24 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-300 text-sm tracking-widest font-semibold">OUR CORE PILLARS</p>
            <h2 className="text-3xl md:text-4xl font-bold">The Foundation of Modern Nanomaterial Performance</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {pillars.map((pillar) => (
              <Link
                key={pillar.slug}
                href={`/pillars/${pillar.slug}`}
                className="bg-slate-900 rounded-2xl p-8 border border-white/10 hover:border-blue-400 transition shadow-xl hover:shadow-blue-900/20"
              >
                <h3 className="text-xl font-semibold text-blue-300 mb-4">{pillar.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{pillar.description}</p>

                <ul className="text-gray-400 text-sm space-y-2">
                  {pillar.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="py-24 bg-slate-900/50 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-300 text-sm tracking-widest font-semibold">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Getting the Right Nanomaterial Should Be Simple</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Step num="1" title="Choose Your Material" text="Graphene, CNTs, dispersions & masterbatches built for results." />
            <Step num="2" title="Get Instant Documentation" text="Instant SDS, TDS, COA, specs—auto-generated for your team." />
            <Step num="3" title="Receive Fast Delivery" text="Global shipping with guaranteed spec compliance." />
          </div>

        </div>
      </section>


      {/* STAKES (CLEAN) */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-300 text-sm tracking-widest font-semibold">WHAT’S AT STAKE</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
              The Right Nanomaterial Accelerates Your Work —
              <br />
              The Wrong One Sets You Back Months
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <FailureCard />
            <SuccessCard />
          </div>

        </div>
      </section>


      {/* TRANSFORMATION */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-300 text-sm tracking-widest font-semibold">THE TRANSFORMATION</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
              What Your Work Looks Like With the Right Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <BeforeCard />
            <AfterCard />
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


      {/* FINAL CTA */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center px-6">

          <p className="text-blue-300 tracking-widest text-sm font-semibold">
            READY TO GET STARTED?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
            The Nanomaterials You Need.<br />
            <span className="text-blue-400">The Confidence You Deserve.</span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mt-6">
            Optimize polymers, build new electronics, or push advanced materials forward—
            with graphene, CNTs, and nanocomposites that perform exactly as intended.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold text-white shadow-lg text-lg"
            >
              Request Your Quote
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}


/* ====================================================================================
   COMPONENTS
==================================================================================== */

function Feature({ title, text, icon: Icon }) {
  return (
    <div className="p-8 rounded-2xl bg-[var(--bg-panel)] border border-white/10 shadow-lg hover:shadow-blue-900/20 transition">
      {Icon && (
        <div className="mb-4 text-blue-300">
          <Icon className="h-7 w-7" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-blue-300 mb-4">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function Step({ num, title, text }) {
  return (
    <div className="bg-slate-950 rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-blue-900/20 transition">
      <div className="text-blue-400 text-5xl font-bold mb-4">{num}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}

function OfferGrid() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-10">
        <Feature
          icon={Award}
          title="20+ Years Supplying Nanomaterials"
          text="We've seen every failure mode—and built processes to avoid them."
        />
        <Feature
          icon={ShieldCheck}
          title="Trusted by Leading Institutions"
          text="Used by universities, aerospace, and advanced R&D teams worldwide."
        />
        <Feature
          icon={Globe}
          title="Over 10,000 Customers Worldwide"
          text="Used by academia, defense, automotive, energy, and aerospace."
        />
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-10">
        <Feature
          icon={FileCheck}
          title="Guaranteed to Match Specs"
          text="If a batch doesn’t meet spec, we replace or refund—simple."
        />
        <Feature
          icon={Beaker}
          title="Instant SDS, TDS & Quotes"
          text="Automated documentation—no delays, no chasing suppliers."
        />
        <Feature
          icon={Zap}
          title="Materials That Fit Real Use"
          text="Optimized for low loadings, dispersion realities, and true processing."
        />
      </div>
    </>
  );
}


/* GLOW ENHANCED CARDS */
function FailureCard() {
  return (
    <div className="rounded-2xl p-8 bg-[var(--bg-panel)] border border-red-500/40 shadow-[0_0_25px_rgba(255,50,50,0.25)] hover:shadow-[0_0_45px_rgba(255,50,50,0.45)] transition duration-300 backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-red-400 mb-4">Avoid These Common Failures</h3>
      <ul className="space-y-3 text-gray-300">
        <li>• Materials that don’t match published specs</li>
        <li>• Failed dispersion or conductivity results</li>
        <li>• Proposal delays due to unreliable data</li>
        <li>• Wasted R&D budget</li>
        <li>• Stalled innovation timelines</li>
      </ul>
    </div>
  );
}

function SuccessCard() {
  return (
    <div className="rounded-2xl p-8 bg-[var(--bg-panel)] border border-green-400/40 shadow-[0_0_25px_rgba(50,255,150,0.25)] hover:shadow-[0_0_45px_rgba(50,255,150,0.45)] transition duration-300 backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-green-400 mb-4">Here’s What You Gain</h3>
      <ul className="space-y-3 text-gray-300">
        <li>• Reliable and reproducible materials</li>
        <li>• Real performance at modern low loadings</li>
        <li>• Instant SDS/TDS/COA for proposals</li>
        <li>• Faster R&D cycles</li>
        <li>• Guaranteed spec compliance</li>
      </ul>
    </div>
  );
}

function BeforeCard() {
  return (
    <div className="rounded-2xl p-8 bg-[var(--bg-soft)] border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:shadow-[0_0_45px_rgba(0,150,255,0.35)] transition duration-300 backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-red-400 mb-4">Before CheapTubes</h3>
      <ul className="space-y-3 text-gray-300">
        <li>• Guessing which supplier to trust</li>
        <li>• Poor dispersion and conductivity results</li>
        <li>• Specs not matching datasheets</li>
        <li>• Blown budgets & delayed timelines</li>
        <li>• Stress before proposal deadlines</li>
      </ul>
    </div>
  );
}

function AfterCard() {
  return (
    <div className="rounded-2xl p-8 bg-[var(--bg-soft)] border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.35)] hover:shadow-[0_0_45px_rgba(0,220,255,0.35)] transition duration-300 backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-green-400 mb-4">After CheapTubes</h3>
      <ul className="space-y-3 text-gray-300">
        <li>• Materials behave exactly as expected</li>
        <li>• Reliable performance at low loadings</li>
        <li>• Instant SDS, TDS & COA</li>
        <li>• Faster iteration & stronger results</li>
        <li>• Confidence with guaranteed specs</li>
      </ul>
    </div>
  );
}
