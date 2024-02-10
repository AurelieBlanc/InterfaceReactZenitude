import ReactDOM from 'react-dom/client';
import App from '@/components/App/App';
import { Provider } from 'react-redux'; 
import './styles/index.scss';
import store from './store'; 

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
</Provider>
);
