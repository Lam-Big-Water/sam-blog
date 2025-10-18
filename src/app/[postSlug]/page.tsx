import React from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc';

import { BLOG_TITLE } from '@/constants';

import { loadBlogPost } from '@/helpers/file-helpers';

import COMPONENT_MAP from '@/helpers/mdx-components';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';

interface ParamsPropsType {
  params: Promise<{
    postSlug: string;
  }>
}

export async function generateMetadata ({params}: ParamsPropsType) {
  const {postSlug} = await params;

  const {frontmatter} = await loadBlogPost(postSlug);

  return {
    title: `${frontmatter.title} º ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  }
}

async function BlogPost({params}: ParamsPropsType) {
  // console.log(params)
  const {postSlug} = await params;
  const {frontmatter, content} = await loadBlogPost(postSlug);
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} components={COMPONENT_MAP}/>
      </div>
    </article>
  );
}

export default BlogPost;
