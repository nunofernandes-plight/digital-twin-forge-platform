
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Clock, DollarSign, Shield } from 'lucide-react';

const stats = [
  {
    title: "Uptime Improvement",
    value: "99.8%",
    description: "Average robot availability",
    icon: TrendingUp,
    color: "emerald"
  },
  {
    title: "Maintenance Cost Reduction",
    value: "45%",
    description: "Through predictive analytics",
    icon: DollarSign,
    color: "blue"
  },
  {
    title: "Faster Issue Resolution",
    value: "75%",
    description: "With digital twin diagnostics",
    icon: Clock,
    color: "purple"
  },
  {
    title: "Safety Incidents",
    value: "Zero",
    description: "Virtual testing eliminates risks",
    icon: Shield,
    color: "red"
  }
];

const RoboticsStats = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Proven Results in Robotics
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our Robot Digital Twin platform delivers measurable improvements across key metrics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow dark:bg-slate-800/50">
              <CardContent className="p-6">
                <div className={`p-3 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-lg inline-block mb-4`}>
                  <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                </div>
                <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>
                  {stat.value}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                  {stat.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoboticsStats;
