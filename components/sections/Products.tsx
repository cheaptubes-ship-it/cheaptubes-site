import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const productCategories = [
  {
    category: 'Carbon Nanotubes',
    description: 'Single and multi-walled carbon nanotubes with exceptional mechanical and electrical properties.',
    applications: ['Electronics', 'Composites', 'Energy Storage'],
    purity: '99.9%',
    gradient: 'from-slate-900 to-slate-700',
  },
  {
    category: 'Quantum Dots',
    description: 'Semiconductor nanocrystals for advanced optoelectronics and biomedical imaging applications.',
    applications: ['Displays', 'Solar Cells', 'Biosensors'],
    purity: '99.5%',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    category: 'Metal Nanoparticles',
    description: 'Gold, silver, and platinum nanoparticles for catalysis, sensing, and medical applications.',
    applications: ['Catalysis', 'Medicine', 'Sensors'],
    purity: '99.99%',
    gradient: 'from-amber-600 to-yellow-500',
  },
  {
    category: 'Graphene Oxide',
    description: 'High-quality graphene oxide sheets for advanced materials and energy applications.',
    applications: ['Coatings', 'Batteries', 'Filtration'],
    purity: '99.7%',
    gradient: 'from-slate-700 to-slate-500',
  },
  {
    category: 'Ceramic Nanoparticles',
    description: 'Advanced ceramic nanomaterials for high-temperature and structural applications.',
    applications: ['Aerospace', 'Automotive', 'Defense'],
    purity: '99.8%',
    gradient: 'from-orange-600 to-red-500',
  },
  {
    category: 'Nanofibers',
    description: 'Electrospun polymer and composite nanofibers for filtration and tissue engineering.',
    applications: ['Filtration', 'Biomedical', 'Textiles'],
    purity: '99.6%',
    gradient: 'from-green-600 to-emerald-500',
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Product Categories
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive portfolio of nanomaterials spanning multiple material classes and applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className={`h-2 bg-gradient-to-r ${product.gradient}`} />
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {product.category}
                  </h3>
                  <Badge variant="secondary" className="ml-2">
                    {product.purity}
                  </Badge>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="mb-4">
                  <div className="text-sm font-semibold text-slate-700 mb-2">
                    Key Applications:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, appIndex) => (
                      <Badge
                        key={appIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-4 border-t">
                <Button
                  variant="ghost"
                  className="w-full group hover:bg-slate-100"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
