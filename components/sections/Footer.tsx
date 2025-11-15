import { Microscope, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Microscope className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">NanoTech Solutions</span>
            </div>
            <p className="text-sm leading-relaxed">
              Leading provider of advanced nanomaterials for industrial, medical, and research applications worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Carbon Nanotubes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quantum Dots</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Metal Nanoparticles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Graphene Oxide</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research & Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Standards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@nanotech.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span>123 Innovation Drive<br />Research Park, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} NanoTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
