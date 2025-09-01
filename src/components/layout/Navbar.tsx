import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCartStore } from '@/stores/cartStore';
import { 
  Heart, 
  Menu, 
  Search, 
  ShoppingCart, 
  User, 
  Globe,
  Clock
} from 'lucide-react';

export function Navbar() {
  const navigate = useNavigate();
  const { toggleCart, getTotalItems } = useCartStore();
  const [currentTime, setCurrentTime] = useState(new Date());
  const totalItems = getTotalItems();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 medical-gradient rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MedX-Mart</h1>
              <p className="text-xs text-muted-foreground">Trusted Medicine</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Digital Clock */}
            <div className="hidden sm:flex items-center space-x-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
              <Clock className="w-3 h-3" />
              <span>{currentTime.toLocaleTimeString()}</span>
            </div>

            {/* Language Selector */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Globe className="w-4 h-4 mr-1" />
              EN
            </Button>

            {/* Search */}
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              className="relative"
              onClick={toggleCart}
            >
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {totalItems > 9 ? '9+' : totalItems}
                </Badge>
              )}
            </Button>

            {/* User Profile / Auth */}
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link 
                    to="/" 
                    className="flex items-center space-x-2 text-lg font-medium hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/shop" 
                    className="flex items-center space-x-2 text-lg font-medium hover:text-primary transition-colors"
                  >
                    Shop
                  </Link>
                  <Link 
                    to="/categories" 
                    className="flex items-center space-x-2 text-lg font-medium hover:text-primary transition-colors"
                  >
                    Categories
                  </Link>
                  <Link 
                    to="/about" 
                    className="flex items-center space-x-2 text-lg font-medium hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}