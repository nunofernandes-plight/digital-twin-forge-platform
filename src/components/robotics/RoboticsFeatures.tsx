
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Brain, Activity, Shield, Zap, BarChart3, Globe, Workflow } from 'lucide-react';

const features = [
  {
    title: "Real-Time Telemetry",
    description: "Monitor robot performance, sensor data, and operational metrics in real-time",
    icon: Activity,
    color: "blue"
  },
  {
    title: "Behavior Simulation",
    description: "Test robot behaviors and scenarios in a safe virtual environment",
    icon: Bot,
    color: "emerald"
  },
  {
    title: "Predictive Maintenance",
    description: "AI-powered failure prediction to prevent unexpected downtime",
    icon: Brain,
    color: "purple"
  },
  {
    title: "Safety Validation",
    description: "Verify safety protocols and emergency procedures without risk",
    icon: Shield,
    color: "red"
  },
  {
    title: "Performance Optimization",
    description: "Optimize robot parameters for maximum efficiency and throughput",
    icon: Zap,
    color: "yellow"
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive insights into robot fleet performance and trends",
    icon: BarChart3,
    color: "indigo"
  },
  {
    title: "Multi-Robot Coordination",
    description: "Simulate and optimize interactions between multiple robots",
    icon: Globe,
    color: "cyan"
  },
  {
    title: "Workflow Integration",
    description: "Seamlessly integrate with existing manufacturing and automation systems",
    icon: Workflow,
    color: "pink"
  }
];

const RoboticsFeatures = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Comprehensive Robot Twin Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to create, monitor, and optimize digital twins of your robotic systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-slate-800/50">
              <CardHeader>
                <div className={`p-3 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-lg inline-block mb-3`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 dark:text-slate-300">
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

export default RoboticsFeatures;
