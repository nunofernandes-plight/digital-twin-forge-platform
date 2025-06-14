
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bot, Activity, AlertTriangle, CheckCircle, Settings } from 'lucide-react';

const robotTwins = [
  {
    id: 1,
    name: "Industrial Arm Unit 01",
    type: "6-DOF Robotic Arm",
    status: "operational",
    uptime: "99.2%",
    lastMaintenance: "2 days ago",
    nextMaintenance: "In 28 days",
    alerts: 0,
    location: "Production Line A"
  },
  {
    id: 2,
    name: "AGV Fleet Manager",
    type: "Autonomous Guided Vehicle",
    status: "maintenance",
    uptime: "97.8%",
    lastMaintenance: "Today",
    nextMaintenance: "In 45 days",
    alerts: 1,
    location: "Warehouse Zone 3"
  },
  {
    id: 3,
    name: "Pick & Place System",
    type: "Delta Robot",
    status: "operational",
    uptime: "99.7%",
    lastMaintenance: "5 days ago",
    nextMaintenance: "In 22 days",
    alerts: 0,
    location: "Assembly Line B"
  },
  {
    id: 4,
    name: "Quality Inspection Bot",
    type: "Vision-Guided Robot",
    status: "warning",
    uptime: "95.1%",
    lastMaintenance: "7 days ago",
    nextMaintenance: "In 3 days",
    alerts: 2,
    location: "QC Station 1"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="h-5 w-5 text-emerald-600" />;
    case 'maintenance':
      return <Settings className="h-5 w-5 text-blue-600" />;
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
    default:
      return <Activity className="h-5 w-5 text-slate-600" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'operational':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400';
    case 'maintenance':
      return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400';
    case 'warning':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400';
    default:
      return 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400';
  }
};

const RobotTwinsList = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Active Robot Twins
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Monitor and manage your robotic systems in real-time
            </p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Bot className="mr-2 h-4 w-4" />
            Add New Robot Twin
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {robotTwins.map((robot) => (
            <Card key={robot.id} className="hover:shadow-lg transition-shadow dark:bg-slate-800/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <Bot className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{robot.name}</CardTitle>
                      <CardDescription>{robot.type}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(robot.status)}
                    <Badge className={getStatusColor(robot.status)}>
                      {robot.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Uptime</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{robot.uptime}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Location</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{robot.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Last Maintenance</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{robot.lastMaintenance}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Next Maintenance</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{robot.nextMaintenance}</div>
                  </div>
                </div>
                
                {robot.alerts > 0 && (
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg mb-4">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium text-yellow-800 dark:text-yellow-400">
                        {robot.alerts} Active Alert{robot.alerts > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                    Open Twin
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RobotTwinsList;
