import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Truck, 
  Clock, 
  Award, 
  Users, 
  CheckCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

const trustFeatures = [
  {
    icon: Shield,
    title: 'FDA Approved',
    description: 'All medicines are FDA approved and sourced from licensed manufacturers',
    badge: 'Verified'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery in major cities, 2-3 days nationwide shipping',
    badge: 'Express'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer support and pharmacist consultation',
    badge: 'Available'
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Every product undergoes strict quality checks before dispatch',
    badge: 'Certified'
  },
  {
    icon: Users,
    title: 'Trusted Vendors',
    description: 'Partnership with 50+ verified pharmaceutical distributors',
    badge: 'Licensed'
  },
  {
    icon: CheckCircle,
    title: 'Secure Payment',
    description: 'SSL encrypted payments with multiple secure payment options',
    badge: 'Protected'
  }
];

export function TrustSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>Trusted & Secure</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose MedX-Mart?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing safe, authentic medications with exceptional service. 
            Your health and trust are our top priorities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-medical h-full">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 medical-gradient rounded-2xl flex items-center justify-center mx-auto">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-1 -right-1 bg-success text-success-foreground text-xs"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 pt-8 border-t"
        >
          <p className="text-sm text-muted-foreground mb-4">Certified & Recognized By</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              🏥 FDA Registered
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              🔒 SSL Certified
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              ⭐ ISO 9001:2015
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              📋 GMP Compliant
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}