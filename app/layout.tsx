import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "CheapTubes | Advanced Nanomaterials",
  description:
    "Graphene, CNTs, dispersions, nanocomposites, and advanced nanomaterials engineered for real-world use.",
  icons: {
    icon: "/cheaptubes-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white flex flex-col min-h-screen">

        {/* HEADER */}
        <header className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/cheaptubes-logo.png"
                width={40}
                height={40}
                alt="CheapTubes Logo"
                className="opacity-95 hover:opacity-100 drop-shadow-[0_0_6px_rgba(0,0,0,0.4)] transition"
              />
              <span className="text-xl font-semibold">CheapTubes</span>
            </div>

            <nav className="flex gap-6 text-sm text-gray-300">
              <a href="/" className="hover:text-blue-400">Home</a>
              <a href="/categories" className="hover:text-blue-400">Materials</a>
              <a href="/contact" className="hover:text-blue-400">Contact</a>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full">{children}</main>

        {/* FOOTER */}
        <footer className="mt-20 bg-slate-900 border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/">Home</a></li>
                <li><a href="/categories">Materials</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/categories/graphene">Graphene</a></li>
                <li><a href="/categories/cnt">Carbon Nanotubes</a></li>
                <li><a href="/categories/nanocomposites">Nanocomposites</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li>SDS / TDS</li>
                <li>Documentation</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
