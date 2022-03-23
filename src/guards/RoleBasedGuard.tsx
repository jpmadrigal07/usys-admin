import { ReactNode } from "react";
import { Navigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

type RoleBasedGuardProps = {
  children: ReactNode;
  accessibleRoles: string[];
};

const useCurrentRole = () => {
  // current user role
  const role = "superuser";
  return role;
};

export default function RoleBasedGuard({
  accessibleRoles,
  children,
}: RoleBasedGuardProps) {
  const currentRole = useCurrentRole();
  const notify = () =>
    toast.error(
      "Permission Denied. You do not have permission to access this page"
    );

  if (!accessibleRoles.includes(currentRole)) {
    notify();
    return (
      <>
        <Navigate to={"/module/settings/student-type"} />;
      </>
    );
  }

  return <>{children}</>;
}
