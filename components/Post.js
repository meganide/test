import Link from "next/link"

export default function Post({ post }) {
    return (


        <section className="wrapper">
            <div className="post-list-content">

                <ul className="post-list">
                    <li className="post-list-list">


                        <img className="post-img" src={post.frontmatter.cover_image} alt="" />

                        <div className="post-list-text">
                            <a className="post-link" href={`/blog/${post.slug}`}>{post.frontmatter.title}</a>
                            <span className="post-date">{post.frontmatter.date}</span>
                            <h4 className="post-excerpt">{post.frontmatter.excerpt}</h4>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}