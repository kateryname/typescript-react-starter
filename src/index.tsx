import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {enthusiasm} from './reducers';
import {StoreState} from './types';
import {Provider} from "react-redux";
import {EnthusiasmAction} from './actions';

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm,
    {
        languageName: 'TypeScript',
        enthusiasmLevel: 1
    });
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
