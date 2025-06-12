
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Users2, Zap, Shield, BarChart3, Globe, Workflow, Target } from "lucide-react";

const featureCategories = [
  {
    title: "Recall Prevention Features",
    description: "AI-powered validation to prevent costly design recalls",
    color: "red",
    features: [
      {
        name: "AI Failure Prediction",
        description: "Machine learning models predict potential failure points",
        priority: "High",
        progress: 75,
        icon: Brain,
        status: "In Development"
      },
      {
        name: "Automated Compliance Checking",
        description: "Real-time validation against industry standards",
        priority: "High",
        progress: 60,
        icon: Shield,
        status: "In Development"
      },
      {
        name: "Design Risk Assessment",
        description: "Comprehensive risk analysis for design decisions",
        priority: "Medium",
        progress: 30,
        icon: Target,
        status: "Planned"
      }
    ]
  },
  {
    title: "Acceleration Features",
    description: "Real-time collaboration to accelerate product launches",
    color: "blue",
    features: [
      {
        name: "Multi-User Real-Time Editing",
        description: "Simultaneous collaboration across global teams",
        priority: "High",
        progress: 85,
        icon: Users2,
        status: "Beta"
      },
      {
        name: "Automated Testing Workflows",
        description: "Parallel testing and validation processes",
        priority: "High",
        progress: 45,
        icon: Workflow,
        status: "In Development"
      },
      {
        name: "Performance Analytics",
        description: "Real-time insights into design performance",
        priority: "Medium",
        progress: 70,
        icon: BarChart3,
        status: "In Development"
      }
    ]
  },
  {
    title: "Efficiency Features",
    description: "AI augmentation to reduce required team size",
    color: "emerald",
    features: [
      {
        name: "AI Design Recommendations",
        description: "Intelligent suggestions for design improvements",
        priority: "High",
        progress: 55,
        icon: Brain,
        status: "In Development"
      },
      {
        name: "Automated Optimization",
        description: "AI-driven parameter optimization loops",
        priority: "Medium",
        progress: 25,
        icon: Zap,
        status: "Planned"
      },
      {
        name: "Simplified Integrations",
        description: "One-click connections to CAD/CAE systems",
        priority: "High",
        progress: 80,
        icon: Globe,
        status: "Beta"
      }
    ]
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    default:
      return 'bg-slate-100 text-slate-600 border-slate-200';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Beta':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case 'In Development':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    default:
      return 'bg-slate-100 text-slate-600 border-slate-200';
  }
};

const FeatureCards = () => {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Feature Development Status</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Track progress on key features aligned with our three ROI drivers
        </p>
      </div>

      <div className="space-y-12">
        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-4 h-4 bg-${category.color}-500 rounded`}></div>
              <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
            </div>
            <p className="text-slate-600 mb-6">{category.description}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.features.map((feature, featureIndex) => (
                <Card key={featureIndex} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`p-2 bg-${category.color}-100 rounded-lg`}>
                        <feature.icon className={`h-6 w-6 text-${category.color}-600`} />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Badge className={getPriorityColor(feature.priority)}>
                          {feature.priority}
                        </Badge>
                        <Badge className={getStatusColor(feature.status)}>
                          {feature.status}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{feature.name}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Progress</span>
                        <span className="font-medium">{feature.progress}%</span>
                      </div>
                      <Progress value={feature.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
