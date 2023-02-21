import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import { Grid, Typography, Button } from "@material-ui/core";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: "center",
    margin: "auto",

    padding: "1rem",
    backgroundColor: "#821213",
    color: "white",
    fontSize: "2rem",
    height: "100%",
    "@media (max-width: 675px)": {
      marginTop: "3rem",
    },
  },
  fab: {
    color: "black",
    width: "5rem",
    height: "5rem",
    fontSize: "1.2rem",
    fontWeight: "2px",
    backgroundColor: "white",
    marginBottom: "3rem",
    marginTop: "3rem",
    "@media (max-width: 900px)": {
      height: "4rem",
      width: "4rem",
      marginBottom: "0rem",
      marginTop: "2rem",
    },
  },
  media: {
    height: 140,
    height: "100%",
    "@media (max-width: 675px)": {
      marginTop: "3rem",
    },
  },
});
export const DonatePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const classes = useStyles();
  // useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search);
  //   console.log(
  //     "🚀 ~ file: donate-page.js ~ line 54 ~ useEffect ~ query",
  //     query
  //   );
  //   if (query.get("success")) {
  //     setMessage("Order placed! You will receive an email confirmation.");
  //   }
  //   if (query.get("canceled")) {
  //     setMessage(
  //       "Order canceled -- continue to shop around and checkout when you're ready."
  //     );
  //   }
  // }, []);
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <Typography
                gutterBottom
                variant="h3"
                component="h1"
                style={{ textAlign: "center", marginBottom: "3rem" }}
              >
                Donate to New Freedom Washington
              </Typography>
              <Typography
                gutterBottom
                variant="p"
                component="p"
                style={{ textAlign: "center", marginBottom: "3rem" }}
              >
                The New Freedom Program in Washington State is a unique and
                powerful initiative that provides critical support and resources
                to individuals who have been impacted by gang involvement and
                incarceration. As the only peer-based gang intervention and life
                skills development program in the {`state's`} Department of
                Corrections, New Freedom has been a game-changer for many
                individuals seeking to turn their lives around. <br />
                <br />
                Founded by six incarcerated men who are former gang members,
                along with a classification counselor and a correctional
                lieutenant at the Twin Rivers Unit of Monroe Correctional
                Complex, New Freedom is dedicated to removing barriers to
                success and building a foundation for positive change. Through a
                focus on learning new behavioral skills, specialized reentry
                planning, and connection to comprehensive wrap-around services,
                participants in the program have the opportunity to build a
                network of support and accountability within the community.
                <br />
                <br />
                By donating to the New Freedom Program, you can help support
                this important work and contribute to positive outcomes for
                individuals impacted by gang involvement and incarceration. Your
                donation can help ensure that more individuals have access to
                the resources, education, and support they need to successfully
                transition back into their communities and build better lives
                for themselves and their families. Join us in supporting this
                critical program and making a difference in the lives of those
                who need it most.
                <br />
                <br />
              </Typography>
              <Grid
                container
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid
                  item
                  md={12}
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <a href="https://buy.stripe.com/5kA2aV9uIaS924w5kr">
                    <Button
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FEC64A",
                        borderRadius: 10,
                        padding: 10,
                        color: "#ffffff",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                      center
                    >
                      Donate Now
                    </Button>
                  </a>
                </Grid>
              </Grid>
              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                {" "}
                New Freedom Washington is a non-partisan, non-political
                501(c)(3) charitable organization. EIN number 86-3313558{" "}
              </div>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DonatePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DonatePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DonatePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

DonatePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DonatePage;

export const DonatePageQuery = graphql`
  query DonatePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
