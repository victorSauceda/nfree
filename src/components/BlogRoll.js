import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Video from "../components/video";

function TitleAndDate(props) {
  return (
    <p className="post-meta">
      <Link
        className="title has-text-primary is-size-4"
        style={{
          textDecoration: "none",
        }}
        to={props.slug}
      >
        {props.frontmatter.title}
      </Link>
      <span> &bull;</span>
      <span
        className="subtitle is-size-5 is-block"
        style={{
          marginTop: "1rem",
        }}
      >
        {props.frontmatter.date}
      </span>
    </p>
  );
}

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    console.log("data: ", data);
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                style={{ height: "100%", textAlign: "center" }}
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header style={{ justifyContent: "center" }}>
                  {post.frontmatter.featuredimage ? (
                    <div
                      className="featured-thumbnail"
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                </header>
                <TitleAndDate
                  slug={post.fields.slug}
                  frontmatter={post.frontmatter}
                ></TitleAndDate>

                <p style={{ textAlign: "justify" }}>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                videoSourceURL
                videoTitle
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
