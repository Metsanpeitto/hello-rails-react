import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Greetings from "./Greetings";
import store from '../redux/configureStore'
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/greetings" element={<Greetings />} />
            <Route
              path="/"
              element={<Link to="/greetings"> New greeting</Link>}
            />

          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
