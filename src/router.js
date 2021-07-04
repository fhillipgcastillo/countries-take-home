import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';
import Home from "./components/pages/home";


const router = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </Provider>
  )
}
export default router;