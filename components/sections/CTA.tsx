import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-700/50 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Applications?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Connect with our materials science experts to discover how our nanomaterials can enhance your products and processes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="text-base px-8 py-6 bg-white text-slate-900 hover:bg-slate-100 group"
            >
              <Mail className="mr-2 w-5 h-5" />
              Request a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-2 border-white text-white hover:bg-white/10"
            >
              <Phone className="mr-2 w-5 h-5" />
              Schedule Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-slate-700">
            <div>
              <div className="text-slate-400 text-sm mb-1">Response Time</div>
              <div className="text-white text-lg font-semibold">24 Hours</div>
            </div>
            <div>
              <div className="text-slate-400 text-sm mb-1">Sample Delivery</div>
              <div className="text-white text-lg font-semibold">3-5 Days</div>
            </div>
            <div>
              <div className="text-slate-400 text-sm mb-1">Technical Support</div>
              <div className="text-white text-lg font-semibold">24/7 Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
