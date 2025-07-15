// Simple HTML to Markdown converter for WordPress content
export const htmlToMarkdown = (html) => {
    if (!html) return '';
    
    // Server-side safe HTML stripping
    const stripHtmlSafe = (str) => {
        return str.replace(/<[^>]+>/g, '');
    };
    
    // Convert common HTML elements to Markdown
    let markdown = html
        // WordPress Figure blocks with images and captions
        .replace(/<figure[^>]*class="[^"]*wp-block-image[^"]*"[^>]*>\s*<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>\s*<figcaption[^>]*>(.*?)<\/figcaption>\s*<\/figure>/gi, '![$2]($1)\n*$3*\n\n')
        .replace(/<figure[^>]*class="[^"]*wp-block-image[^"]*"[^>]*>\s*<img[^>]*src="([^"]*)"[^>]*>\s*<figcaption[^>]*>(.*?)<\/figcaption>\s*<\/figure>/gi, '![]($1)\n*$2*\n\n')
        .replace(/<figure[^>]*>\s*<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>\s*<figcaption[^>]*>(.*?)<\/figcaption>\s*<\/figure>/gi, '![$2]($1)\n*$3*\n\n')
        .replace(/<figure[^>]*>\s*<img[^>]*src="([^"]*)"[^>]*>\s*<figcaption[^>]*>(.*?)<\/figcaption>\s*<\/figure>/gi, '![]($1)\n*$2*\n\n')
        
        // Headers - strip bold and other formatting from header content
        .replace(/<h1[^>]*>(.*?)<\/h1>/gi, (match, content) => {
            const cleanContent = stripHtmlSafe(content).replace(/\*\*/g, '').replace(/#{1,6}\s*/g, '');
            return `# ${cleanContent}\n\n`;
        })
        .replace(/<h2[^>]*>(.*?)<\/h2>/gi, (match, content) => {
            const cleanContent = stripHtmlSafe(content).replace(/\*\*/g, '').replace(/#{1,6}\s*/g, '');
            return `## ${cleanContent}\n\n`;
        })
        .replace(/<h3[^>]*>(.*?)<\/h3>/gi, (match, content) => {
            const cleanContent = stripHtmlSafe(content).replace(/\*\*/g, '').replace(/#{1,6}\s*/g, '');
            return `### ${cleanContent}\n\n`;
        })
        .replace(/<h4[^>]*>(.*?)<\/h4>/gi, (match, content) => {
            const cleanContent = stripHtmlSafe(content).replace(/\*\*/g, '').replace(/#{1,6}\s*/g, '');
            return `#### ${cleanContent}\n\n`;
        })
        .replace(/<h5[^>]*>(.*?)<\/h5>/gi, (match, content) => {
            const cleanContent = stripHtmlSafe(content).replace(/\*\*/g, '').replace(/#{1,6}\s*/g, '');
            return `##### ${cleanContent}\n\n`;
        })
        .replace(/<h6[^>]*>(.*?)<\/h6>/gi, (match, content) => {
            const cleanContent = stripHtmlSafe(content).replace(/\*\*/g, '').replace(/#{1,6}\s*/g, '');
            return `###### ${cleanContent}\n\n`;
        })
        
        // Paragraphs
        .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
        
        // Bold and Italic
        .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
        .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
        .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
        .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
        
        // Links
        .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
        
        // Images
        .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, '![$2]($1)')
        .replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, '![]($1)')
        
        // Lists
        .replace(/<ul[^>]*>/gi, '')
        .replace(/<\/ul>/gi, '\n')
        .replace(/<ol[^>]*>/gi, '')
        .replace(/<\/ol>/gi, '\n')
        .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
        
        // Blockquotes
        .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, '> $1\n\n')
        
        // Code
        .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
        .replace(/<pre[^>]*>(.*?)<\/pre>/gi, '```\n$1\n```\n\n')
        
        // Line breaks
        .replace(/<br[^>]*>/gi, '\n')
        .replace(/<hr[^>]*>/gi, '\n---\n\n')
        
        // Remove remaining HTML tags
        .replace(/<[^>]+>/g, '')
        
        // Clean up extra whitespace
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .replace(/^\s+|\s+$/g, '');
    
    return markdown;
};

// Alternative: Simple HTML strip for cleaner text
export const stripHtmlTags = (html) => {
    if (!html) return '';
    
    // Server-side safe approach
    return html.replace(/<[^>]+>/g, '');
};