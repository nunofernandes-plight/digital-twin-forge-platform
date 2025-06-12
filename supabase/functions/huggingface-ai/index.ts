
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { HfInference } from 'https://esm.sh/@huggingface/inference@2.3.2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { type, prompt, text } = await req.json()
    console.log('Hugging Face request:', { type, prompt: prompt?.substring(0, 100), text: text?.substring(0, 100) })

    const hf = new HfInference(Deno.env.get('HUGGING_FACE_ACCESS_TOKEN'))

    if (type === 'image-generation') {
      console.log('Generating image with prompt:', prompt)
      
      const image = await hf.textToImage({
        inputs: prompt,
        model: 'black-forest-labs/FLUX.1-schnell',
      })

      // Convert the blob to a base64 string
      const arrayBuffer = await image.arrayBuffer()
      const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))

      return new Response(
        JSON.stringify({ 
          success: true,
          image: `data:image/png;base64,${base64}`,
          type: 'image'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (type === 'design-analysis') {
      console.log('Analyzing design text:', text?.substring(0, 100))
      
      const analysis = await hf.textGeneration({
        inputs: `As an AI expert in mechanical engineering and design analysis, analyze the following design description and provide insights on potential failure points, optimization opportunities, and risk mitigation strategies:\n\n${text}`,
        model: 'microsoft/DialoGPT-medium',
        parameters: {
          max_new_tokens: 500,
          temperature: 0.7
        }
      })

      return new Response(
        JSON.stringify({ 
          success: true,
          analysis: analysis.generated_text,
          type: 'analysis'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (type === 'failure-prediction') {
      console.log('Predicting potential failures for:', text?.substring(0, 100))
      
      const prediction = await hf.textGeneration({
        inputs: `As a predictive maintenance and failure analysis expert, evaluate this engineering design and predict potential failure modes, their likelihood, and prevention strategies:\n\n${text}`,
        model: 'microsoft/DialoGPT-medium',
        parameters: {
          max_new_tokens: 400,
          temperature: 0.6
        }
      })

      return new Response(
        JSON.stringify({ 
          success: true,
          prediction: prediction.generated_text,
          type: 'prediction'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ error: 'Invalid request type. Use: image-generation, design-analysis, or failure-prediction' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )

  } catch (error) {
    console.error('Hugging Face AI Error:', error)
    return new Response(
      JSON.stringify({ 
        success: false,
        error: 'AI processing failed', 
        details: error.message 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
