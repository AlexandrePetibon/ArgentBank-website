import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom'; // Importation unique de createRoot
import store from "./redux/store/store";
import App from "./App";

// Utilisation de createRoot pour rendre l'application
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
