import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "CheapTubes | Advanced Nanomaterials",
  description: "Graphene, CNTs, nanocomposites, and advanced nanomaterials engineered for tomorrow’s solutions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-slate-950 text-white">
      <body className="min-h-screen flex flex-col">
        {/* NAVBAR */}
        <nav className="w-full border-b border-white/10 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-wide">
              Cheap<span className="text-blue-400">Tubes</span>
            </Link>

            <div className="flex items-center gap-8 text-sm font-medium">
              <Link href="/pillars" className="hover:text-blue-400 transition">
                Pillars
              </Link>
              <Link href="/categories" className="hover:text-blue-400 transition">
                Categories
              </Link>
              <Link href="/products" className="hover:text-blue-400 transition">
                Products
              </Link>
              <Link href="/resources" className="hover:text-blue-400 transition">
                Resources
              </Link>
              <Link
                href="/sds"
                className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-white"
              >
                SDS
              </Link>
            </div>
          </div>
        </nav>

        {/* CONTENT */}
        <main className="flex-1 w-full">{children}</main>

        {/* FOOTER */}
        <footer className="mt-20 bg-slate-900 border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                <li><Link href="/pillars" className="hover:text-blue-400">Pillars</Link></li>
                <li><Link href="/categories" className="hover:text-blue-400">Categories</Link></li>
                <li><Link href="/products" className="hover:text-blue-400">Products</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/resources" className="hover:text-blue-400">Resources</Link></li>
                <li><Link href="/sds" className="hover:text-blue-400">Safety Data Sheets</Link></li>
                <li><Link href="/tds" className="hover:text-blue-400">Technical Data Sheets</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Contact</h4>
              <p className="text-gray-300 leading-relaxed">
                CheapTubes Inc.<br />
                Nano-materials manufacturer & global supplier.
              </p>
              <p className="mt-3 text-gray-400 text-sm">© {new Date().getFullYear()} CheapTubes Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
