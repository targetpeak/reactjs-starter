import React from 'react';

const HtmlSection = (props) => {
    let sectionClass = "content-section ";
    if (props.slice.slice_label) {
        sectionClass += "text-section-" + props.slice.slice_label;
    } else {
        sectionClass += "text-section-1col";
    }

    const output = props.slice.primary.raw_html.map(a => {
      return a.text;
    });

    return (
        <div className={sectionClass} dangerouslySetInnerHTML={{ __html: output.join() }} />
    );
};

export default HtmlSection;