import { useState, ReactNode } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
// hooks
// import useAuth from '../hooks/useAuth';
// pages
import Login from "../pages/Login";
import Cookies from "js-cookie";

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  // const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );
  const sessionToken = Cookies.get("sessionToken");

  if (sessionToken == null) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
