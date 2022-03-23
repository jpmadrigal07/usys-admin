import { ReactNode } from "react";

type RoleBasedGuardProps = {
  children: ReactNode;
  accessibleRoles: string[];
};

const useCurrentRole = () => {
  // current user role
  const role = "admin";
  return role;
};

export default function RoleBasedGuard({
  accessibleRoles,
  children,
}: RoleBasedGuardProps) {
  const currentRole = useCurrentRole();

  if (!accessibleRoles.includes(currentRole)) {
    return alert(
      "Permission Denied. You do not have permission to access this page"
    );
  }

  return <>{children}</>;
}
