import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import configureStore from './store'
import {Provider} from 'react-redux';
import Root from './containers/Root/Root'

const app = express();

app.use((req, res) => {
        const store = configureStore();

        const componentHTML = ReactDom.renderToString(
            <Provider store={store}>
                <Root />
            </Provider>
        );
        const finalState = store.getState();
        return res.end(renderHTML(componentHTML, finalState));
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML(componentHTML, initialState) {
    return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>Front-End Challenge</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      </head>
      <body>
     
        <div id="react-view">${componentHTML}</div>
      
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
             <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});