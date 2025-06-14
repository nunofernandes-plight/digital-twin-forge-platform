
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pricingTiers = [
  {
    name: "Free Demo",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring our platform",
    features: [
      "Basic digital twin creation",
      "5 design iterations",
      "Community support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "per month",
    description: "Ideal for small to medium teams",
    features: [
      "Unlimited digital twins",
      "Advanced AI failure prediction",
      "Real-time collaboration",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$299",
    period: "per month",
    description: "For large manufacturing organizations",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Custom AI model training",
      "Dedicated account manager"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-slate-800 border-y border-slate-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Select the perfect plan for your team size and manufacturing needs. 
            All plans include our core AI-powered digital twin technology.
          </p>
          <Link to="/pricing">
            <Button variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white">
              View Full Pricing Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`bg-slate-900/50 border-slate-700 relative ${
                tier.popular ? 'border-emerald-500 scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-emerald-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-white">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400 ml-2">/{tier.period}</span>
                </div>
                <p className="text-slate-300 mt-2">{tier.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <Check className="h-4 w-4 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-emerald-600 hover:bg-emerald-700' 
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
