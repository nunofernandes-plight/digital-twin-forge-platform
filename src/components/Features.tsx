
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Zap, Shield, Clock, Target, AlertTriangle, Workflow } from "lucide-react";

const features = [
  {
    icon: AlertTriangle,
    title: "AI Failure Prediction",
    description: "Machine learning models analyze design patterns to predict potential failure points before costly manufacturing begins.",
    badge: "Recall Prevention",
    badgeColor: "red"
  },
  {
    icon: Brain,
    title: "Automated Design Optimization",
    description: "AI suggests improvements for weight reduction, stress distribution, and material efficiency based on millions of simulations.",
    badge: "AI-Powered",
    badgeColor: "purple"
  },
  {
    icon: Users,
    title: "Real-Time Global Collaboration",
    description: "Multiple engineers work simultaneously on the same digital twin with live cursors, instant sync, and conflict resolution.",
    badge: "Team Efficiency",
    badgeColor: "emerald"
  },
  {
    icon: Zap,
    title: "One-Click CAD Integration",
    description: "Connect SolidWorks, CATIA, and ANSYS in minutes, not months. No complex IT deployments or expensive consultants.",
    badge: "Fast Setup",
    badgeColor: "blue"
  },
  {
    icon: Clock,
    title: "Parallel Design Workflows",
    description: "Eliminate sequential handoffs between teams. CAD, simulation, and validation happen simultaneously.",
    badge: "Speed to Market",
    badgeColor: "blue"
  },
  {
    icon: Target,
    title: "Compliance Validation",
    description: "Automated checking against industry standards (ISO, ASME, FAR) prevents regulatory issues and recalls.",
    badge: "Risk Mitigation",
    badgeColor: "red"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and air-gapped deployments protect your most valuable IP.",
    badge: "Enterprise Ready",
    badgeColor: "slate"
  },
  {
    icon: Workflow,
    title: "ROI Dashboard",
    description: "Track cost savings, time reductions, and risk mitigation in real-time with executive reporting.",
    badge: "Business Value",
    badgeColor: "emerald"
  }
];

const badgeColorClasses = {
  red: "bg-red-100 text-red-800 border-red-200",
  blue: "bg-blue-100 text-blue-800 border-blue-200",
  emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
  purple: "bg-purple-100 text-purple-800 border-purple-200",
  slate: "bg-slate-100 text-slate-800 border-slate-200"
};

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Platform Features That Deliver Measurable ROI
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every feature is designed to prevent recalls, accelerate launches, or reduce team requirements. 
            Built for manufacturing programs worth $100M to $10B+.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-200 hover:border-emerald-200 transition-all duration-300 group hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <Badge className={badgeColorClasses[feature.badgeColor as keyof typeof badgeColorClasses]}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-slate-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
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
