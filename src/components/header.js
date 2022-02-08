import { useDispatch } from "react-redux";
import { getLogout } from "../reducers/actions";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">Dashboard</span>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <button type="button" className="btn btn-danger"
          onClick={() => dispatch(getLogout())}>
          Log Out
        </button>
      </div>
    </nav>
  );
};