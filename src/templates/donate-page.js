import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Content, { HTMLContent } from "../components/Content";
import {
  Card,
  CardActions,
  Fab,
  Grid,
  CardContent,
  Typography,
} from "@material-ui/core";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: "center",
    margin: "auto",

    padding: "1rem",
    backgroundColor: "#FF4300",
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
              <Grid container>
                <Grid item md={6} xs={12}>
                  <Card className={classes.root}>
                    <AttachMoneyIcon
                      center
                      style={{ marginTop: "3rem", fontSize: "3rem" }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="h2"
                        style={{ marginBottom: "2rem" }}
                      >
                        One time Payment
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h2"
                        style={{ color: "white", fontSize: "1.6rem" }}
                      >
                        Please click below to donate a one time payment
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Grid container>
                        <Grid item md={12} xs={12}>
                          <Typography style={{ fontSize: "1.6rem" }}>
                            Set up a one time Payment
                          </Typography>
                        </Grid>
                        <Grid item md={4} xs={4}>
                          <a href="https://buy.stripe.com/9AQ2aV22g3pH10s7st">
                            <Fab
                             className={classes.fab}
                            >
                              25+
                            </Fab>
                          </a>
                        </Grid>
                        <Grid item md={4} xs={4}>
                          <a href="https://buy.stripe.com/6oE7vf0Yc3pH10s003">
                            <Fab
                          className={classes.fab}
                            >
                              100+
                            </Fab>
                          </a>
                        </Grid>
                        <Grid item md={4} xs={4}>
                          <a href="https://buy.stripe.com/dR65n722g2lDcJabIK">
                            <Fab
                          className={classes.fab}
                            >
                              500+
                            </Fab>
                          </a>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={6} xs={12} className={classes.media}>
                  <Card className={classes.root}>
                    <AttachMoneyIcon
                      center
                      style={{ marginTop: "3rem", fontSize: "3rem" }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="h2"
                        style={{ marginBottom: "2rem" }}
                      >
                        Recurring Payment
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h2"
                        style={{ color: "white", fontSize: "1.6rem" }}
                      >
                        Please click below to donate a recurring payments
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Grid container>
                        <Grid item md={12} xs={12}>
                          <Typography style={{ fontSize: "1.6rem" }}>
                            Set up a recurring payment
                          </Typography>
                        </Grid>
                        <Grid item md={4} xs={4}>
                          <a href="https://buy.stripe.com/9AQ2aV22g3pH10s7st">
                            <Fab
                          className={classes.fab}
                            >
                              25+
                            </Fab>
                          </a>
                        </Grid>
                        <Grid item md={4} xs={4}>
                          <a href="https://buy.stripe.com/dR67vfayM2lD10s144">
                            <Fab
                          className={classes.fab}
                            >
                              100+
                            </Fab>
                          </a>
                        </Grid>
                        <Grid item md={4} xs={4}>
                          <a href="https://buy.stripe.com/9AQ2aV22g3pH10s7st">
                            <Fab
                       className={classes.fab}
                            >
                              500+
                            </Fab>
                          </a>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
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
