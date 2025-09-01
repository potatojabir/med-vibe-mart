import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/stores/cartStore';
import { Minus, Plus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export function CartSidebar() {
  const { 
    items, 
    isOpen, 
    toggleCart, 
    updateQuantity, 
    removeItem, 
    clearCart, 
    getTotalPrice,
    getTotalItems 
  } = useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    toast.success('Redirecting to checkout...');
    // Here you would integrate with your payment system
  };

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5" />
            <span>Shopping Cart</span>
            {totalItems > 0 && (
              <Badge variant="secondary" className="ml-2">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 flex flex-col">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <AnimatePresence>
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-64 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Your cart is empty</h3>
                    <p className="text-muted-foreground">Add some medicines to get started</p>
                  </div>
                  <Button onClick={toggleCart} variant="outline">
                    Continue Shopping
                  </Button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card rounded-lg p-4 border card-medical"
                    >
                      <div className="flex space-x-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        
                        <div className="flex-1 space-y-2">
                          <div>
                            <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                            <p className="text-xs text-muted-foreground">{item.genericName}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.mass}{item.unit} • {item.company}
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-8 h-8 p-0"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              
                              <span className="text-sm font-medium min-w-[20px] text-center">
                                {item.quantity}
                              </span>
                              
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-8 h-8 p-0"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>

                            <Button
                              size="sm"
                              variant="ghost"
                              className="w-8 h-8 p-0 text-destructive hover:text-destructive"
                              onClick={() => {
                                removeItem(item.id);
                                toast.success(`${item.name} removed from cart`);
                              }}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-primary">
                                  ${(item.price * (1 - item.discountPct / 100)).toFixed(2)}
                                </span>
                                {item.discountPct > 0 && (
                                  <>
                                    <span className="text-xs line-through text-muted-foreground">
                                      ${item.price.toFixed(2)}
                                    </span>
                                    <Badge variant="destructive" className="text-xs px-1 py-0">
                                      -{item.discountPct}%
                                    </Badge>
                                  </>
                                )}
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-sm font-bold">
                                ${((item.price * (1 - item.discountPct / 100)) * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              {/* Clear Cart */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  clearCart();
                  toast.success('Cart cleared');
                }}
                className="w-full"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Cart
              </Button>

              <Separator />

              {/* Total */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-success">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button 
                size="lg" 
                className="w-full medical-gradient text-white glow"
                onClick={handleCheckout}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}