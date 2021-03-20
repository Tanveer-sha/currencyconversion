import React from 'react';
import Currency from './Screens/currency';
import './Styles/currency.css';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import CurrencyReducer from './Redux/Reducers/currency';

const rootReducer=combineReducers({
  CurrencyReducer:CurrencyReducer,
  });
  
  const store=createStore(rootReducer,applyMiddleware(ReduxThunk));

  
function App() {
  return (
    <div className="App">
      <Provider store={store} ><Currency /></Provider>     
    </div>
  );
}

export default App;
