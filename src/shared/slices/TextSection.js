import React from 'react';
import { RichText } from 'prismic-reactjs';

const TextSection = (props) => {
    let sectionClass = "content-section ";
    if (props.slice.slice_label) {
        sectionClass += "text-section-" + props.slice.slice_label;
    } else {
        sectionClass += "text-section-1col";
    }

    return (
        <section className={sectionClass}>
            {RichText.render(props.slice.primary.rich_text)}
        </section>
    );
};

export default TextSection;