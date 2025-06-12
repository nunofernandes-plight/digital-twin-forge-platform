
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle, DollarSign, Clock, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-32 px-6">
      <div className="container mx-auto text-center">
        <Badge className="mb-6 bg-emerald-100 text-emerald-800 border-emerald-200">
          🎯 Delivering 2,000%+ ROI for Manufacturing Leaders
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Prevent $100M+ Design Recalls with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            AI-Powered Digital Twins
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          The first platform that prevents costly design flaws, accelerates product launches by 6+ months, 
          and reduces engineering team requirements by 30% through real-time collaboration and AI insights.
        </p>

        {/* ROI Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-red-900 mb-2">$100M+</div>
            <div className="text-sm text-red-700">Prevent Design Recalls</div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-900 mb-2">6+ Months</div>
            <div className="text-sm text-blue-700">Faster Product Launch</div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-emerald-900 mb-2">30%</div>
            <div className="text-sm text-emerald-700">Smaller Team Size</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
            Calculate Your ROI
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
            <Play className="mr-2 h-5 w-5" />
            Watch Success Story
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
            AI Failure Prediction
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
            Real-time Global Teams
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
            One-Click CAD Integration
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
            Enterprise Security
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
