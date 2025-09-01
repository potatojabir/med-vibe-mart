import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scene3D } from '@/components/3d/Scene3D';
import { Medicine3D } from '@/components/3d/Medicine3D';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Pill, 
  Activity, 
  Thermometer, 
  Brain 
} from 'lucide-react';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    image: string;
    count: number;
  };
  index: number;
  onClick?: () => void;
}

const categoryIcons = {
  'Pain Relief': Heart,
  'Antibiotics': Shield,
  'Vitamins': Pill,
  'Heart & Blood': Activity,
  'Diabetes Care': Thermometer,
  'Mental Health': Brain,
};

const categoryColors = {
  'Pain Relief': '#EF4444',
  'Antibiotics': '#3B82F6',
  'Vitamins': '#F59E0B',
  'Heart & Blood': '#DC2626',
  'Diabetes Care': '#059669',
  'Mental Health': '#8B5CF6',
};

export function CategoryCard({ category, index, onClick }: CategoryCardProps) {
  const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || Pill;
  const iconColor = categoryColors[category.name as keyof typeof categoryColors] || '#3B82F6';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className="card-medical group cursor-pointer overflow-hidden tilt-hover h-full"
        onClick={onClick}
      >
        <CardContent className="p-0">
          {/* Category Image & 3D Icon */}
          <div className="relative h-40 overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* 3D Icon */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
              <IconComponent className="w-6 h-6 text-white" style={{ color: 'white' }} />
            </div>

            {/* 3D Medicine on Hover */}
            <motion.div
              className="absolute bottom-4 left-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Scene3D 
                className="w-full h-full" 
                enableControls={false}
                cameraPosition={[0, 0, 4]}
              >
                <Medicine3D
                  type="pill"
                  color={iconColor}
                  autoRotate={true}
                  scale={1}
                />
              </Scene3D>
            </motion.div>

            {/* Medicine Count Badge */}
            <Badge 
              variant="secondary" 
              className="absolute bottom-4 right-4 bg-white/90 text-primary"
            >
              {category.count} items
            </Badge>
          </div>

          {/* Category Info */}
          <div className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${iconColor}15` }}>
                <IconComponent className="w-4 h-4" style={{ color: iconColor }} />
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Explore {category.count} medicines in this category
            </p>

            <div className="pt-2">
              <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: iconColor }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((category.count / 25) * 100, 100)}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Availability: {Math.min((category.count / 25) * 100, 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}