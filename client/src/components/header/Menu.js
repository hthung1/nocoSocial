import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import Avatar from "../Avatar";
import NotifyModal from "../NotifyModal";

const Menu = () => {
  const { auth, theme, notify } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="menu">
      <ul className="navbar-nav flex-row">
        <li className="nav-item dropdown" style={{ opacity: 1 }}>
          <span
            className="nav-link position-relative nav-noti"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="position-relative nav-noti">
              <i className="uil uil-bell ">
                <small className="notification-count">
                  {notify.data.length}+
                </small>
              </i>
            </span>
          </span>

          <div
            className="dropdown-menu "
            aria-labelledby="navbarDropdown"
            style={{ transform: "translateX(75px)" }}
          >
            <NotifyModal />
          </div>
        </li>

        <li className="nav-item dropdown list-user-menu" style={{ opacity: 1 }}>
          <span
            className="nav-link dropdown-toggle d-flex"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Avatar src={auth.user.avatar} size="medium-avatar" />
          </span>

          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>
              Profile
            </Link>

            <label
              htmlFor="theme"
              className="dropdown-item"
              onClick={() =>
                dispatch({
                  type: GLOBALTYPES.THEME,
                  payload: !theme,
                })
              }
            >
              {theme ? "Light mode" : "Dark mode"}
            </label>

            <div className="dropdown-divider"></div>
            <Link
              className="dropdown-item"
              to="/"
              onClick={() => dispatch(logout())}
            >
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
