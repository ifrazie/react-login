import '@progress/kendo-theme-default/dist/all.css';
import "./styles.css";
import { Login } from "./container/login";
import { Dashboard } from "./container/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoutes";
import { useSelector } from "react-redux";

export default function App() {
  const auth = useSelector((state) => state.isAuthenticated);
  return (
    <Router>
      <Switch>
        <ProtectedRoute auth={auth} exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
