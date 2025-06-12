
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, CheckCircle, Clock, Target } from "lucide-react";

const quarters = [
  {
    period: "Q1 2024",
    status: "completed",
    title: "Foundation & Core Platform",
    description: "Platform architecture, basic CAD integration, user authentication",
    deliverables: [
      "Cloud infrastructure setup",
      "Basic CAD file import/export",
      "User management system",
      "Real-time collaboration MVP"
    ],
    roiImpact: "Platform foundation established"
  },
  {
    period: "Q2 2024",
    status: "in-progress",
    title: "AI-Powered Design Validation",
    description: "Machine learning models for failure prediction and design optimization",
    deliverables: [
      "AI failure prediction engine",
      "Automated compliance checking",
      "Design recommendation system",
      "Performance analytics dashboard"
    ],
    roiImpact: "60% reduction in design iteration time"
  },
  {
    period: "Q3 2024",
    status: "planned",
    title: "Advanced Collaboration Features",
    description: "Multi-user real-time editing, workflow automation, and team management",
    deliverables: [
      "Real-time multi-user editing",
      "Version control and branching",
      "Automated testing workflows",
      "Team permission management"
    ],
    roiImpact: "Enable distributed teams, 40% productivity gain"
  },
  {
    period: "Q4 2024",
    status: "planned",
    title: "Enterprise Integration Suite",
    description: "Deep integrations with major CAE tools and enterprise systems",
    deliverables: [
      "ANSYS/SolidWorks deep integration",
      "PLM system connectors",
      "Enterprise SSO and security",
      "API marketplace launch"
    ],
    roiImpact: "Seamless enterprise adoption, 80% setup time reduction"
  },
  {
    period: "Q1 2025",
    status: "future",
    title: "Advanced AI & Optimization",
    description: "Generative design capabilities and autonomous optimization",
    deliverables: [
      "Generative design algorithms",
      "Autonomous optimization loops",
      "Predictive maintenance models",
      "Advanced simulation engines"
    ],
    roiImpact: "Autonomous design improvements, 90% faster optimization"
  },
  {
    period: "Q2 2025",
    status: "future",
    title: "Global Scale & Intelligence",
    description: "Global deployment capabilities and advanced AI insights",
    deliverables: [
      "Multi-region deployment",
      "Advanced AI insights engine",
      "Industry-specific templates",
      "Regulatory compliance automation"
    ],
    roiImpact: "Global enterprise ready, industry-leading intelligence"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="h-5 w-5 text-emerald-600" />;
    case 'in-progress':
      return <Clock className="h-5 w-5 text-blue-600" />;
    default:
      return <Target className="h-5 w-5 text-slate-400" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'planned':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    default:
      return 'bg-slate-100 text-slate-600 border-slate-200';
  }
};

const RoadmapTimeline = () => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Development Timeline</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Strategic milestones aligned with ROI delivery and customer impact
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

        <div className="space-y-8">
          {quarters.map((quarter, index) => (
            <div key={index} className="relative flex items-start space-x-6">
              {/* Timeline marker */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-slate-200 rounded-full">
                {getStatusIcon(quarter.status)}
              </div>

              {/* Content */}
              <Card className="flex-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CalendarDays className="h-5 w-5 text-slate-600" />
                      <CardTitle className="text-xl">{quarter.period}</CardTitle>
                    </div>
                    <Badge className={getStatusColor(quarter.status)}>
                      {quarter.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-slate-900">{quarter.title}</CardTitle>
                  <CardDescription className="text-lg">{quarter.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Deliverables</h4>
                      <ul className="space-y-2">
                        {quarter.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">ROI Impact</h4>
                      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                        <p className="text-emerald-800 font-medium">{quarter.roiImpact}</p>
                      </div>
                      {quarter.status === 'in-progress' && (
                        <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                          View Progress
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;
