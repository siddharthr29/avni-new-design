import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  featuredpost: boolean;
  featuredimage: string | null;
  tags: string[];
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(blogDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString(),
          author: data.author || 'Avni Team',
          description: data.description || '',
          featuredpost: data.featuredpost || false,
          featuredimage: data.featuredimage || null,
          tags: data.tags || [],
          content,
        };
      });

    // Sort by date, newest first
    return allPostsData.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  if (!slug || slug === 'undefined') {
    console.error('Invalid slug provided:', slug);
    return null;
  }
  
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      console.error(`Blog post not found: ${slug}`);
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Avni Team',
      description: data.description || '',
      featuredpost: data.featuredpost || false,
      featuredimage: data.featuredimage || null,
      tags: data.tags || [],
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getFeaturedPost(): BlogPost | null {
  const allPosts = getAllBlogPosts();
  return allPosts.find((post) => post.featuredpost) || allPosts[0] || null;
}
