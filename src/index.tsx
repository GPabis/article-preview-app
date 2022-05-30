import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './containers/App';
import './index.css';
import { LayoutProvider } from 'src/context/LayoutContext';
import { ErrorProvider } from 'src/context/ErrorContext';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorProvider>
                <LayoutProvider>
                    <App />
                </LayoutProvider>
            </ErrorProvider>
        </Provider>
    </React.StrictMode>,
);
