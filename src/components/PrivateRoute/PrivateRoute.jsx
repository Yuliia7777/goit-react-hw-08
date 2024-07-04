import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectToken } from "../../redux/auth/selectors";
///*
const PrivateRoute = ({
  component: Component,
  navigateTo = "/login",
  ...routeProps
}) => {
  console.log("PrivateRoute :>> ", PrivateRoute);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  if (!isLoggedIn && token) {
    return <p>loading...</p>;
  }
  if (!isLoggedIn && !token) {
    return <Navigate to={navigateTo} />;
  }

  return <Component {...routeProps} />;
  // return isLoggedIn ? <Component {...routeProps} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
