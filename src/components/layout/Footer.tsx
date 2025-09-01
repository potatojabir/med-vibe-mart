import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 medical-gradient rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">MedX-Mart</h1>
                <p className="text-xs text-muted-foreground">Trusted Medicine</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your trusted multi-vendor medicine e-commerce platform. We connect you with verified 
              pharmaceutical vendors to ensure safe, authentic medications delivered to your doorstep.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Browse Medicines</a></li>
              <li><a href="/categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Categories</a></li>
              <li><a href="/vendors" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Vendors</a></li>
              <li><a href="/prescriptions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Upload Prescription</a></li>
              <li><a href="/health-articles" className="text-sm text-muted-foreground hover:text-primary transition-colors">Health Articles</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <ul className="space-y-2">
              <li><a href="/help" className="text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="/shipping" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="text-sm text-muted-foreground hover:text-primary transition-colors">Returns Policy</a></li>
              <li><a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-MEDS</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@medx-mart.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>24/7 Online Support</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Newsletter</p>
              <p className="text-xs text-muted-foreground">Get health tips & medicine updates</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter email" 
                  className="h-9 text-sm"
                />
                <Button size="sm" className="medical-gradient text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 MedX-Mart. All rights reserved. | Licensed Pharmacy Platform
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <span>🏥 FDA Approved</span>
            <span>🔒 Secure Checkout</span>
            <span>📋 Licensed Vendors</span>
          </div>
        </div>
      </div>
    </footer>
  );
}