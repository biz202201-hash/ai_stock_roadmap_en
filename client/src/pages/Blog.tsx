import React, { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Tag, Search, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Aggregate Global Information with CustomGPT.ai to Accelerate Stock Media Sales',
    description: 'Learn how to leverage CustomGPT.ai\'s information gathering capabilities for trend research, market analysis, and streamlined content creation.',
    date: 'June 3, 2026',
    category: 'AI Tools',
    slug: '/blog-customgpt',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'How to Earn $10,000/Month with Midjourney',
    description: 'Complete guide to earning $10,000 monthly with AI image generation. Learn prompt creation techniques, stock media optimization, and monetization strategies.',
    date: 'June 2, 2026',
    category: 'Earning Methods',
    slug: '/blog-midjourney',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'Tips for Earning with Shutterstock',
    description: 'Effective strategies for earning on Shutterstock. Learn asset selection, keyword optimization, and practical techniques for consistent income.',
    date: 'June 1, 2026',
    category: 'Earning Methods',
    slug: '/blog-shutterstock',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
  },
  {
    id: '4',
    title: 'Start an AI Side Hustle and Earn $5,000/Month',
    description: 'Beginner\'s guide to AI side hustles. Use ChatGPT, Midjourney, Canva and other free/low-cost AI tools to earn $5,000 monthly.',
    date: 'May 31, 2026',
    category: 'Earning Methods',
    slug: '/blog-ai-sidehustle',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
  },
  {
    id: '5',
    title: 'Earn $5,000-$10,000/Month with CustomGPT.ai',
    description: 'Detailed guide to earning $5,000-$10,000 monthly using CustomGPT.ai. Learn prompt creation, asset selection, and monetization strategies.',
    date: 'May 30, 2026',
    category: 'AI Tools',
    slug: '/blog-customgpt-earn',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
  },
  {
    id: '6',
    title: 'Complete Guide: Earn $10,000/Month with Midjourney',
    description: 'Full roadmap to earning $10,000 with Midjourney. Master prompt creation, optimize stock sales, and implement multi-platform strategies.',
    date: 'May 29, 2026',
    category: 'Earning Methods',
    slug: '/blog-midjourney-guide',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
  },
  {
    id: '7',
    title: 'How Beginners Can Earn $10,000/Month with AI',
    description: 'Practical guide for AI beginners. Combine ChatGPT, Midjourney, Canva, and CustomGPT.ai to achieve $10,000 monthly income with real case studies.',
    date: 'May 28, 2026',
    category: 'Earning Methods',
    slug: '/blog-ai-beginner-10k',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
  },
  {
    id: '8',
    title: 'AI Strategy to Earn $10,000/Month with Stock Media',
    description: 'AI-powered strategies for $10,000 monthly earnings. Learn multi-platform deployment, asset optimization, and sustainable income building.',
    date: 'May 27, 2026',
    category: 'Earning Methods',
    slug: '/blog-stock-10k-strategy',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
  },
  {
    id: '9',
    title: 'Generate and Sell AI Images with Canva',
    description: 'Use Canva\'s AI image generation to create high-quality stock images for Shutterstock and Adobe Stock. Earn $5,000-$10,000 monthly.',
    date: 'June 4, 2026',
    category: 'Canva',
    slug: '/blog-canva-ai-image-sales',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
  },
  {
    id: '10',
    title: 'Create Professional Social Media Posts with Canva',
    description: 'Use Canva templates to create high-quality posts for Instagram, Twitter, Facebook, and LinkedIn. Perfect for design beginners.',
    date: 'June 4, 2026',
    category: 'Canva',
    slug: '/blog-canva-social-media',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
  },
  {
    id: '11',
    title: 'Canva Pro vs Free: Which Should You Choose?',
    description: 'Compare Canva Pro and free versions. Understand why Pro is essential for side hustles and analyze ROI of 233-567%.',
    date: 'June 4, 2026',
    category: 'Canva',
    slug: '/blog-canva-pro-vs-free',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
  },
  {
    id: '12',
    title: 'Bulk Generate Stock Images with Canva',
    description: 'Efficient workflow for generating 100-200 stock images monthly. Learn keyword planning, batch generation, and automation techniques.',
    date: 'June 4, 2026',
    category: 'Canva',
    slug: '/blog-canva-bulk-image-generation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
  },
];

export default function Blog() {
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract all categories
  const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Search and filter logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === null || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // SEO: Meta tags
  React.useEffect(() => {
    document.title = 'Blog | AI Stock Media Roadmap';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Blog for creators aiming to earn $300,000+ with AI stock media. Learn about CustomGPT.ai, Midjourney, Runway and more.');
    }

    // OGP Tags
    const setOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setOrCreateMeta('og:title', 'Blog | AI Stock Media Roadmap');
    setOrCreateMeta('og:description', 'Blog for creators aiming to earn $300,000+ with AI stock media');
    setOrCreateMeta('og:url', 'https://aistockmap-en.manus.space/blog');
    setOrCreateMeta('og:type', 'website');
  }, []);

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
            <a href="/tool-comparison" className="text-gray-600 hover:text-blue-600 transition">Tool Comparison</a>
            <a href="/blog" className="text-blue-600 font-medium hover:text-blue-700 transition">Blog</a>
            <a href="/#faq" className="text-gray-600 hover:text-blue-600 transition">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Articles for creators aiming to earn $300,000+ with AI stock media. Learn tool usage, trend analysis, and content creation techniques.
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                All
              </button>
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles published yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(post.slug)}
                >
                  {/* Image */}
                  {post.image && (
                    <div className="w-full h-48 overflow-hidden bg-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 mt-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Learn More?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out our roadmap for a complete guide to earning with AI stock media.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate('/roadmap')}>
              View Roadmap
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/')}>
              Back to Home
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
