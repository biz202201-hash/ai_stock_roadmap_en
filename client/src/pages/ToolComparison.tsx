import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from 'react';
import { ArrowRight, Check, X } from "lucide-react";
import { useLocation } from 'wouter';

export default function ToolComparison() {
  const [, navigate] = useLocation();

  React.useEffect(() => {
    document.title = 'AI Tool Comparison | Midjourney, DALL-E 3, Runway & More';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Detailed comparison of AI tools: Midjourney, DALL-E 3, Runway Gen-3, Luma Dream Machine, Kling AI, Topaz Video AI. Find the best tool for your needs.');
    }
  }, []);

  const toolCategories = [
    {
      category: "Image Generation AI",
      description: "Tools for generating high-quality images",
      tools: [
        {
          name: "Midjourney",
          price: "$10-$120/month",
          quality: "★★★★★",
          speed: "★★★★☆",
          ease: "★★★☆☆",
          features: ["Photorealistic images", "Style control", "High quality"],
          pros: ["Excellent quality", "Large user community"],
          cons: ["Discord required", "Steep learning curve"],
          bestFor: "Professional commercial assets"
        },
        {
          name: "DALL-E 3",
          price: "$15-$120/month",
          quality: "★★★★☆",
          speed: "★★★★★",
          ease: "★★★★☆",
          features: ["Text-to-image", "Diverse styles", "Fast generation"],
          pros: ["User-friendly", "Fast", "Varied styles"],
          cons: ["Quality slightly lower", "Higher cost"],
          bestFor: "Beginners, diverse styles"
        },
        {
          name: "Stable Diffusion",
          price: "$0-$20/month",
          quality: "★★★☆☆",
          speed: "★★★★☆",
          ease: "★★☆☆☆",
          features: ["Open source", "Customizable", "Low cost"],
          pros: ["Free", "Highly customizable", "Local execution"],
          cons: ["Lower quality", "Technical knowledge required"],
          bestFor: "Cost-conscious, technical users"
        }
      ]
    },
    {
      category: "Video Generation AI",
      description: "Tools for generating videos from text or images",
      tools: [
        {
          name: "Runway Gen-3 Alpha",
          price: "$12-$96/month",
          quality: "★★★★★",
          speed: "★★★☆☆",
          ease: "★★★★☆",
          features: ["High-quality video", "Text-to-video", "Image-to-video"],
          pros: ["Excellent quality", "Latest technology", "Feature-rich"],
          cons: ["Slow generation", "Higher cost"],
          bestFor: "High-quality commercial videos"
        },
        {
          name: "Luma Dream Machine",
          price: "$10-$80/month",
          quality: "★★★★☆",
          speed: "★★★★☆",
          ease: "★★★★☆",
          features: ["Fast generation", "Stable output", "User-friendly"],
          pros: ["Fast generation", "Stable", "Beginner-friendly"],
          cons: ["Quality slightly lower"],
          bestFor: "Beginners, fast generation"
        },
        {
          name: "Kling AI",
          price: "$5-$50/month",
          quality: "★★★☆☆",
          speed: "★★★★★",
          ease: "★★★★★",
          features: ["Ultra-fast", "Low cost", "Multi-language"],
          pros: ["Most affordable", "Ultra-fast", "Easy to use"],
          cons: ["Lower quality"],
          bestFor: "Cost-conscious, bulk generation"
        }
      ]
    },
    {
      category: "Upscaling & Enhancement",
      description: "Tools for upscaling and enhancing images and videos",
      tools: [
        {
          name: "Topaz Video AI",
          price: "$300 (one-time)",
          quality: "★★★★★",
          speed: "★★★☆☆",
          ease: "★★★★☆",
          features: ["4K upscaling", "Noise removal", "Frame interpolation"],
          pros: ["One-time purchase", "High quality", "Feature-rich"],
          cons: ["High upfront cost", "Slow processing"],
          bestFor: "Professional, quality-focused"
        },
        {
          name: "Magnific AI",
          price: "$10-$50/month",
          quality: "★★★★☆",
          speed: "★★★★☆",
          ease: "★★★★☆",
          features: ["High-precision upscaling", "Detail preservation"],
          pros: ["High quality", "User-friendly", "Affordable"],
          cons: ["Processing can be slow"],
          bestFor: "Balanced approach, beginners"
        },
        {
          name: "Adobe Upscale",
          price: "Adobe CC ($54.99/month)",
          quality: "★★★★☆",
          speed: "★★★★★",
          ease: "★★★★★",
          features: ["Fast upscaling", "AI removal"],
          pros: ["Fast", "Easy to use", "Adobe integration"],
          cons: ["Adobe CC required", "Higher cost"],
          bestFor: "Adobe users"
        }
      ]
    }
  ];

  const comparisonTable = [
    {
      tool: "Midjourney",
      category: "Image Generation",
      monthlyCapacity: "1,000-5,000 images/month",
      unitPrice: "$0.30-$1.00",
      monthlyRevenue: "$300-$5,000",
      difficulty: "Moderate",
      recommended: "★★★★★"
    },
    {
      tool: "Runway Gen-3",
      category: "Video Generation",
      monthlyCapacity: "100-300 videos/month",
      unitPrice: "$5-$50",
      monthlyRevenue: "$500-$15,000",
      difficulty: "Hard",
      recommended: "★★★★★"
    },
    {
      tool: "Stable Diffusion",
      category: "Image Generation",
      monthlyCapacity: "5,000-10,000 images/month",
      unitPrice: "$0.30-$1.00",
      monthlyRevenue: "$500-$10,000",
      difficulty: "Hard",
      recommended: "★★★☆☆"
    },
    {
      tool: "Kling AI",
      category: "Video Generation",
      monthlyCapacity: "500-1,000 videos/month",
      unitPrice: "$5-$20",
      monthlyRevenue: "$250-$20,000",
      difficulty: "Easy",
      recommended: "★★★★☆"
    }
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
            <a href="/" className="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="/roadmap" className="text-gray-600 hover:text-blue-600 transition">Roadmap</a>
            <a href="/tool-comparison" className="text-blue-600 font-semibold">Tool Comparison</a>
            <button onClick={() => navigate('/blog')} className="text-gray-600 hover:text-blue-600 transition">Blog</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI Tool Comparison Guide</h1>
          <p className="text-xl text-gray-600 mb-8">
            Detailed comparison of the best AI tools for stock media creation, organized by category.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate('/roadmap')}>
              Back to Roadmap
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {toolCategories.map((category, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.category}</h2>
              <p className="text-gray-600 mb-8">{category.description}</p>

              <div className="grid md:grid-cols-3 gap-8">
                {category.tools.map((tool, toolIdx) => (
                  <Card key={toolIdx} className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <Badge className="bg-blue-100 text-blue-700">{tool.price}</Badge>
                      </div>
                      <CardDescription>
                        <div className="space-y-1 mt-2">
                          <div><span className="font-semibold">Quality:</span> {tool.quality}</div>
                          <div><span className="font-semibold">Speed:</span> {tool.speed}</div>
                          <div><span className="font-semibold">Ease:</span> {tool.ease}</div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {tool.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex gap-2 text-sm text-gray-600">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Pros</h4>
                        <ul className="space-y-1">
                          {tool.pros.map((pro, pIdx) => (
                            <li key={pIdx} className="flex gap-2 text-sm text-green-600">
                              <Check className="w-4 h-4 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Cons</h4>
                        <ul className="space-y-1">
                          {tool.cons.map((con, cIdx) => (
                            <li key={cIdx} className="flex gap-2 text-sm text-red-600">
                              <X className="w-4 h-4 flex-shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Best For:</span> {tool.bestFor}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Revenue Potential Comparison</h2>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tool</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Monthly Capacity</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Monthly Revenue</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonTable.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-semibold">{row.tool}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.monthlyCapacity}</TableCell>
                    <TableCell>{row.unitPrice}</TableCell>
                    <TableCell className="font-semibold text-green-600">{row.monthlyRevenue}</TableCell>
                    <TableCell>{row.difficulty}</TableCell>
                    <TableCell>{row.recommended}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Recommendation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recommended Combinations for Beginners</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-lg">🟢 Cost-Focused</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tool Stack</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Stable Diffusion (Image generation, Free)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Kling AI (Video generation, $5+/month)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Magnific AI (Upscaling, $10+/month)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Monthly Cost</h4>
                  <p className="text-lg font-bold text-green-600">$15-$30/month</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expected Revenue</h4>
                  <p className="text-lg font-bold text-blue-600">$300-$1,000/month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-lg">🟠 Quality-Focused</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tool Stack</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Midjourney (Image generation, $10+/month)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Runway Gen-3 (Video generation, $12+/month)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Topaz Video AI (Enhancement, $300 one-time)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Monthly Cost</h4>
                  <p className="text-lg font-bold text-green-600">$22+/month</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expected Revenue</h4>
                  <p className="text-lg font-bold text-blue-600">$1,000-$3,000+/month</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out our detailed roadmap and blog for strategies and tutorials.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate('/roadmap')}>
              View Roadmap
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
                <li><a href="/roadmap" className="hover:text-white transition">Roadmap</a></li>
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
