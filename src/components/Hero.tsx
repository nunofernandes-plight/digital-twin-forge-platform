
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-32 px-6">
      <div className="container mx-auto text-center">
        <Badge className="mb-6 bg-emerald-100 text-emerald-800 border-emerald-200">
          🚀 Now in Beta - CAD/CAE Integration Available
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Digital Twin Platform for{" "}
          <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Engineering Excellence
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Accelerate product development with advanced digital twin simulations. 
          Seamlessly integrate CAE and CAD systems for real-time collaboration and analysis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
            Start Building
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
            CAD Integration Ready
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
            Real-time Simulation
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
            Team Collaboration
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
