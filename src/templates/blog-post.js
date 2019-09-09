import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

const TitleWrapper = styled.div`
  color: #ff0000;
  margin: 0 auto;
  h1 {
    @media (max-width: 750px) {
      font-size: 2rem;
    },
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <TitleWrapper style={{maxWidth: rhythm(28),padding: `0 ${rhythm(1)}`,}}>
          <h1>
            {post.frontmatter.title}
          </h1>
        </TitleWrapper>
        <div style={{
          margin: 'auto',
          maxWidth: rhythm(28),
          padding: `0 ${rhythm(1)}`,
        }}>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
            }}
          >
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin: 0,
            }}
          >
            <li>
              {previous && (
                <AniLink fade to={previous.fields.slug} rel="prev" duration={0.2}>
                  ← {previous.frontmatter.title}
                </AniLink>
              )}
            </li>
            <li>
              {next && (
                <AniLink fade to={next.fields.slug} rel="next" duration={0.2}>
                  {next.frontmatter.title} →
                </AniLink>
              )}
            </li>
          </ul>
        </div>
     </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail
      }
    }
  }
`
