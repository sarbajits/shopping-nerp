"use client"
import { useState } from 'react';
import Head from 'next/head';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    imageUrl: string;
}

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "Introducing NerpPay: Revolutionizing Digital Payments",
            excerpt: "We're excited to announce our new digital payment solution that will transform how you handle transactions.",
            date: "May 15, 2023",
            author: "Sarah Johnson",
            category: "Product",
            readTime: "5 min read",
            imageUrl: "https://placehold.co/400x250/3b82f6/ffffff?text=NerpPay"
        },
        {
            id: 2,
            title: "How Nerp is Transforming Urban Mobility",
            excerpt: "Discover how our innovative approach to transportation is making cities more accessible and sustainable.",
            date: "April 28, 2023",
            author: "Michael Chen",
            category: "Technology",
            readTime: "7 min read",
            imageUrl: "https://placehold.co/400x250/10b981/ffffff?text=Urban+Mobility"
        },
        {
            id: 3,
            title: "Nerp's Commitment to Sustainable Business Practices",
            excerpt: "Learn about our initiatives to reduce carbon footprint and promote eco-friendly operations.",
            date: "April 10, 2023",
            author: "Emma Rodriguez",
            category: "Company",
            readTime: "4 min read",
            imageUrl: "https://placehold.co/400x250/ef4444/ffffff?text=Sustainability"
        },
        {
            id: 4,
            title: "The Future of Food Delivery: NerpEats Innovations",
            excerpt: "A look at how we're using AI and machine learning to improve food delivery experiences.",
            date: "March 22, 2023",
            author: "David Kim",
            category: "Product",
            readTime: "6 min read",
            imageUrl: "https://placehold.co/400x250/f97316/ffffff?text=NerpEats"
        },
        {
            id: 5,
            title: "Expanding Our Services to 5 New Cities",
            excerpt: "We're thrilled to announce that Nerp is now available in five additional metropolitan areas.",
            date: "March 15, 2023",
            author: "Lisa Wang",
            category: "Company",
            readTime: "3 min read",
            imageUrl: "https://placehold.co/400x250/8b5cf6/ffffff?text=Expansion"
        },
        {
            id: 6,
            title: "Enhancing Security Across the Nerp Platform",
            excerpt: "Learn about our latest security upgrades and how we're protecting user data.",
            date: "February 28, 2023",
            author: "James Wilson",
            category: "Technology",
            readTime: "8 min read",
            imageUrl: "https://placehold.co/400x250/0ea5e9/ffffff?text=Security"
        }
    ];

    const categories = ['All', 'Product', 'Technology', 'Company'];

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-16">
                <div className="container mx-auto px-4 justify-center flex items-center self-center">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nerp Blog</h1>
                        <p className="text-xl opacity-90">
                            Stay updated with the latest news, product updates, and industry insights from Nerp.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filters */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium ${activeCategory === category
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map(post => (
                            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="h-48 bg-gray-200 overflow-hidden">
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-medium text-green-600">{post.category}</span>
                                        <span className="text-sm text-gray-500">{post.readTime}</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-green-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">{post.date}</span>
                                        <span className="text-sm text-gray-700">By {post.author}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated with Nerp</h2>
                    <p className="text-gray-600 max-w-xl mx-auto mb-8">
                        Subscribe to our newsletter to receive the latest updates and news directly to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row max-w-md mx-auto sm:max-w-lg">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="text-black flex-grow px-4 py-3 rounded-l-md sm:rounded-r-none sm:mb-0 mb-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />

                        <button className="bg-green-600 text-white px-6 py-3 font-medium rounded-r-md sm:rounded-l-none rounded-l-md hover:bg-green-700 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BlogPage;