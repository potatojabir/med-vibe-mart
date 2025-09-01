import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Truck, Users, Award, Clock } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All medicines are sourced from verified manufacturers and undergo strict quality checks."
    },
    {
      icon: Users,
      title: "Trusted Vendors",
      description: "We partner only with licensed pharmacies and authorized medical suppliers."
    },
    {
      icon: Truck,
      title: "Safe Delivery",
      description: "Temperature-controlled shipping ensures medicine integrity from our warehouse to your door."
    },
    {
      icon: Award,
      title: "Certified Platform",
      description: "MedX-Mart is certified by health authorities and follows international safety standards."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our medical experts are available round the clock to assist with your queries."
    },
    {
      icon: Heart,
      title: "Patient-Centric",
      description: "Everything we do is focused on improving patient outcomes and healthcare accessibility."
    }
  ];

  const stats = [
    { label: "Verified Medicines", value: "500+" },
    { label: "Trusted Vendors", value: "50+" },
    { label: "Happy Customers", value: "10,000+" },
    { label: "Years of Experience", value: "5+" }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - MedX-Mart | Trusted Medicine Platform</title>
        <meta name="description" content="Learn about MedX-Mart's mission to provide authentic, quality medicines through verified vendors. Discover our commitment to healthcare accessibility and patient safety." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="medical-gradient text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                🏥 About MedX-Mart
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold">
                Revolutionizing Healthcare Access
              </h1>
              <p className="text-xl text-white/90">
                We're on a mission to make authentic medicines accessible to everyone, 
                connecting patients with trusted vendors through our secure platform.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 space-y-16">
          {/* Stats Section */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </section>

          {/* Our Story */}
          <section className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground">
                Founded with a vision to bridge the gap between patients and quality healthcare
              </p>
            </div>
            
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                MedX-Mart was born from a simple yet powerful idea: everyone deserves access to 
                authentic, quality medicines regardless of their location or circumstances. 
                Our founders, healthcare professionals and technology experts, recognized the 
                challenges patients face in finding reliable medication sources.
              </p>
              <p>
                Today, we've built a comprehensive platform that connects patients with verified 
                vendors, ensuring every medicine meets the highest quality standards. Our 
                technology-driven approach combines traditional pharmaceutical expertise with 
                modern e-commerce capabilities.
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose MedX-Mart</h2>
              <p className="text-muted-foreground">
                We're committed to providing the best healthcare experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  🎯 Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To democratize access to quality healthcare by creating a trusted, 
                  technology-enabled platform that connects patients with verified 
                  medicine suppliers, ensuring safe and affordable healthcare for all.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  🔮 Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become the world's most trusted healthcare marketplace, 
                  where every patient can confidently access authentic medicines 
                  and healthcare services with complete transparency and reliability.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
}