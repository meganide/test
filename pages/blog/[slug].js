import Head from 'next/head';
import Header from '@/components/Header';
import Link from 'next/link';
import Scroll from '@/components/Scroll';
import fs from 'fs';
import { marked } from 'marked';
import matter from 'gray-matter';
import path from 'path';

export default function PostPage({
  frontmatter: { title, date, cover_image, excerpt, backgroundColor, textColor },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{`${title} | Disclosing Value`}</title>
        <meta name="description" content={excerpt} />
        <meta name="image" content={cover_image} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt}></meta>
        <meta property="og:image" content={cover_image} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header textColor="#050505" backgroundColor={backgroundColor} />
      <div className="spacer"></div>

      <div className="container">
        <section style={{ background: backgroundColor }}>
          <div className="wrapper">
            <section className="content">
              <section className="content-left">
                <h1 className="post-header" style={{ color: textColor }}>
                  {title}
                </h1>
                <div className="post-date" style={{ color: textColor, opacity: 0.75 }}>
                  Posted on {date}
                </div>
                <h3 className="post-excerpt" style={{ color: textColor, opacity: 0.9 }}>
                  {excerpt}
                </h3>
              </section>
              <img className="blog-cover-img" src={cover_image} alt="" />
            </section>
          </div>
        </section>
        <div className="wrapper" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
