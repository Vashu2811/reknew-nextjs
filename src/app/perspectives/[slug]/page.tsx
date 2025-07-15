import { fetchBlogPosts } from '../api';
import BlogPostClient from './BlogPostClient';
export const metadata = {
  title: "Context Is All You Need – ReKnew's Answer to Failing AI Projects",
  description:
    "If your AI efforts are failing, it’s likely due to lack of context. ReKnew’s Context Engineering™ approach is helping Enterprises overcome the Context Chasm.",
  openGraph: {
    type: "website",
    url: "https://reknew.ai/context-is-all-you-need-reknews-answer-to-failing-ai-projects",
    title: "Context Is All You Need – ReKnew’s Answer to Failing AI Projects",
    description:
      "If your AI efforts are failing, it’s likely due to lack of context. ReKnew’s Context Engineering™ approach is helping Enterprises overcome the Context Chasm.",
    images: [
      {
        url: "https://blog.reknew.ai/wp-content/uploads/2025/06/ReKnew.AI-Overview.001.png",
        width: 1200,
        height: 630,
        alt: "ReKnew",
      },
    ],
    siteName: "ReKnew",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ReKnew",
    creator: "@ReKnew",
    title: "Context Is All You Need – ReKnew’s Answer to Failing AI Projects",
    description:
      "If your AI efforts are failing, it’s likely due to lack of context. ReKnew’s Context Engineering™ approach is helping Enterprises overcome the Context Chasm.",
    images: [
      "https://blog.reknew.ai/wp-content/uploads/2025/06/ReKnew.AI-Overview.001.png",
    ],
    url: "https://reknew.ai/context-is-all-you-need-reknews-answer-to-failing-ai-projects",
  },
  robots: "index, follow",
  authors: [{ name: "ReKnew" }],
  alternates: {
    canonical:
      "https://reknew.ai/context-is-all-you-need-reknews-answer-to-failing-ai-projects",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};


// Required for static export - generates static params at build time
export async function generateStaticParams() {
    try {
        // Fetch all blog posts to get their slugs
        const posts = await fetchBlogPosts(1, 100); // Get a large number to cover all posts
        
        return posts.map((post) => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        // Return empty array if there's an error
        return [];
    }
}

export default function BlogPostPage({ params }) {
    return <BlogPostClient slug={params.slug} />;
}
