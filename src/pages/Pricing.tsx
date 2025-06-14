
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";
import Header from "@/components/Header";

const pricingPlans = [
  {
    name: "Free Demo",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring our platform capabilities",
    icon: Star,
    features: [
      "Basic digital twin creation",
      "5 design iterations",
      "Community support",
      "Basic AI insights",
      "1 project limit"
    ],
    buttonText: "Start Free Demo",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "per month",
    description: "Ideal for small to medium engineering teams",
    icon: Zap,
    features: [
      "Unlimited digital twins",
      "Advanced AI failure prediction",
      "Real-time collaboration",
      "CAD integration (SolidWorks, CATIA)",
      "Priority support",
      "Up to 10 team members",
      "Advanced analytics"
    ],
    buttonText: "Start Professional",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "$299",
    period: "per month",
    description: "For large manufacturing organizations",
    icon: Crown,
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Custom AI model training",
      "Enterprise security & compliance",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "On-premise deployment option"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "default" as const,
    popular: false
  }
];

const Pricing = () => {
  const handlePlanSelect = (planName: string) => {
    if (planName === "Free Demo") {
      // Handle free demo signup
      console.log("Starting free demo");
    } else if (planName === "Enterprise") {
      // Handle enterprise contact
      console.log("Contacting sales for enterprise");
    } else {
      // Handle paid plan subscription
      console.log(`Starting ${planName} subscription`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Select the perfect plan for your team size and manufacturing needs. 
            All plans include our core AI-powered digital twin technology.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`bg-slate-800/50 border-slate-700 relative ${
                  plan.popular ? 'border-emerald-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-lg ${
                      plan.popular ? 'bg-emerald-900/50' : 'bg-slate-700/50'
                    }`}>
                      <plan.icon className={`h-8 w-8 ${
                        plan.popular ? 'text-emerald-400' : 'text-slate-400'
                      }`} />
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-300 mt-2">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-2">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <Check className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-emerald-600 hover:bg-emerald-700' 
                        : plan.buttonVariant === 'outline' 
                          ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
                          : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                    variant={plan.buttonVariant}
                    onClick={() => handlePlanSelect(plan.name)}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Can I upgrade or downgrade my plan anytime?
              </h3>
              <p className="text-slate-300">
                Yes, you can change your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing differences.
              </p>
            </div>
            
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                What CAD tools do you integrate with?
              </h3>
              <p className="text-slate-300">
                We support major CAD platforms including SolidWorks, CATIA, ANSYS, 
                and more. Enterprise plans include custom integration support.
              </p>
            </div>
            
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Is there a free trial for paid plans?
              </h3>
              <p className="text-slate-300">
                Yes, all paid plans come with a 14-day free trial. You can also start 
                with our Free Demo to explore the platform capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
