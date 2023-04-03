import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from 'next/head'
import Post from "../components/Post"
import { sortByDate } from "../utils"
import Hero from "../components/Hero"
import Header from "../components/Header"


export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Exploring the nature of value | Disclosing Value</title>
        <meta name="description" content="Exploring value in light of the adoption of participatory
                    design, lean entrepreneurship, and other customer-centred approaches to innovation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />

        <meta property="og:title" content="Exploring the nature of value | Disclosing Value"></meta>
        <meta property="og:description" content="Exploring value in light of the adoption of participatory
                    design, lean entrepreneurship, and other customer-centred approaches to innovation."></meta>
        <meta property="og:image" content="/square.png" />
      </Head>



      <Header textColor="#f7f7f7" />



      <Hero />
      <p className=" wrapper posts-published">RECENTLY PUBLISHED</p>

      <div className="posts">
        {posts.map((post, index) => (

          <Post key={index} post={post} />

        )
        )}

      </div>
    </>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    //Create slug
    const slug = filename.replace(".md", "")
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8"
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  }
  )

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}