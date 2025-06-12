
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Image, AlertTriangle, Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AIDesignStudio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [imagePrompt, setImagePrompt] = useState('');
  const [designText, setDesignText] = useState('');
  const { toast } = useToast();

  const callHuggingFaceAI = async (type: string, data: any) => {
    setIsLoading(true);
    try {
      const { data: result, error } = await supabase.functions.invoke('huggingface-ai', {
        body: { type, ...data }
      });

      if (error) throw error;

      if (result.success) {
        setResults(result);
        toast({
          title: "AI Processing Complete",
          description: `Successfully generated ${result.type}`,
        });
      } else {
        throw new Error(result.error || 'AI processing failed');
      }
    } catch (error) {
      console.error('AI Error:', error);
      toast({
        title: "AI Processing Failed",
        description: error.message || "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateDesignVisualization = () => {
    if (!imagePrompt.trim()) {
      toast({
        title: "Prompt Required",
        description: "Please enter a design description",
        variant: "destructive",
      });
      return;
    }
    callHuggingFaceAI('image-generation', { prompt: imagePrompt });
  };

  const analyzeDesign = () => {
    if (!designText.trim()) {
      toast({
        title: "Design Description Required",
        description: "Please enter your design details",
        variant: "destructive",
      });
      return;
    }
    callHuggingFaceAI('design-analysis', { text: designText });
  };

  const predictFailures = () => {
    if (!designText.trim()) {
      toast({
        title: "Design Description Required",
        description: "Please enter your design details",
        variant: "destructive",
      });
      return;
    }
    callHuggingFaceAI('failure-prediction', { text: designText });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          AI Design Studio
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Leverage advanced AI to generate design visualizations, analyze engineering concepts, 
          and predict potential failure points before manufacturing.
        </p>
        <Badge className="mt-4 bg-emerald-100 text-emerald-800 border-emerald-200">
          <Sparkles className="h-4 w-4 mr-1" />
          Powered by Hugging Face AI
        </Badge>
      </div>

      <Tabs defaultValue="visualization" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="visualization" className="flex items-center gap-2">
            <Image className="h-4 w-4" />
            Design Visualization
          </TabsTrigger>
          <TabsTrigger value="analysis" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Design Analysis
          </TabsTrigger>
          <TabsTrigger value="prediction" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Failure Prediction
          </TabsTrigger>
        </TabsList>

        <TabsContent value="visualization">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5" />
                AI Design Visualization
              </CardTitle>
              <CardDescription>
                Generate concept images and design prototypes using natural language descriptions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Design Description</label>
                <Input
                  placeholder="e.g., Modern automotive brake disc with ventilated cooling channels, lightweight design"
                  value={imagePrompt}
                  onChange={(e) => setImagePrompt(e.target.value)}
                />
              </div>
              <Button 
                onClick={generateDesignVisualization}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Visualization'
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI Design Analysis
              </CardTitle>
              <CardDescription>
                Get engineering insights, optimization suggestions, and design recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Design Details</label>
                <Textarea
                  placeholder="Describe your design, materials, intended use, operating conditions, and any specific concerns..."
                  value={designText}
                  onChange={(e) => setDesignText(e.target.value)}
                  rows={4}
                />
              </div>
              <Button 
                onClick={analyzeDesign}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze Design'
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prediction">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                AI Failure Prediction
              </CardTitle>
              <CardDescription>
                Predict potential failure modes and get prevention strategies before manufacturing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Design Specifications</label>
                <Textarea
                  placeholder="Provide detailed design specifications, operating conditions, load requirements, environmental factors..."
                  value={designText}
                  onChange={(e) => setDesignText(e.target.value)}
                  rows={4}
                />
              </div>
              <Button 
                onClick={predictFailures}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Predicting...
                  </>
                ) : (
                  'Predict Failure Points'
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {results && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>AI Results</CardTitle>
          </CardHeader>
          <CardContent>
            {results.type === 'image' && results.image && (
              <div className="text-center">
                <img 
                  src={results.image} 
                  alt="Generated design visualization" 
                  className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            )}
            {results.type === 'analysis' && results.analysis && (
              <div className="prose max-w-none">
                <h4 className="text-lg font-semibold mb-3">Design Analysis:</h4>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {results.analysis}
                </p>
              </div>
            )}
            {results.type === 'prediction' && results.prediction && (
              <div className="prose max-w-none">
                <h4 className="text-lg font-semibold mb-3">Failure Prediction:</h4>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {results.prediction}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AIDesignStudio;
