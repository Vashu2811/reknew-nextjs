'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { fetchBlogPosts } from './api';
import CanvasDots from '../../components/canvas';
import Link from 'next/link';
import Image from 'next/image';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Listen for theme changes from navbar
    useEffect(() => {
        const checkTheme = () => {
            const isDark =
                document.documentElement.classList.contains("dark") ||
                document.body.classList.contains("dark") ||
                localStorage.getItem("theme") === "dark";
            setIsDarkMode(isDark);
        };

        checkTheme();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "class"
                ) {
                    checkTheme();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        const handleStorageChange = (e) => {
            if (e.key === "theme") {
                checkTheme();
            }
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("themeChanged", checkTheme);

        return () => {
            observer.disconnect();
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("themeChanged", checkTheme);
        };
    }, []);

    const loadPosts = useCallback(async () => {
        try {
            setLoading(true);
            const blogPosts = await fetchBlogPosts(currentPage, 9);
            setPosts(blogPosts);
        } catch (err) {
            setError('Failed to load blog posts');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [currentPage]);

    useEffect(() => {
        document.title = 'Perspectives | ReKnew';
        loadPosts();
    }, [loadPosts]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const stripHtml = (html) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    if (loading) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${
                isDarkMode ? "bg-gray-900" : "bg-transparent"
            }`}>
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FF512F]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${
                isDarkMode ? "bg-gray-900" : "bg-transparent"
            }`}>
                <div className="text-center">
                    <h2 className={`text-2xl font-bold mb-4 ${
                        isDarkMode ? "text-gray-200" : "text-gray-800"
                    }`}>
                        Oops! Something went wrong
                    </h2>
                    <p className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen transition-colors duration-300 ${
            isDarkMode ? "bg-gray-900" : "bg-transparent"
        }`}>
            <div className="hidden sm:block">
                <CanvasDots />
            </div>
            <div className="min-h-screen py-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
                            isDarkMode ? "text-gray-100" : "text-[#374151]"
                        }`}>
                            Our
                            <span className="relative inline-block mx-2">
                                <span className="relative z-10 text-[#FF512F]">Perspectives</span>
                                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path
                                        d="M0 5c30-5 70-5 100 0"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        className="text-[#FF512F]"
                                    />
                                </svg>
                            </span>
                        </h1>
                        <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}>
                            Insights, updates, and thought leadership on data modernization, AI adoption, and enterprise transformation.
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {posts.map((post) => (
                            <Link 
                                key={post.id}
                                href={`/perspectives/${post.slug}`}
                                className="block group cursor-pointer"
                            >
                                <article className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full border border-[#FF512F]/20 ${
                                    isDarkMode ? "bg-gray-800" : "bg-white"
                                }`}>
                                    {/* Featured Image */}
                                    {post.featuredImage && (
                                        <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                                            <Image
                                            width={1200}
                                            height={630}
                                                src={post.featuredImage}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                onError={(e) => {
                                                    const img = e.target as HTMLImageElement;
                                                    img.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    )}
                                    
                                    {/* Fallback when no featured image */}
                                    {!post.featuredImage && (
                                        <div className="aspect-video overflow-hidden bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 flex items-center justify-center">
                                            <div className="text-[#FF512F] text-4xl font-bold">
                                                {post.title.charAt(0).toUpperCase()}
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Meta Info */}
                                        <div className={`flex items-center gap-4 text-sm mb-3 transition-colors duration-300 ${
                                            isDarkMode ? "text-gray-300" : "text-gray-500"
                                        }`}>
                                            <div className="flex items-center gap-1">
                                                <Calendar size={16} />
                                                <span>{formatDate(post.date)}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User size={16} />
                                                <span>{post.author}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h2 className={`text-xl font-bold mb-3 group-hover:text-[#FF512F] transition-colors duration-300 ${
                                            isDarkMode ? "text-gray-100" : "text-gray-800"
                                        }`}>
                                            {post.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className={`mb-4 line-clamp-3 transition-colors duration-300 ${
                                            isDarkMode ? "text-gray-300" : "text-gray-600"
                                        }`}>
                                            {stripHtml(post.excerpt)}
                                        </p>

                                        {/* Read More Link */}
                                        <div className="inline-flex items-center gap-2 text-[#FF512F] hover:text-[#FF8A63] font-medium transition-colors">
                                            Read More
                                            <ChevronRight size={16} />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination (Basic) */}
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-6 py-2 rounded-lg bg-[#FF512F] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FF8A63] transition-colors"
                        >
                            Previous
                        </button>
                        <span className={`px-4 py-2 transition-colors duration-300 ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}>
                            Page {currentPage}
                        </span>
                        <button
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            disabled={posts.length < 9}
                            className="px-6 py-2 rounded-lg bg-[#FF512F] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FF8A63] transition-colors"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogList;
