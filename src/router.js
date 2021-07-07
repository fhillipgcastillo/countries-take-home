import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/pages/home";
import Country from "./components/pages/country";
import Header from "./components/atoms/Header";

const router = () => {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/country/:countryName" component={Country} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default router;
