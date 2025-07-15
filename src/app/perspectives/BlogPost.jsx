"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, ChevronRight, X } from 'lucide-react';
import { fetchBlogPost, fetchBlogPosts } from './api.js';
import { htmlToMarkdown } from "../../utils/htmlToMarkdown.js";
import CanvasDots from '../../components/canvas';

// Helper functions outside component
const stripHtml = (html) => {
    // Only use DOM manipulation on client side
    if (typeof window !== 'undefined') {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }
    // Fallback for server-side
    return html.replace(/<[^>]+>/g, '');
};

const cleanTitle = (title) => {
    return stripHtml(title)
        .replace(/\*\*/g, '')
        .replace(/#{1,6}\s*/g, '') // Remove # ## ### etc. and following spaces
        .replace(/---/g, '') // Remove horizontal rules
        .replace(/^\s*-+\s*$/gm, '') // Remove lines with just dashes
        .trim();
};

const BlogPost = () => {
    const params = useParams();
    const slug = params?.slug;
    const [post, setPost] = useState(null);
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isClient, setIsClient] = useState(false);

    // Ensure component only renders on client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    const openImageModal = (imageUrl, altText) => {
        setSelectedImage({ url: imageUrl, alt: altText });
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    // Handle escape key for modal
    useEffect(() => {
        if (!isClient) return;
        
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                closeImageModal();
            }
        };

        if (selectedImage) {
            document.addEventListener('keydown', handleEscapeKey);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage, isClient]);

    const loadPost = useCallback(async () => {
        if (!slug || !isClient) return;
        
        try {
            setLoading(true);
            const blogPost = await fetchBlogPost(slug);
            setPost(blogPost);
        } catch (err) {
            setError('Failed to load blog post');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [slug, isClient]);

    const loadRecentPosts = useCallback(async () => {
        if (!isClient) return;
        
        try {
            const posts = await fetchBlogPosts(1, 4); // Get 4 posts to filter out current one
            // Filter out current post and take only 3
            const filteredPosts = posts.filter(p => p.slug !== slug).slice(0, 3);
            setRecentPosts(filteredPosts);
        } catch (err) {
            console.error('Failed to load recent posts:', err);
        }
    }, [slug, isClient]);

    useEffect(() => {
        if (isClient && slug) {
            loadPost();
        }
    }, [loadPost, isClient, slug]);

    useEffect(() => {
        if (post && isClient) {
            document.title = `${cleanTitle(post.title)} | ReKnew Perspectives`;
            loadRecentPosts();
        }
    }, [post, loadRecentPosts, isClient]);

    // Don't render anything until client-side
    if (!isClient) {
        return null;
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Component to render Markdown-style content
    const MarkdownContent = ({ content }) => {
        const markdownContent = htmlToMarkdown(content);
        
        // Make openImageModal available globally for inline images
        useEffect(() => {
            if (isClient) {
                window.openImageModal = openImageModal;
                return () => {
                    delete window.openImageModal;
                };
            }
        }, [isClient]);
        
        return (
            <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="whitespace-pre-wrap leading-relaxed">
                    {markdownContent.split('\n').map((paragraph, index) => {
                        if (!paragraph.trim()) return <br key={index} />;
                        
                        // Skip horizontal rules and lines with just markdown symbols
                        if (paragraph.trim() === '---' || paragraph.trim().match(/^-+$/) || paragraph.trim().match(/^#+$/)) {
                            return null;
                        }
                        
                        // Handle headers
                        if (paragraph.startsWith('# ')) {
                            return (
                                <h1 key={index} className="text-3xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-200">
                                    {paragraph.substring(2).trim()}
                                </h1>
                            );
                        }
                        if (paragraph.startsWith('## ')) {
                            return (
                                <h2 key={index} className="text-2xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-200">
                                    {paragraph.substring(3).trim()}
                                </h2>
                            );
                        }
                        if (paragraph.startsWith('### ')) {
                            return (
                                <h3 key={index} className="text-xl font-bold mb-2 mt-5 text-gray-800 dark:text-gray-200">
                                    {paragraph.substring(4).trim()}
                                </h3>
                            );
                        }
                        
                        // Handle blockquotes
                        if (paragraph.startsWith('> ')) {
                            return (
                                <blockquote key={index} className="border-l-4 border-[#FF512F] pl-4 my-4 italic text-gray-600 dark:text-gray-400">
                                    {paragraph.substring(2)}
                                </blockquote>
                            );
                        }
                        
                        // Handle lists
                        if (paragraph.startsWith('- ')) {
                            return (
                                <ul key={index} className="list-disc ml-6 mb-2">
                                    <li className="text-gray-600 dark:text-gray-400">{paragraph.substring(2)}</li>
                                </ul>
                            );
                        }
                        
                        // Handle code blocks
                        if (paragraph.startsWith('```')) {
                            return (
                                <pre key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto my-4">
                                    <code className="text-sm">{paragraph.replace(/```/g, '')}</code>
                                </pre>
                            );
                        }
                        
                        // Handle images - check for image markdown
                        if (paragraph.match(/^!\[(.*?)\]\((.*?)\)$/)) {
                            const imageMatch = paragraph.match(/^!\[(.*?)\]\((.*?)\)$/);
                            const altText = imageMatch[1];
                            const imageUrl = imageMatch[2];
                            
                            return (
                                <div key={index} className="my-6">
                                    <div 
                                        onClick={() => openImageModal(imageUrl, altText)}
                                        className="block cursor-pointer hover:opacity-90 transition-opacity"
                                    >
                                        <img
                                            src={imageUrl}
                                            alt={altText}
                                            className="w-full h-auto rounded-lg shadow-lg object-cover max-w-full"
                                            loading="lazy"
                                            style={{ 
                                                imageRendering: '-webkit-optimize-contrast',
                                                backfaceVisibility: 'hidden',
                                                transform: 'translateZ(0)'
                                            }}
                                        />
                                    </div>
                                    {altText && (
                                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2 italic">
                                            {altText}
                                        </p>
                                    )}
                                </div>
                            );
                        }
                        
                        // Handle inline formatting
                        const formatInlineContent = (text) => {
                            // First handle inline images with click handler
                            text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
                                return `<img src="${src}" alt="${alt}" class="inline-block max-w-full h-auto rounded cursor-pointer hover:opacity-90 transition-opacity" style="image-rendering: -webkit-optimize-contrast; backface-visibility: hidden; transform: translateZ(0);" onclick="openImageModal('${src}', '${alt}')" />`;
                            });
                            
                            return text
                                // Bold text
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-800 dark:text-gray-200">$1</strong>')
                                // Italic text
                                .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                                // Inline code
                                .replace(/`(.*?)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">$1</code>')
                                // Links
                                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#FF512F] hover:text-[#FF8A63] underline">$1</a>');
                        };
                        
                        // Regular paragraphs
                        return (
                            <p 
                                key={index} 
                                className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: formatInlineContent(paragraph) }}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FF512F]"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                        Article Not Found
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
                    <Link 
                        href="/perspectives"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF512F] text-white rounded-lg hover:bg-[#FF8A63] transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Perspectives
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="hidden sm:block">
                <CanvasDots />
            </div>
            <div className="min-h-screen py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Back Button */}
                    <Link 
                        href="/perspectives"
                        className="inline-flex items-center gap-2 text-[#FF512F] hover:text-[#FF8A63] mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Perspectives
                    </Link>

                    {/* Article */}
                    <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg mb-16 max-w-6xl mx-auto">
                        {/* Content */}
                        <div className="p-8">
                            {/* Title */}
                            <h1 className="text-3xl md:text-6xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                                {cleanTitle(post.title)}
                            </h1>

                            {/* Content with Markdown rendering */}
                            <MarkdownContent content={post.content} />
                        </div>
                    </article>

                    {/* Recent Posts Section */}
                    {recentPosts.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                                Recent Posts
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {recentPosts.map((recentPost) => (
                                    <Link 
                                        key={recentPost.id}
                                        href={`/perspectives/${recentPost.slug}`}
                                        className="block cursor-pointer relative z-50 pointer-events-auto"
                                        style={{ pointerEvents: 'auto' }}
                                    >
                                        <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full cursor-pointer relative z-50">
                                            {/* Featured Image */}
                                            {recentPost.featuredImage && (
                                                <div className="aspect-video overflow-hidden">
                                                    <img
                                                        src={recentPost.featuredImage}
                                                        alt={recentPost.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        onError={(e) => {
                                                            console.log('Recent post image failed to load:', recentPost.featuredImage);
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                </div>
                                            )}

                                            {/* Fallback for recent posts without featured image */}
                                            {!recentPost.featuredImage && (
                                                <div className="aspect-video overflow-hidden bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 flex items-center justify-center">
                                                    <div className="text-[#FF512F] text-4xl font-bold">
                                                        {cleanTitle(recentPost.title).charAt(0).toUpperCase()}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="p-6">
                                                {/* Meta Info */}
                                                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar size={16} />
                                                        <span>{formatDate(recentPost.date)}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <User size={16} />
                                                        <span>{recentPost.author}</span>
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-[#FF512F] transition-colors">
                                                    {cleanTitle(recentPost.title)}
                                                </h3>

                                                {/* Excerpt */}
                                                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                                    {stripHtml(recentPost.excerpt)}
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
                        </section>
                    )}
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeImageModal}
                >
                    <div className="relative max-w-7xl max-h-full">
                        <button
                            onClick={closeImageModal}
                            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                            aria-label="Close image"
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                        {selectedImage.alt && (
                            <p className="text-white text-center mt-4 text-sm">
                                {selectedImage.alt}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default BlogPost;
