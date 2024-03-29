import { graphql, Link } from "gatsby";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import Video from "../components/video";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  videoSourceURL,
  videoTitle,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <>
              {videoSourceURL ==
                "https://www.linkedin.com/posts/new-freedom-washington_mentalhealth-newfreedomwashington-transformation-activity-6885434169921556480-IdCp" ||
              videoSourceURL ==
                "https://www.linkedin.com/feed/update/urn:li:activity:6879309535614504960" ||
              videoSourceURL ==
                "https://www.linkedin.com/posts/victor-sauceda-10202a190_codeforamerica-thrivesbc-resourcefair-activity-6865179777792385024-dVSC" ||
              videoSourceURL ==
                "https://www.linkedin.com/feed/update/urn:li:activity:6875308087616659456" ? (
                <Link
                  className="btn"
                  to={videoSourceURL}
                  style={{ margin: "1rem 0" }}
                >
                  Learn More
                </Link>
              ) : (
                <Video videoSrcURL={videoSourceURL} videoTitle={title} />
              )}
            </>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  videoSourceURL: PropTypes.string,
  videoTitle: PropTypes.string,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        videoSourceURL={post.frontmatter.videoSourceURL}
        videoTitle={post.frontmatter.videoTitle}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        videoSourceURL
        videoTitle
      }
    }
  }
`;
