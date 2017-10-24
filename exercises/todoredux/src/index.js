import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import reducer from "./redux/reducers";

import App from "./main/App";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /><Provider>, document.getElementById("root"));
