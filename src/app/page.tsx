import React from 'react';

import { getBlogPostList } from '@/helpers/file-helpers';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';

async function Home() {
  const blogPosts = await getBlogPostList();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      {blogPosts.map(({slug, ...delegated}) => (
              <BlogSummaryCard
                key={slug}
                slug={slug}
                {...delegated}
              />
      ))}



      {/* TODO: Iterate over the data read from the file system! */}
      {/* <BlogSummaryCard
        slug="example"
        title="Hello world!"
        abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"
        publishedOn={new Date()}
      /> */}
    </div>
  );
}

export default Home;
