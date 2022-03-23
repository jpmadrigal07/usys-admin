import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { connect } from "react-redux";

type RoleBasedGuardProps = {
  children: ReactNode;
  accessibleRoles: string[];
};

export function RoleBasedGuard(
  //   {
  //   accessibleRoles,
  //   children,
  // }: RoleBasedGuardProps
  props: any
) {
  const [currentRole, setCurrentRole] = useState();

  useEffect(() => {
    setCurrentRole(props.authenticatedUserType);
  }, [currentRole]);

  const notify = () =>
    toast.error(
      "Permission Denied. You do not have permission to access this page"
    );

  if (!props.accessibleRoles.includes(props.authenticatedUserType)) {
    notify();
    return (
      <>
        <Navigate to={"/module/settings/student-type"} />;
      </>
    );
  }

  return <>{props.children}</>;
}

const mapStateToProps = (global: any) => ({
  authenticatedUserType: global.authenticatedUser.user.type,
});

export default connect(mapStateToProps, {})(RoleBasedGuard);
