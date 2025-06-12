
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Rocket, Users, Target } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: "90%",
    label: "Design Flaws Prevented",
    description: "Early detection through AI-powered failure prediction",
    color: "red"
  },
  {
    icon: Rocket,
    value: "6 Months",
    label: "Faster Time to Market",
    description: "Real-time collaboration eliminates sequential handoffs",
    color: "blue"
  },
  {
    icon: Users,
    value: "30%",
    label: "Team Size Reduction",
    description: "AI recommendations augment human expertise",
    color: "emerald"
  },
  {
    icon: Target,
    value: "2,000%+",
    label: "3-Year ROI",
    description: "Proven returns for $500M+ manufacturing programs",
    color: "purple"
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Quantified Business Impact for Manufacturing Leaders
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real ROI metrics from Fortune 500 manufacturing programs using our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 text-center group hover:bg-slate-750 transition-colors">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 bg-${stat.color}-600/20 rounded-lg group-hover:bg-${stat.color}-600/30 transition-colors`}>
                    <stat.icon className={`h-8 w-8 text-${stat.color}-400`} />
                  </div>
                </div>
                <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-slate-400 leading-relaxed">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
