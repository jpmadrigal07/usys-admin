import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { PATH_MODULE } from "../../routes/path";
import Breadcrumb from "../../components/Breadcrumb";

const StudentType = () => {
  const navigate = useNavigate();
  const links = [
    {
      name: "Module",
      path: "/module",
    },
    {
      name: "Settings",
      path: "/module/settings",
    },
    {
      name: "Student Type",
      path: "/module/settings/student-type",
    },
  ];
  return (
    <div>
      <Breadcrumb links={links} />
      <div className="divide-y divide-solid divide-gray">
        <div className="py-2 m-0">
          {/* to test RoleBasedGuard */}
          <Button
            variant="link"
            onClick={() => {
              navigate(PATH_MODULE.settings.studentType.add);
            }}
          >
            <Icon className="inline mr-2" icon={"bi:plus-lg"} />
            Create
          </Button>
          <Button variant="link">
            <Icon className="inline mr-2" icon={"bi:pencil-square"} />
            Edit
          </Button>
          <Button variant="link">
            <Icon className="inline mr-2" icon={"bi:trash3"} />
            Delete
          </Button>
          <Button variant="link">
            <Icon className="inline mr-2" icon={"bi:arrow-repeat"} />
            Refresh
          </Button>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default StudentType;
