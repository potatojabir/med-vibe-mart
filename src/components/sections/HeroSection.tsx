import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from 'lucide-react';
import { Scene3D } from '@/components/3d/Scene3D';
import { Medicine3D } from '@/components/3d/Medicine3D';
import { heroProducts } from '@/data/mockData';
import { useCartStore } from '@/stores/cartStore';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addItem } = useCartStore();
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentProduct = heroProducts[currentSlide];

  const handleAddToCart = () => {
    addItem(currentProduct);
    toast.success(`${currentProduct.name} added to cart!`);
  };

  const getMedicineType = (name: string) => {
    if (name.toLowerCase().includes('vitamin')) return 'bottle';
    if (name.toLowerCase().includes('capsule') || name.toLowerCase().includes('omega')) return 'capsule';
    if (name.toLowerCase().includes('tablet')) return 'tablet';
    return 'pill';
  };

  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <motion.div 
            className="space-y-6 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                🏥 Trusted Medicine Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Health, 
                <span className="block text-accent">Our Priority</span>
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
                Discover authentic medicines from verified vendors. Safe, secure, and delivered to your doorstep with care.
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{currentProduct.name}</h3>
                    <p className="text-white/80">{currentProduct.genericName}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-warning">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-medium">{currentProduct.rating}</span>
                    </div>
                    <div className="text-xs text-white/60">Rated by customers</div>
                  </div>
                </div>

                <p className="text-white/90 mb-4">{currentProduct.shortDescription}</p>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-white">
                        ${(currentProduct.price * (1 - currentProduct.discountPct / 100)).toFixed(2)}
                      </span>
                      {currentProduct.discountPct > 0 && (
                        <>
                          <span className="text-lg line-through text-white/60">
                            ${currentProduct.price.toFixed(2)}
                          </span>
                          <Badge variant="destructive" className="bg-red-500 text-white">
                            -{currentProduct.discountPct}%
                          </Badge>
                        </>
                      )}
                    </div>
                    <p className="text-white/60 text-sm">
                      {currentProduct.mass}{currentProduct.unit} • {currentProduct.company}
                    </p>
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 glow"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                Explore Categories
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
              >
                Learn More →
              </Button>
            </div>
          </motion.div>

          {/* 3D Showcase Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <Scene3D 
                className="w-full h-full" 
                enableControls={false}
                cameraPosition={[0, 0, 6]}
              >
                <Medicine3D
                  type={getMedicineType(currentProduct.name)}
                  color={currentSlide % 2 === 0 ? "#3B82F6" : "#10B981"}
                  autoRotate={true}
                  scale={2}
                />
              </Scene3D>
              
              {/* Navigation Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="flex space-x-2">
                  {heroProducts.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Medicines</div>
              </div>
            </div>
            
            <div className="absolute bottom-20 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-white/80">Vendors</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}