
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <Stats />
      <Features />
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Prevent Your Next $100M+ Design Recall?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join Fortune 500 manufacturing leaders who are eliminating design risks, 
            accelerating product launches, and reducing engineering costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
              Calculate Your ROI
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/roadmap">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                View Product Roadmap
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
