import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Content, { HTMLContent } from "../components/Content";
import {
  Card,
  CardActionArea,
  CardActions,
  Button,
  CardMedia,
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
  },
  media: {
    height: 140,
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
              <Card className={classes.root}>
                <AttachMoneyIcon center style={{ marginTop: "3rem" }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Donate to New Freedom Washington
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Thank you for choosing to Donate to New Freedom Washington.
                    Your contributions are truly appreciated by our people.
                    Please choose a button below that will fit your needs
                  </Typography>
                </CardContent>

                <CardActions>
                  <Grid container>
                    <Grid item md={12} xs={12}>
                      <Typography>One time Payment</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <a href="https://buy.stripe.com/6oE7vf0Yc3pH10s003">
                        <Button size="small" color="primary">
                          Donate 100
                        </Button>
                      </a>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <a href="https://buy.stripe.com/dR65n722g2lDcJabIK">
                        <Button size="small" color="primary">
                          Donate 500
                        </Button>
                      </a>
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <Typography>Set up a recurring payment</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <a href="https://buy.stripe.com/dR67vfayM2lD10s144">
                        <Button size="small" color="primary">
                          Donate 100
                        </Button>
                      </a>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <a href="https://buy.stripe.com/9AQ2aV22g3pH10s7st">
                        <Button size="small" color="primary">
                          Donate 500
                        </Button>
                      </a>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>

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
