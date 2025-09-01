import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Scene3D } from '@/components/3d/Scene3D';
import { Medicine3D } from '@/components/3d/Medicine3D';
import { Medicine, useCartStore } from '@/stores/cartStore';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface ProductCardProps {
  medicine: Medicine;
  index: number;
}

export function ProductCard({ medicine, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem(medicine);
    toast.success(`${medicine.name} added to cart!`);
  };

  const discountedPrice = medicine.price * (1 - medicine.discountPct / 100);

  const getMedicineType = (name: string) => {
    if (name.toLowerCase().includes('vitamin')) return 'bottle';
    if (name.toLowerCase().includes('capsule') || name.toLowerCase().includes('omega')) return 'capsule';
    if (name.toLowerCase().includes('tablet')) return 'tablet';
    return 'pill';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className="card-medical group cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          {/* Product Image & 3D Hover */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
            <motion.div
              className="w-full h-full"
              animate={{ rotateY: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isHovered ? (
                <Scene3D 
                  className="w-full h-full" 
                  enableControls={false}
                  cameraPosition={[0, 0, 4]}
                >
                  <Medicine3D
                    type={getMedicineType(medicine.name)}
                    color="#3B82F6"
                    autoRotate={true}
                    scale={1.5}
                  />
                </Scene3D>
              ) : (
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </motion.div>
            
            {/* Discount Badge */}
            {medicine.discountPct > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute top-2 left-2 bg-red-500 text-white"
              >
                -{medicine.discountPct}%
              </Badge>
            )}

            {/* Quick Actions */}
            <div className="absolute top-2 right-2 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                <Heart className="w-4 h-4" />
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                    <Eye className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{medicine.name}</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="h-96">
                      <Scene3D 
                        className="w-full h-full" 
                        enableControls={true}
                        cameraPosition={[0, 0, 5]}
                      >
                        <Medicine3D
                          type={getMedicineType(medicine.name)}
                          color="#3B82F6"
                          autoRotate={false}
                          scale={2}
                        />
                      </Scene3D>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">{medicine.name}</h3>
                        <p className="text-muted-foreground">{medicine.genericName}</p>
                      </div>
                      <p className="text-sm">{medicine.shortDescription}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Company:</span>
                          <span>{medicine.company}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Strength:</span>
                          <span>{medicine.mass}{medicine.unit}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Stock:</span>
                          <span>{medicine.stock} units</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">
                          ${discountedPrice.toFixed(2)}
                        </span>
                        {medicine.discountPct > 0 && (
                          <span className="text-lg line-through text-muted-foreground">
                            ${medicine.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <Button onClick={handleAddToCart} className="w-full medical-gradient text-white">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-lg line-clamp-1">{medicine.name}</h3>
              <p className="text-sm text-muted-foreground">{medicine.genericName}</p>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {medicine.shortDescription}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-warning text-warning" />
                <span className="text-sm font-medium">{medicine.rating}</span>
                <span className="text-sm text-muted-foreground">({medicine.stock})</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {medicine.category}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-primary">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  {medicine.discountPct > 0 && (
                    <span className="text-sm line-through text-muted-foreground">
                      ${medicine.price.toFixed(2)}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {medicine.mass}{medicine.unit} • {medicine.company}
                </p>
              </div>

              <Button 
                onClick={handleAddToCart}
                size="sm" 
                className="medical-gradient text-white"
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}