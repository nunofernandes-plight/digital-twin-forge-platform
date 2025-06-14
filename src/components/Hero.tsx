
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Shield, Clock, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-6 bg-slate-900">
      <div className="container mx-auto text-center">
        <Badge className="mb-6 bg-emerald-900/50 text-emerald-400 border-emerald-700">
          Trusted by Fortune 500 Manufacturing Leaders
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Prevent $100M+ Design Recalls with{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            AI-Powered Digital Twins
          </span>
        </h1>
        
        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          The only platform that prevents costly design flaws, accelerates product launches by 6+ months, 
          and reduces engineering costs through real-time collaboration and AI insights.
        </p>

        {/* Key Value Props */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-red-900/30 rounded-lg">
                <Shield className="h-6 w-6 text-red-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-2">90%</div>
            <div className="text-sm text-slate-300">Design Flaws Prevented</div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-blue-900/30 rounded-lg">
                <Clock className="h-6 w-6 text-blue-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-2">6+ Months</div>
            <div className="text-sm text-slate-300">Faster Time to Market</div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-emerald-900/30 rounded-lg">
                <Target className="h-6 w-6 text-emerald-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-emerald-400 mb-2">2,000%+</div>
            <div className="text-sm text-slate-300">3-Year ROI</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
            Calculate Your ROI
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
