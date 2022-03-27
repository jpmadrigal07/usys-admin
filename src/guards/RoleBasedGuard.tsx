import { ReactNode } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

type RoleBasedGuardProps = {
  children: ReactNode;
  accessibleRoles: string[];
  loggedInUserUserType: string;
  prevPath: string;
};

function RoleBasedGuard({
  accessibleRoles,
  children,
  loggedInUserUserType,
  prevPath,
}: RoleBasedGuardProps) {
  if (loggedInUserUserType && !accessibleRoles.includes(loggedInUserUserType)) {
    toast.warning("Oops! You don't have permission to access that page", {
      toastId: "roleBasedWarning",
    });
    return <Navigate to={prevPath} />;
  }

  return <>{children}</>;
}

const mapStateToProps = (global: any) => ({
  loggedInUserUserType: global.authenticatedUser.user.type,
});

export default connect(mapStateToProps, {})(RoleBasedGuard);
