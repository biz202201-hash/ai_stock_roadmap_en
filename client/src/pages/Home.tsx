import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from 'react';
import { CheckCircle2, TrendingUp, Zap, Users, BarChart3, Download, ArrowRight } from "lucide-react";
import { Streamdown } from 'streamdown';
import { useLocation } from 'wouter';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function Home() {
  const [, navigate] = useLocation();

  // SEO: Meta tags
  React.useEffect(() => {
    document.title = 'AI Stock Media Roadmap - Complete Guide to Earning $3,000/Month with AI';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete roadmap to earn $3,000/month with AI-generated stock media. Learn how to use Midjourney, DALL-E 3, Runway Gen-3 and other AI tools for beginners.');
    }
  }, []);
  const phaseData = [
    {
      phase: 1,
      title: "Initial Learning & Foundation Building",
      duration: "0-3 months",
      goal: "Earn $100-$300/month",
      color: "bg-blue-600",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663726257988/d6Ezonbkvx9xTzRTkKKDb3/phase_illustration_1-W3io9PELiRdyMxhQUHyFiW.webp",
      actions: [
        "Master AI tools (Midjourney, Runway Gen-3 Alpha)",
        "Register on Adobe Stock, Shutterstock",
        "Start with image assets (50-100 submissions/week)",
        "Continuous market trend research"
      ]
    },
    {
      phase: 2,
      title: "Video Asset Mass Production",
      duration: "3-6 months",
      goal: "Earn $500-$1,000/month",
      color: "bg-orange-500",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663726257988/d6Ezonbkvx9xTzRTkKKDb3/phase_illustration_2-78hgdnLeXpQWjZCNqozRVn.webp",
      actions: [
        "Scale video generation AI (10-20 submissions/week)",
        "Produce all assets in 4K resolution",
        "Optimize English metadata",
        "Diversify portfolio"
      ]
    },
    {
      phase: 3,
      title: "Revenue Maximization & Automation",
      duration: "6+ months",
      goal: "Earn $3,000+/month stable income",
      color: "bg-green-600",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663726257988/d6Ezonbkvx9xTzRTkKKDb3/phase_illustration_3-iEGHpfekcASqSh9R7LB64g.webp",
      actions: [
        "Expand across multiple platforms",
        "Deep dive into niche genres",
        "Streamline production process",
        "Continuous data analysis and optimization"
      ]
    }
  ];

  const toolsData = [
    {
      category: "Image Generation",
      tools: [
        { name: "Midjourney", desc: "High-quality photorealistic images", feature: "v6+ recommended" },
        { name: "DALL-E 3", desc: "Diverse style image generation", feature: "OpenAI plan required" }
      ]
    },
    {
      category: "Video Generation",
      tools: [
        { name: "Runway Gen-3 Alpha", desc: "High-quality video generation", feature: "Latest technology" },
        { name: "Luma Dream Machine", desc: "Text/image to video conversion", feature: "Stability focused" },
        { name: "Kling AI", desc: "Multilingual video generation", feature: "Cost-effective" }
      ]
    },
    {
      category: "Enhancement & Correction",
      tools: [
        { name: "Topaz Video AI", desc: "4K upscaling, noise reduction", feature: "Essential tool" },
        { name: "Magnific AI", desc: "High-precision upscaling", feature: "Detail-focused" },
        { name: "Adobe Premiere Pro", desc: "Color grading, editing", feature: "Industry standard" }
      ]
    }
  ];

  const revenueTable = [
    { type: "Images Only", unitPrice: "$0.30-$1.00", monthlyDownloads: "3,000-10,000", requiredAssets: "Tens of thousands" },
    { type: "Video Focus", unitPrice: "$5-$50", monthlyDownloads: "100-300", requiredAssets: "1,000+" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Stock Media Roadmap</h1>
          </button>
          <nav className="hidden md:flex gap-8">
            <a href="#overview" className="text-gray-600 hover:text-blue-600 transition">Overview</a>
            <a href="#phases" className="text-gray-600 hover:text-blue-600 transition">Phases</a>
            <a href="#tools" className="text-gray-600 hover:text-blue-600 transition">Tools</a>
            <button onClick={() => navigate('/tool-comparison')} className="text-gray-600 hover:text-blue-600 transition">Tool Comparison</button>
            <button onClick={() => navigate('/blog')} className="text-gray-600 hover:text-blue-600 transition">Blog</button>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Adsterra Advertisement */}
      <div className="w-full flex justify-center py-4 bg-gray-50 border-b border-gray-200">
        <script>
          {`atOptions = {
            'key' : 'd628c9a013109957f4a72ff87145cd7b',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };`}
        </script>
        <script src="https://www.highperformanceformat.com/d628c9a013109957f4a72ff87145cd7b/invoke.js"></script>
      </div>

      {/* CustomGPT.ai Affiliate Banner */}
      <div className="w-full flex justify-center py-4 bg-white border-b border-gray-200">
        <a href="https://customgpt.ai/?fpr=aistock" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://d2gdx5nv84sdx2.cloudfront.net/uploads/tw0vc771/marketing_asset/banner/22943/display-images-leaderboard-728-x-90.png" 
            alt="CustomGPT.ai - Create Custom AI Chatbots" 
            width="728" 
            height="90"
            className="hover:opacity-80 transition-opacity"
          />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663726257988/d6Ezonbkvx9xTzRTkKKDb3/hero_background-YtQpKnHLoiLTEZoQ4Stpv4.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">AI × Stock Media Sales</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Earn $3,000/Month with AI
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              No sales required, earn while you sleep. A concrete, realistic roadmap that beginners can actually achieve with AI-generated stock media.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate('/roadmap')}>
                View Roadmap
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300" onClick={() => navigate('/roadmap')}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The Reality & Strategy of Reaching $3,000/Month</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  High-Value Niches
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Business & Technology</h4>
                  <p className="text-sm text-gray-600">AI, data analytics, cybersecurity, modern office scenes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Healthcare</h4>
                  <p className="text-sm text-gray-600">Telemedicine, advanced medical equipment, biotechnology</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Lifestyle</h4>
                  <p className="text-sm text-gray-600">Vertical videos for social ads (9:16), diverse scenes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Niche Content</h4>
                  <p className="text-sm text-gray-600">Construction, traditional crafts, unique cultural assets</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-orange-500" />
                  Revenue Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueTable.map((row, idx) => (
                    <div key={idx} className="pb-4 border-b border-gray-200 last:border-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{row.type}</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-gray-600">Unit Price</p>
                          <p className="font-semibold text-gray-900">{row.unitPrice}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Required Downloads</p>
                          <p className="font-semibold text-gray-900">{row.monthlyDownloads}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>Recommended:</strong> Focus on video with complementary images for fastest results
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section id="phases" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">3-Phase Roadmap</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {phaseData.map((phase) => (
              <Card key={phase.phase} className="border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-2 ${phase.color}`}></div>
                <div className="relative">
                  <img 
                    src={phase.image}
                    alt={`Phase ${phase.phase}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={`${phase.color} text-white`}>Phase {phase.phase}</Badge>
                    <span className="text-xs text-gray-500">{phase.duration}</span>
                  </div>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold mt-2">{phase.goal}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.actions.map((action, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recommended AI Toolkit</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {toolsData.map((category, idx) => (
              <Card key={idx} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-500" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.tools.map((tool, toolIdx) => (
                    <div key={toolIdx} className="pb-4 border-b border-gray-200 last:border-0">
                      <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                      <p className="text-sm text-gray-600 mb-1">{tool.desc}</p>
                      <Badge variant="outline" className="text-xs">{tool.feature}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          
          <Tabs defaultValue="q1" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="q1">Getting Started</TabsTrigger>
              <TabsTrigger value="q2">Revenue</TabsTrigger>
            </TabsList>
            
            <TabsContent value="q1" className="space-y-6 mt-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Do I need design experience?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">No. AI tools handle the design work. You focus on prompts, curation, and optimization. Most successful creators started with zero design experience.</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">How much initial investment is needed?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Approximately $50-200/month for AI tool subscriptions (Midjourney, Runway). Stock platform registration is free. You can start with just Midjourney ($20/month).</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">How long until first earnings?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">First approvals typically take 1-2 weeks. First earnings appear after 30-60 days of consistent uploads. Most see $10-50 in month 2-3.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="q2" className="space-y-6 mt-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Is $3,000/month realistic?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Yes, but requires 6+ months of consistent effort. Most reach $500-1,000 by month 6, then $3,000+ by month 12-18 with optimization.</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Which platforms pay the most?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Adobe Stock and Shutterstock offer the highest per-download rates ($0.30-5.00). Alamy is excellent for niche content. Diversify across 3-5 platforms.</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">What about copyright issues?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">AI-generated content is generally acceptable on stock platforms. Always read their AI content policies. Disclose AI generation in metadata. Avoid copyrighted styles.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Stay Updated</h2>
          <p className="text-gray-600 text-center mb-8">Get weekly tips on AI tools, market trends, and monetization strategies.</p>
          <NewsletterSignup />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/roadmap" className="hover:text-white transition">Roadmap</a></li>
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
