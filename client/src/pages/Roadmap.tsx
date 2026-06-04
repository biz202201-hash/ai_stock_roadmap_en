import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from 'react';
import { CheckCircle2, Clock, Target, TrendingUp, AlertCircle, ArrowRight } from "lucide-react";
import { useLocation } from 'wouter';

export default function Roadmap() {
  const [, navigate] = useLocation();

  React.useEffect(() => {
    document.title = 'Complete AI Stock Media Roadmap | Earn $3,000/Month';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Detailed roadmap to earn $3,000/month with AI-generated stock media. Practical steps from beginner to intermediate level.');
    }
  }, []);

  const phaseDetails = [
    {
      phase: 1,
      title: "Initial Learning & Foundation",
      duration: "0-3 months",
      goal: "Earn $100-$300/month",
      description: "Master AI tools, understand stock platform basics, pass first reviews",
      actions: [
        {
          title: "Master AI Tools",
          details: "Thoroughly learn Midjourney, Runway Gen-3 Alpha, Topaz Video AI. Study tutorials and community best practices to generate high-quality assets."
        },
        {
          title: "Platform Registration",
          details: "Register as a creator on Adobe Stock, Shutterstock, and other major stock platforms."
        },
        {
          title: "Start with Images",
          details: "Begin with AI-generated images to understand review criteria and metadata process. Target 50-100 submissions per week."
        },
        {
          title: "Market Research",
          details: "Analyze trending assets and narrow down your niche based on market demand."
        }
      ]
    },
    {
      phase: 2,
      title: "Video Asset Production",
      duration: "3-6 months",
      goal: "Earn $500-$1,000/month",
      description: "Scale video production, improve portfolio quality and diversity",
      actions: [
        {
          title: "Scale Video Generation",
          details: "Use Runway Gen-3 Alpha and Luma Dream Machine to produce high-value video assets. Target 10-20 video submissions per week."
        },
        {
          title: "4K Standard",
          details: "Produce all videos in 4K resolution and upscale images to maximum quality."
        },
        {
          title: "Metadata Optimization",
          details: "Create detailed English keywords and organize assets into series for better discoverability."
        },
        {
          title: "Portfolio Diversification",
          details: "Balance images and videos across multiple themes and styles to broaden appeal."
        }
      ]
    },
    {
      phase: 3,
      title: "Revenue Maximization",
      duration: "6+ months",
      goal: "Earn $3,000+/month stable income",
      description: "Multi-platform expansion, process optimization, data-driven improvements",
      actions: [
        {
          title: "Multi-Platform Expansion",
          details: "After building portfolio on Adobe Stock, expand to Shutterstock, Getty Images, and other platforms to maximize revenue opportunities."
        },
        {
          title: "Niche Deep Dive",
          details: "Specialize in underserved niches and develop expertise in high-demand categories."
        },
        {
          title: "Process Optimization",
          details: "Create prompt templates, batch processing workflows, and integrate tools to reduce production time."
        },
        {
          title: "Data Analysis",
          details: "Analyze sales reports and download data to identify bestsellers and optimize future production."
        }
      ]
    }
  ];

  const qualityChecklist = [
    "High Resolution: 4K (3840x2160) standard, minimum Full HD (1920x1080)",
    "Artifact Removal: Clean up AI generation artifacts (faces, hands, text, background distortions)",
    "Video Stability: Avoid frame jitter, sudden changes, and unnatural morphing",
    "Noise Reduction: Aim for clean, clear footage without grain or noise",
    "Copyright Clearance: Use commercially licensed models, avoid copying existing works",
    "Accurate Metadata: Use relevant keywords that match content accurately"
  ];

  const successTips = [
    {
      title: "Consistency & Patience",
      description: "Stock revenue builds over months and years. Continuously upload content, monitor market response, and iterate. Success requires sustained effort.",
      icon: "⏱️"
    },
    {
      title: "Quality Obsession",
      description: "Even AI-generated assets require human quality control. Remove artifacts, ensure professional finish, and maintain high standards throughout.",
      icon: "✨"
    },
    {
      title: "Legal & Ethics",
      description: "Use commercially licensed models, avoid copying existing works, respect copyright and privacy laws. Stay informed about AI content regulations.",
      icon: "⚖️"
    },
    {
      title: "Regulatory Awareness",
      description: "AI regulations are evolving. Stay updated on legal changes and adjust practices accordingly to remain compliant.",
      icon: "📋"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Stock Media Roadmap</h1>
            </a>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-blue-600 font-semibold">Roadmap</a>
            <button onClick={() => navigate('/tool-comparison')} className="text-gray-600 hover:text-blue-600 transition">Tool Comparison</button>
            <button onClick={() => navigate('/blog')} className="text-gray-600 hover:text-blue-600 transition">Blog</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Complete Roadmap</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            From beginner to professional. Detailed steps to achieve $3,000/month income.
          </p>
        </div>
      </section>

      {/* Phase Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="phase1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="phase1">Phase 1</TabsTrigger>
              <TabsTrigger value="phase2">Phase 2</TabsTrigger>
              <TabsTrigger value="phase3">Phase 3</TabsTrigger>
            </TabsList>

            {phaseDetails.map((phase) => (
              <TabsContent key={phase.phase} value={`phase${phase.phase}`} className="space-y-8">
                {/* Phase Header */}
                <Card className="border-gray-200 bg-gradient-to-r from-blue-50 to-orange-50">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className="bg-blue-600 text-white mb-2">Phase {phase.phase}</Badge>
                        <CardTitle className="text-3xl">{phase.title}</CardTitle>
                        <CardDescription className="text-base mt-2">{phase.description}</CardDescription>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-600">Duration</p>
                          <p className="font-semibold text-gray-900">{phase.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-orange-500" />
                        <div>
                          <p className="text-sm text-gray-600">Goal</p>
                          <p className="font-semibold text-gray-900">{phase.goal}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Actions */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Action Items</h3>
                  {phase.actions.map((action, idx) => (
                    <Card key={idx} className="border-gray-200">
                      <CardHeader>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <CardTitle className="text-lg">{action.title}</CardTitle>
                            <CardDescription className="mt-2 text-base">{action.details}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Quality Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quality Checklist for Platform Approval</h2>
          
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                Quality Standards
              </CardTitle>
              <CardDescription>
                Major platforms like Adobe Stock have strict quality standards for AI-generated content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {qualityChecklist.map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mindset for Success</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {successTips.map((tip, idx) => (
              <Card key={idx} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-3xl">{tip.icon}</span>
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our tool comparison guide and blog for detailed strategies and tutorials.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate('/tool-comparison')}>
              Compare Tools
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/blog')}>
              Read Blog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/tool-comparison" className="hover:text-white transition">Tool Comparison</a></li>
                <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Tools</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://midjourney.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Midjourney</a></li>
                <li><a href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">DALL-E 3</a></li>
                <li><a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Runway</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Platforms</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://stock.adobe.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Adobe Stock</a></li>
                <li><a href="https://www.shutterstock.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Shutterstock</a></li>
                <li><a href="https://www.alamy.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Alamy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 AI Stock Media Roadmap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
