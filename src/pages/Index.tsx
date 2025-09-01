import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { CategoriesSection } from '@/components/sections/CategoriesSection';
import { DiscountSection } from '@/components/sections/DiscountSection';
import { TrustSection } from '@/components/sections/TrustSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MedX-Mart - Your Trusted Medicine E-Commerce Platform</title>
        <meta 
          name="description" 
          content="Shop authentic medicines from verified vendors. FDA approved medications, fast delivery, 24/7 support. Your health, our priority." 
        />
        <meta name="keywords" content="medicine, pharmacy, online pharmacy, prescription, healthcare, medical supplies" />
        <meta property="og:title" content="MedX-Mart - Your Trusted Medicine E-Commerce Platform" />
        <meta property="og:description" content="Shop authentic medicines from verified vendors. FDA approved medications, fast delivery, 24/7 support." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://medx-mart.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          <HeroSection />
          <CategoriesSection />
          <DiscountSection />
          <TrustSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
