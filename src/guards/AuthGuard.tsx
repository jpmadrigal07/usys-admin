import { useEffect, ReactNode } from "react";
import { useMutation } from "react-query";
import { verify } from "../utils/server/auth";
import Login from "../pages/Login";
import Cookies from "js-cookie";
import Loading from "../components/Loading";
import { connect } from "react-redux";
import { setAuthenticatedUser } from "../actions/authenticatedUserActions";
import { toast } from "react-toastify";

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: ReactNode;
  setAuthenticatedUser: Function;
};

function AuthGuard({ children, setAuthenticatedUser }: AuthGuardProps) {
  const sessionToken = Cookies.get("sessionToken");
  const {
    mutate: triggerTokenVerify,
    isLoading: isTriggerTokenVerifyLoading,
    isError: isTriggerTokenVerifyError,
    isSuccess: isTriggerTokenVerifySuccess,
    data: triggerTokenVerifyData,
  } = useMutation(async (tokenVerify: any) => verify(tokenVerify));

  useEffect(() => {
    if (sessionToken) {
      triggerTokenVerify({ token: sessionToken });
    }
  }, [sessionToken, triggerTokenVerify]);

  useEffect(() => {
    if (isTriggerTokenVerifySuccess) {
      const { _id, userType } = triggerTokenVerifyData.user;
      setAuthenticatedUser({
        id: _id,
        type: userType,
        name: triggerTokenVerifyData.name,
      });
    }
  }, [
    setAuthenticatedUser,
    triggerTokenVerifyData,
    isTriggerTokenVerifySuccess,
  ]);

  const renderComponent = () => {
    if (sessionToken && isTriggerTokenVerifyLoading) {
      return <Loading />;
    } else if (
      sessionToken &&
      !isTriggerTokenVerifyLoading &&
      !isTriggerTokenVerifyError &&
      isTriggerTokenVerifySuccess
    ) {
      return children;
    } else {
      if (
        sessionToken &&
        !isTriggerTokenVerifyLoading &&
        isTriggerTokenVerifyError
      ) {
        toast.warning(
          "Oops! Your session is expired. Please login to continue",
          { toastId: "authWarning" }
        );
      } else if (!sessionToken) {
        toast.warning("Oops! Please login to access that page", {
          toastId: "authWarning",
        });
      }
      return <Login />;
    }
  };

  return <>{renderComponent()}</>;
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { setAuthenticatedUser })(AuthGuard);
