
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Clock, TrendingUp, Shield } from "lucide-react";

const roiMetrics = [
  {
    title: "Total ROI Potential",
    value: "2,000%+",
    description: "3-year return on platform investment",
    progress: 85,
    icon: DollarSign,
    color: "emerald"
  },
  {
    title: "Time to Market Reduction",
    value: "50-75%",
    description: "Faster product development cycles",
    progress: 70,
    icon: Clock,
    color: "blue"
  },
  {
    title: "Design Iteration Speed",
    value: "10x Faster",
    description: "From months to days for validation",
    progress: 90,
    icon: TrendingUp,
    color: "purple"
  },
  {
    title: "Risk Mitigation",
    value: "90%",
    description: "Early detection of design flaws",
    progress: 95,
    icon: Shield,
    color: "red"
  }
];

const ROIMetrics = () => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Expected ROI Impact</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Quantified business value for large manufacturing companies implementing our platform
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roiMetrics.map((metric, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={`p-2 bg-${metric.color}-100 rounded-lg`}>
                  <metric.icon className={`h-5 w-5 text-${metric.color}-600`} />
                </div>
                <Badge variant="outline" className={`text-${metric.color}-600 border-${metric.color}-200`}>
                  Target
                </Badge>
              </div>
              <CardTitle className="text-lg">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold text-${metric.color}-600 mb-2`}>
                {metric.value}
              </div>
              <CardDescription className="mb-4">
                {metric.description}
              </CardDescription>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to Target</span>
                  <span className="font-medium">{metric.progress}%</span>
                </div>
                <Progress value={metric.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ROIMetrics;
