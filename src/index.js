import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { createLogger } from 'redux-logger';
import Counter from './components/Counter';
import reducers from './reducers';

const logger = createLogger();
const store = createStore(
    reducers,
    applyMiddleware(logger)
);

function mapStateToProps(state){
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch({type: 'increment'}),
        onDecrement: () => dispatch({type: 'decrement'}),
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);