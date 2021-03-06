import React, { useContext } from 'react'
import { Link, graphql } from 'gatsby'
import { Button } from 'react-bootstrap'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import Video from '../components/Video/Video'
import Comment from '../components/Comment/Comment'
import MyApp from '../contexts/MyApp'

import reactAdvancedImage from '../components/Footer/React-Advanced.png'

const ReactAdvancedCourse = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const app = useContext(MyApp)

  const handleBuy = (courseName) => {
    app.process.setProcessName(courseName)
    if (!app.user.userData.id) {
      app.modal.setModalToShow('register')
    } else {
      app.modal.setModalToShow('buyModal')
    }
  }

  const uniquePath = post.fields.slug

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={
          post.html.replace(/(<([^>]+)>)/gi, '').substr(0, 350) ||
          post.frontmatter.description ||
          post.excerpt
        }
        image={
          post.frontmatter.cover &&
          post.frontmatter.cover.childImageSharp.fluid.src
        }
      />
      <div id="content">
        <div className="container">
          <div className="breadcrumb">
            <ul>
              <li>
                <Link to={'/'}>
                  <i className="fas fa-home"></i>خانه
                </Link>
              </li>
              <li className="active">{post.frontmatter.title}</li>
            </ul>
          </div>
          <div className="about-us">
            <div className="row content-container">
              <div className="col-12 col-md-4 col-lg-4 content-image">
                <img src={reactAdvancedImage} alt={post.frontmatter.title} />
                <div className="buy-in-post">
                  {/* <SpecialMessage /> */}
                  <Button
                    onClick={() => handleBuy('react-advanced')}
                    variant="primary"
                    className="widthAll"
                  >
                    خرید دوره React JS پیشرفته
                  </Button>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-8 content">
                <h1>{post.frontmatter.title}</h1>

                {post.frontmatter.videoSourceURL && (
                  <div className="content-video">
                    <Video
                      videoSourceURL={post.frontmatter.videoSourceURL}
                      videoTitle={post.frontmatter.videoTitle}
                    />
                  </div>
                )}
                <div className="space-2" />
                <article>
                  <section dangerouslySetInnerHTML={{ __html: post.html }} />
                </article>
                <div className="space-8" />
                <Comment uniquePath={uniquePath} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ReactAdvancedCourse
