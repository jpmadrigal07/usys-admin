import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import MainLayout from "../pages/MainLayout";
//guards
import AuthGuard from "../guards/AuthGuard";
// ----------------------------------------------------------------------

const Loadable = (Component: React.ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { pathname } = useLocation();

  return (
    <Suspense
      fallback={
        // To be replaced with loading
        <Loading />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [{ path: "", element: <Login /> }],
    },
    {
      path: "login",
      children: [{ path: "", element: <Login /> }],
    },
    {
      path: "module",
      element: (
        <AuthGuard>
          <MainMenu />
        </AuthGuard>
      ),
    },
    {
      path: "module",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to="/module/cashier" replace /> },
        { path: "cashier", element: <Cashier /> },
        { path: "accounting", element: <Accounting /> },
        { path: "admission", element: <Admission /> },
        { path: "campuses", element: <Campuses /> },
        { path: "cashier", element: <Cashier /> },
        { path: "enrollment", element: <Enrollment /> },
        { path: "entrance-exam", element: <EntranceExam /> },
        { path: "grade", element: <Grade /> },
        { path: "registrar", element: <Registrar /> },
        { path: "settings", element: <Settings /> },
        {
          path: "settings",
          children: [
            { path: "", element: <Settings /> },
            {
              path: "student-type",
              children: [
                { path: "", element: <StudentType /> },
                { path: "add", element: <CreateStudentType /> },
              ],
            },
          ],
        },
        {
          path: "semester",
          children: [{ path: "create", element: <CreateSemester /> }],
        },
      ],
    },
    // { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import("../pages/Login")));
const MainMenu = Loadable(lazy(() => import("../pages/MainMenu")));
const Registrar = Loadable(lazy(() => import("../pages/Registrar")));
const DefaultComponents = Loadable(
  lazy(() => import("../pages/DefaultComponents"))
);
const Student = Loadable(lazy(() => import("../pages/Student")));
const Accounting = Loadable(lazy(() => import("../pages/Accounting")));
const Admission = Loadable(lazy(() => import("../pages/Admission")));
const Campuses = Loadable(lazy(() => import("../pages/Campuses")));
const Cashier = Loadable(lazy(() => import("../pages/Cashier")));
const Enrollment = Loadable(lazy(() => import("../pages/Enrollment")));
const EntranceExam = Loadable(lazy(() => import("../pages/Entrance Exam")));
const Grade = Loadable(lazy(() => import("../pages/Grade")));
const Settings = Loadable(lazy(() => import("../pages/Settings")));
const StudentType = Loadable(
  lazy(() => import("../pages/Settings/StudentType"))
);
const CreateStudentType = Loadable(
  lazy(() => import("../pages/Settings/CreateStudentType"))
);
const CreateSemester = Loadable(
  lazy(() => import("../pages/Semester/CreateSemester"))
);
// Main
// const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
