import React from 'react';
import NotFoundPage from './NotFoundPage';

import TextSection from './slices/TextSection';
import FullWidthImage from './slices/FullWidthImage';
import Quote from './slices/Quote';
import ImageGallery from './slices/ImageGallery';
import ImageHighlight from './slices/ImageHighlight';
import HomeBanner from './slices/HomeBanner';
import HtmlSection from "./slices/HtmlSection";

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notFound: false,
            doc: null,
            linkResolver: null,
        };
        this.fetchPage = this.fetchPage.bind(this);
    }

    componentWillMount() {
        this.fetchPage(this.props);
    }

    componentWillReceiveProps(props) {
        this.fetchPage(props);
    }

    componentDidUpdate() {
        this.props.prismicCtx.toolbar();
    }

    fetchPage(props) {
        if (props.prismicCtx) {

            return props.prismicCtx.api.getSingle('homepage', {}, (err, doc) => {
                if (doc) {
                    // We put the retrieved content in the state as a doc variable
                    this.setState({ doc });
                } else {
                    // We changed the state to display error not found if no matched doc
                    this.setState({ notFound: !doc });
                }
            });
        }
    }

  render() {
    const document = this.state.doc;
    if (document && document.data) {
        console.log(JSON.stringify(document.data.page_content));
      
      var pageContent = document.data.page_content.map(function(slice, index) {
        switch (slice.slice_type) {
          case "html_section":
            return <HtmlSection key={index} slice={slice}/>;
          case "text_section":
            return <TextSection key={index} slice={slice}/>;
          case "full_width_image":
            return <FullWidthImage key={index} slice={slice}/>;
          case "quote":
            return <Quote key={index} slice={slice}/>;
          case "image_gallery":
            return <ImageGallery key={index} slice={slice}/>;
          case "image_highlight":
            return <ImageHighlight key={index} slice={slice}/>;
          default:
            return <p key={index}>{slice.slice_type}</p>;
        }
      });
      
      return (
        <div data-wio-id={document.id}>
          <HomeBanner document={document}/>
          <div className="container">
            { pageContent }
          </div>
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFoundPage />;
    } else {
      return <div className="container">Loading...</div>;
    }
  }
}
