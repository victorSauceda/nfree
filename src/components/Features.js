import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import ReactReadMoreReadLess from "react-read-more-read-less";
const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-4">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                // width: "240px",
                // height: "250px",
                marginBottom: "2rem",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <ReactReadMoreReadLess
            charLimit={300}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            {item.text}
          </ReactReadMoreReadLess>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
