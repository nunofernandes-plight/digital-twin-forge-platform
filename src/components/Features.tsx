
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Users, Settings, BarChart3, Globe, Shield, Workflow } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Advanced Simulation Engine",
    description: "High-performance computing for complex engineering simulations with real-time feedback and analysis."
  },
  {
    icon: Workflow,
    title: "CAD/CAE Integration",
    description: "Seamlessly connect with popular CAD and CAE systems including SolidWorks, ANSYS, and Autodesk."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enable cross-functional teams to collaborate on digital twins with version control and review workflows."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Comprehensive dashboards and reporting tools to track simulation performance and design iterations."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with encryption, SSO integration, and compliance with industry standards."
  },
  {
    icon: Globe,
    title: "Cloud-Native Platform",
    description: "Scalable cloud infrastructure that grows with your team and handles demanding computational workloads."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need for Digital Twin Development
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful tools and integrations designed specifically for engineering teams building the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-200 hover:border-emerald-200 transition-colors group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{feature.title}</CardTitle>
                </div>
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
