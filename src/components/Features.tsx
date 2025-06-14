
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Zap, Shield, Clock, Target, AlertTriangle, Workflow } from "lucide-react";

const features = [
  {
    icon: AlertTriangle,
    title: "AI Failure Prediction",
    description: "Machine learning models analyze design patterns to predict potential failure points before manufacturing.",
    badge: "Recall Prevention"
  },
  {
    icon: Brain,
    title: "Automated Design Optimization",
    description: "AI suggests improvements for weight reduction, stress distribution, and material efficiency.",
    badge: "AI-Powered"
  },
  {
    icon: Users,
    title: "Real-Time Global Collaboration",
    description: "Multiple engineers work simultaneously on the same digital twin with live sync.",
    badge: "Team Efficiency"
  },
  {
    icon: Zap,
    title: "One-Click CAD Integration",
    description: "Connect SolidWorks, CATIA, and ANSYS in minutes. No complex IT deployments.",
    badge: "Fast Setup"
  },
  {
    icon: Clock,
    title: "Parallel Design Workflows",
    description: "Eliminate sequential handoffs. CAD, simulation, and validation happen simultaneously.",
    badge: "Speed to Market"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and air-gapped deployments protect your IP.",
    badge: "Enterprise Ready"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Platform Features That Deliver ROI
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Every feature prevents recalls, accelerates launches, or reduces team requirements. 
            Built for manufacturing programs worth $100M to $10B+.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-emerald-700 transition-all duration-300 group hover:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-emerald-900/30 rounded-lg group-hover:bg-emerald-900/50 transition-colors">
                    <feature.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <Badge className="bg-slate-700 text-slate-300 border-slate-600">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
