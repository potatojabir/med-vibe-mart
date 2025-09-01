import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CategoryCard } from "@/components/categories/CategoryCard";
import { categories } from "@/data/mockData";

export default function Categories() {
  return (
    <>
      <Helmet>
        <title>Categories - MedX-Mart | Browse Medicine Categories</title>
        <meta name="description" content="Explore our comprehensive medicine categories. Find medications organized by type, condition, and therapeutic area for easy browsing." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Medicine Categories
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our extensive collection of medicines organized by categories. Find exactly what you need for your health and wellness journey.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <h2 className="text-xl font-semibold mb-2">Need Help Finding Something?</h2>
              <p className="text-muted-foreground mb-4">
                Our categories are designed to help you quickly find the right medication. Each category contains verified medicines from trusted vendors.
              </p>
              <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                <span>✓ Quality Assured</span>
                <span>✓ Verified Vendors</span>
                <span>✓ Secure Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}