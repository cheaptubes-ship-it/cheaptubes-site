import { Atom, Shield, Zap, Beaker, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Atom,
    title: 'Atomic Precision',
    description: 'Materials engineered at the atomic level for unparalleled structural control and performance characteristics.',
  },
  {
    icon: Shield,
    title: 'Superior Durability',
    description: 'Enhanced strength-to-weight ratios and exceptional resistance to environmental degradation.',
  },
  {
    icon: Zap,
    title: 'High Conductivity',
    description: 'Exceptional electrical and thermal conductivity properties for advanced electronics applications.',
  },
  {
    icon: Beaker,
    title: 'Custom Synthesis',
    description: 'Tailored nanomaterial solutions designed specifically for your unique application requirements.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'ISO-certified manufacturing processes ensuring consistent quality and regulatory compliance.',
  },
  {
    icon: Globe,
    title: 'Global Distribution',
    description: 'Worldwide shipping network with rapid delivery and comprehensive technical support.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Our Nanomaterials
          </h2>
          <p className="text-lg text-slate-600">
            Cutting-edge materials science backed by decades of research and proven performance across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
