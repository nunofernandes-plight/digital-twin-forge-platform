
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, MessageSquare, Zap, Play, Pause, Settings } from 'lucide-react';

const aiAgents = [
  {
    id: 1,
    name: "Predictive Maintenance Agent",
    description: "Monitors robot health and predicts maintenance needs",
    status: "active",
    confidence: 94,
    lastAction: "Scheduled maintenance for Unit 03",
    actionTime: "2 minutes ago"
  },
  {
    id: 2,
    name: "Quality Control Agent",
    description: "Analyzes production quality and optimizes parameters",
    status: "active",
    confidence: 87,
    lastAction: "Adjusted precision settings on Assembly Line B",
    actionTime: "15 minutes ago"
  },
  {
    id: 3,
    name: "Path Optimization Agent",
    description: "Optimizes robot movement paths for efficiency",
    status: "learning",
    confidence: 76,
    lastAction: "Learning new warehouse layout patterns",
    actionTime: "1 hour ago"
  },
  {
    id: 4,
    name: "Safety Monitoring Agent",
    description: "Ensures safe operation and prevents incidents",
    status: "active",
    confidence: 99,
    lastAction: "Verified safety protocols for Zone 3",
    actionTime: "5 minutes ago"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400';
    case 'learning':
      return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400';
    case 'paused':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400';
    default:
      return 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400';
  }
};

const AIAgentPanel = () => {
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null);

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              AI Agents & LLM Integration
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Autonomous AI agents providing intelligent automation for your robot twins
            </p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Brain className="mr-2 h-4 w-4" />
            Deploy New Agent
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {aiAgents.map((agent) => (
            <Card 
              key={agent.id} 
              className={`hover:shadow-lg transition-shadow cursor-pointer dark:bg-slate-800/50 ${
                selectedAgent === agent.id ? 'ring-2 ring-emerald-500' : ''
              }`}
              onClick={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <Brain className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{agent.name}</CardTitle>
                      <CardDescription>{agent.description}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getStatusColor(agent.status)}>
                    {agent.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Confidence</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-emerald-600 h-2 rounded-full" 
                          style={{ width: `${agent.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">
                        {agent.confidence}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                      Latest Action
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 mb-1">
                      {agent.lastAction}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {agent.actionTime}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <MessageSquare className="mr-2 h-3 w-3" />
                      Chat
                    </Button>
                    <Button size="sm" variant="outline">
                      <Settings className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      {agent.status === 'active' ? (
                        <Pause className="h-3 w-3" />
                      ) : (
                        <Play className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* LLM Chat Interface */}
        <Card className="mt-8 dark:bg-slate-800/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-emerald-600" />
              <span>Robot Twin LLM Assistant</span>
            </CardTitle>
            <CardDescription>
              Natural language interface for robot control and monitoring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-64 bg-slate-50 dark:bg-slate-900 rounded-lg p-4 overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                      <Brain className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-3 flex-1">
                      <p className="text-sm text-slate-900 dark:text-white">
                        Hello! I'm your Robot Twin AI assistant. I can help you monitor robot performance, 
                        predict maintenance needs, optimize operations, and control your robot fleet. 
                        How can I assist you today?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Ask about robot status, request maintenance, optimize paths..."
                  className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIAgentPanel;
