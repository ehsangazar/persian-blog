import React from "react"
import { Link } from "gatsby"
import './Posts.css'

const Posts = ({ posts }) => {
  return (
    <div id="content">
      <div className="container">
        <div className="blog-masonry posts">
          {posts.map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className="post-card -center" key={`post-${index}`}>
                <Link to={node.fields.slug} className="card__cover">
                  <img
                    src={
                      node.frontmatter.cover && node.frontmatter
                        .cover.childImageSharp.fluid.src
                    }
                    alt={title}
                  />
                </Link>
                <div className="card__content">
                  <Link to={node.fields.slug} className="card__content-title">
                    <h5 className="--noMargin">{title}</h5>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Posts
