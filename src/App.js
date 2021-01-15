import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './store';

import GlobalStyle from './styles/globalStyle';

import Main from './page/main';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GlobalStyle />
                <Main />
            </PersistGate>
        </Provider>
    );
}

export default App;
