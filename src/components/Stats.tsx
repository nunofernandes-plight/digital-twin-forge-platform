
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users, Zap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "85%",
    label: "Faster Design Iterations",
    description: "Average time reduction in product development cycles"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Simulation Processing",
    description: "Continuous cloud-based computation availability"
  },
  {
    icon: Users,
    value: "500+",
    label: "Engineering Teams",
    description: "Trust our platform for critical product development"
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime Guarantee",
    description: "Enterprise-grade reliability and performance"
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-emerald-600/20 rounded-lg">
                    <stat.icon className="h-8 w-8 text-emerald-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-emerald-400 mb-2">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
