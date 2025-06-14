
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, MessageSquare, Zap, Target, Shield, BarChart3, Cpu, Workflow } from 'lucide-react';

const capabilities = [
  {
    title: "Natural Language Control",
    description: "Control robots using natural language commands and queries",
    icon: MessageSquare,
    color: "blue",
    examples: ["Stop robot in Zone 3", "Optimize path efficiency", "Schedule maintenance"]
  },
  {
    title: "Predictive Analytics",
    description: "AI-powered predictions for maintenance, failures, and optimization",
    icon: Brain,
    color: "emerald",
    examples: ["Failure prediction", "Performance forecasting", "Resource optimization"]
  },
  {
    title: "Autonomous Decision Making",
    description: "Intelligent agents that make real-time operational decisions",
    icon: Zap,
    color: "purple",
    examples: ["Auto-routing", "Load balancing", "Priority management"]
  },
  {
    title: "Smart Monitoring",
    description: "Continuous intelligent monitoring with automated alerts",
    icon: Target,
    color: "red",
    examples: ["Anomaly detection", "Performance tracking", "Safety monitoring"]
  },
  {
    title: "Safety Intelligence",
    description: "AI-powered safety systems that prevent accidents",
    icon: Shield,
    color: "yellow",
    examples: ["Collision avoidance", "Safety compliance", "Risk assessment"]
  },
  {
    title: "Performance Optimization",
    description: "Continuous learning and optimization of robot operations",
    icon: BarChart3,
    color: "indigo",
    examples: ["Speed optimization", "Energy efficiency", "Quality improvement"]
  },
  {
    title: "Adaptive Learning",
    description: "Machine learning models that adapt to changing conditions",
    icon: Cpu,
    color: "cyan",
    examples: ["Pattern recognition", "Behavior adaptation", "Process learning"]
  },
  {
    title: "Workflow Intelligence",
    description: "Smart coordination between multiple robots and systems",
    icon: Workflow,
    color: "pink",
    examples: ["Multi-robot coordination", "Task scheduling", "Resource allocation"]
  }
];

const LLMCapabilities = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            LLM & Agentic AI Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Advanced AI features that provide seamless, intelligent automation for your robot twins
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-slate-800/50">
              <CardHeader>
                <div className={`p-3 bg-${capability.color}-100 dark:bg-${capability.color}-900/30 rounded-lg inline-block mb-3`}>
                  <capability.icon className={`h-6 w-6 text-${capability.color}-600`} />
                </div>
                <CardTitle className="text-lg">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 dark:text-slate-300 mb-4">
                  {capability.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Examples:
                  </div>
                  {capability.examples.map((example, idx) => (
                    <div key={idx} className="text-sm text-slate-600 dark:text-slate-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center dark:bg-slate-800/50">
            <CardContent className="p-6">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg inline-block mb-4">
                <Brain className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Intelligent Automation
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Reduce manual intervention with AI agents that make smart decisions automatically
              </p>
            </CardContent>
          </Card>

          <Card className="text-center dark:bg-slate-800/50">
            <CardContent className="p-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg inline-block mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Natural Interaction
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Control and monitor your robots using simple, natural language commands
              </p>
            </CardContent>
          </Card>

          <Card className="text-center dark:bg-slate-800/50">
            <CardContent className="p-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg inline-block mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Adaptive Learning
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                AI systems that continuously learn and improve robot performance over time
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LLMCapabilities;
