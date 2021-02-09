import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px" };
  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        style={{ borderRadius: "5px", width: "10rem", height: "10rem" }}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <Img
        style={{ borderRadius: "5px", width: "5rem", height: "5rem" }}
        fluid={childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!image && typeof image === "string")
    return (
      <img
        style={{ borderRadius: "5px", width: "5rem", height: "5rem" }}
        src={image}
        alt={alt}
      />
    );

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
