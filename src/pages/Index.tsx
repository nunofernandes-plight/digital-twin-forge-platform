
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <PricingSection />
      
      {/* Simplified CTA Section */}
      <section className="py-16 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Join industry leaders preventing costly recalls and accelerating product launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
              <Play className="mr-2 h-4 w-4" />
              See Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
