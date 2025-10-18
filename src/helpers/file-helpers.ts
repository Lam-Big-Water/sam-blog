import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import React from 'react';

export interface BlogPostFrontmatter {
    title: string;
    abstract: string;
    publishedOn: string;
    [key: string]: unknown; // 允许其他 frontmatter 字段
  }
  
  export interface BlogPost {
    slug: string;
    title: string;
    abstract: string;
    publishedOn: string;
    [key: string]: unknown; // 允许其他 frontmatter 字段
  }
  
  export interface BlogPostContent {
    frontmatter: BlogPostFrontmatter;
    content: string;
  }

export async function getBlogPostList(): Promise<BlogPost[]> {
    const fileNames = await readDirectory('/content');
    // console.log(fileNames)
  
    const blogPosts: BlogPost[] = [];
  
    for (const fileName of fileNames) {
      const rawContent = await readFile(
        `/content/${fileName}`
      );
  
      const { data: frontmatter } = matter(rawContent);
  
      blogPosts.push({
        slug: fileName.replace('.mdx', ''),
        ...frontmatter as BlogPostFrontmatter,
      });
    }
  
    return blogPosts.sort((p1, p2) =>
      p1.publishedOn < p2.publishedOn ? 1 : -1
    );
  }
  
  export const loadBlogPost = React.cache(
    async function loadBlogPost(slug: string): Promise<BlogPostContent> {
      const rawContent = await readFile(
        `/content/${slug}.mdx`
      );
  
      const {data: frontmatter, content} = matter(rawContent);

      return {frontmatter: frontmatter as BlogPostFrontmatter, content};
    }
  )
  
  function readFile(localPath: string): Promise<string> {
    return fs.readFile(
      path.join(process.cwd(), localPath),
      'utf8'
    );
  }
  
  function readDirectory(localPath: string): Promise<string[]> {
    return fs.readdir(
      path.join(process.cwd(), localPath)
    );
  }