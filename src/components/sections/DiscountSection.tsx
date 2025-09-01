import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from '@/components/products/ProductCard';
import { discountedProducts } from '@/data/mockData';
import { motion } from 'framer-motion';

export function DiscountSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-destructive rounded-full animate-pulse"></span>
            <span>Limited Time Offers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discounted Medicines
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Save big on essential medications. All products are genuine and sourced from verified pharmaceutical vendors.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-background shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-background shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* 3D Draggable Slider */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 px-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            {discountedProducts.map((medicine, index) => (
              <motion.div
                key={medicine.id}
                className="flex-none w-80"
                initial={{ opacity: 0, rotateY: -15, z: -100 }}
                whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <ProductCard medicine={medicine} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="md:hidden flex justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(discountedProducts.length / 2) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted"
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="medical-gradient text-white glow">
            View All Discounted Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}