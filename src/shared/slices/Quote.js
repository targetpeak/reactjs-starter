import React from 'react';
import { RichText } from 'prismic-reactjs';

const Quote = (props) => {
    let sectionClass = "content-section ";
    if (props.slice.slice_label) {
        sectionClass += "text-section-" + props.slice.slice_label;
    } else {
        sectionClass += "text-section-1col";
    }

    return (
        <section className={sectionClass}>
            <blockquote>
                {RichText.asText(props.slice.primary.quote_text)}
            </blockquote>
        </section>
    );
};

export default Quote;