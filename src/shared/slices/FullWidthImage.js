import React from 'react';

const FullWidthImage = (props) => {
  return (
    <section className="full-width-image content-section">
      <img src={props.slice.primary.image.url} alt="" />
    </section>
  );
};

export default FullWidthImage;