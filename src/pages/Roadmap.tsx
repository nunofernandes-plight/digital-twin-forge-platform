
import React from 'react';
import Header from "@/components/Header";
import RoadmapTimeline from "@/components/roadmap/RoadmapTimeline";
import ROIMetrics from "@/components/roadmap/ROIMetrics";
import FeatureCards from "@/components/roadmap/FeatureCards";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Users } from "lucide-react";

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">
            🎯 Strategic Product Roadmap
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Digital Twin Platform
            <span className="block text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Product Roadmap 2024-2025
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transforming engineering workflows through real-time collaboration, AI-powered insights, 
            and simplified integrations to deliver measurable ROI for manufacturing companies.
          </p>
        </div>

        {/* ROI Value Drivers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg text-red-800">Prevent Design Recalls</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-900 mb-2">$100M+</div>
              <CardDescription className="text-red-700">
                Early detection through AI-powered simulations prevents costly design flaws
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-blue-800">Accelerate Launch</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900 mb-2">6+ Months</div>
              <CardDescription className="text-blue-700">
                Real-time collaboration eliminates sequential design handoffs
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg text-emerald-800">Reduce Team Size</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-900 mb-2">30%</div>
              <CardDescription className="text-emerald-700">
                AI recommendations augment human expertise, automate repetitive tasks
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* ROI Metrics Dashboard */}
        <ROIMetrics />

        {/* Timeline */}
        <RoadmapTimeline />

        {/* Feature Cards */}
        <FeatureCards />
      </main>
    </div>
  );
};

export default Roadmap;
