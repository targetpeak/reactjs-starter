import React from 'react';
import NotFoundPage from './NotFoundPage';
import TextSection from './slices/TextSection';
import FullWidthImage from './slices/FullWidthImage';
import Quote from './slices/Quote';
import ImageGallery from './slices/ImageGallery';
import ImageHighlight from './slices/ImageHighlight';

export default class Page extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
        notFound: false,
        doc: null,
        linkResolver: null,
    };
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
            // We are using the function to get a document by its uid
            return props.prismicCtx.api.getByUID('page', props.match.params.uid, {}, (err, doc) => {
                if (doc) {
                    // We put the retrieved content in the state as a doc variable
                    this.setState({ doc });
                } else {
                    // We changed the state to display error not found if no matched doc
                    this.setState({ notFound: !doc });
                }
            });
        }
        return null;
    }

  render() {
    const doc = this.state.doc;
    if (doc && doc.data) {
      const pageContent = doc.data.page_content.map(function(slice, index){
        switch (slice.slice_type) {
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
            return <p>{slice.slice_type}</p>;
        }
      });
      
      return(
        <div className="container" data-wio-id={doc.id}>
          { pageContent }
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFoundPage />;
    } else {
      return <div className="container">Loading</div>;
    }
  }
}
