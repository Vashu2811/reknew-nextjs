const WP_BASE_URL = 'https://blog.reknew.ai';
const WP_USERNAME = 'get';
const WP_APP_PASSWORD = 'F05PspGpfKvUQysGgPJi5oe8';

// Create basic auth header
const authHeader = btoa(`${WP_USERNAME}:${WP_APP_PASSWORD}`);

const defaultHeaders = {
    'Authorization': `Basic ${authHeader}`,
    'Content-Type': 'application/json',
};

// Helper function to clean titles - server-side safe
const cleanTitle = (title) => {
    // Server-side safe HTML stripping
    const textContent = title.replace(/<[^>]+>/g, '');
    return textContent
        .replace(/\*\*/g, '')
        .replace(/#{1,6}\s*/g, '')
        .replace(/---/g, '')
        .replace(/^\s*-+\s*$/gm, '')
        .trim();
};

// Fetch all blog posts
export const fetchBlogPosts = async (page = 1, perPage = 10) => {
    try {
        const response = await fetch(
            `${WP_BASE_URL}/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}&_embed`,
            {
                headers: defaultHeaders,
                cache: 'force-cache', // Add caching for static generation
            }
        );
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        return posts.map(post => ({
            id: post.id,
            title: cleanTitle(post.title.rendered),
            excerpt: post.excerpt.rendered,
            content: post.content.rendered,
            slug: post.slug,
            date: post.date,
            author: post._embedded?.author?.[0]?.name || 'Unknown',
            featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
            categories: post._embedded?.['wp:term']?.[0] || [],
        }));
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
};

// Fetch single blog post by slug
export const fetchBlogPost = async (slug) => {
    try {
        const response = await fetch(
            `${WP_BASE_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
            {
                headers: defaultHeaders,
                cache: 'force-cache', // Add caching for static generation
            }
        );
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        if (posts.length === 0) {
            throw new Error('Post not found');
        }
        
        const post = posts[0];
        return {
            id: post.id,
            title: cleanTitle(post.title.rendered),
            content: post.content.rendered,
            slug: post.slug,
            date: post.date,
            author: post._embedded?.author?.[0]?.name || 'Unknown',
            featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
            categories: post._embedded?.['wp:term']?.[0] || [],
        };
    } catch (error) {
        console.error('Error fetching blog post:', error);
        throw error;
    }
};

// Fetch categories
export const fetchCategories = async () => {
    try {
        const response = await fetch(
            `${WP_BASE_URL}/wp-json/wp/v2/categories`,
            {
                headers: defaultHeaders,
            }
        );
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};