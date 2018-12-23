import React from 'react';
import Page from './app/Page';
import HomePage from './app/HomePage';
import NotFoundPage from './app/NotFoundPage';

export default (prismicCtx, PRISMIC_UNIVERSAL_DATA) => {
  return [
    { path: '/',
      component: HomePage,
      exact: true,
      render(props) {
        return <HomePage {...props} prismicCtx={prismicCtx} PRISMIC_UNIVERSAL_DATA={PRISMIC_UNIVERSAL_DATA} />;
      }
    },
    {
      path: '/page/:uid',
      //must be specified even with a render function
      component: Page,
      render(props) {
        return <Page {...props} prismicCtx={prismicCtx} PRISMIC_UNIVERSAL_DATA={PRISMIC_UNIVERSAL_DATA} />;
      }
    },
    {
      path: '/',
      component: NotFoundPage
    }
  ];
}