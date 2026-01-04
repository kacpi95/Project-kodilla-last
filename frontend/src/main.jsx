import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';
import { BrowseRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowseRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowseRouter>
);
