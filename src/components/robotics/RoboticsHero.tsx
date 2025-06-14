
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Zap, Shield } from 'lucide-react';

const RoboticsHero = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-emerald-600 rounded-full">
            <Bot className="h-12 w-12 text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Robot Digital <span className="text-emerald-600">Twins</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
          Create, monitor, and optimize digital twins of your robotic systems. 
          Real-time simulation, predictive maintenance, and performance optimization 
          for industrial robots, autonomous vehicles, and robotic production lines.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
            Create Robot Twin
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600">
            View Demo
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg inline-block mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Real-Time Monitoring</h3>
            <p className="text-slate-600 dark:text-slate-300">Live telemetry and performance tracking</p>
          </div>
          <div className="text-center">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg inline-block mb-4">
              <Bot className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Behavior Simulation</h3>
            <p className="text-slate-600 dark:text-slate-300">Test scenarios without physical risk</p>
          </div>
          <div className="text-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg inline-block mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Predictive Maintenance</h3>
            <p className="text-slate-600 dark:text-slate-300">AI-powered failure prediction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticsHero;
