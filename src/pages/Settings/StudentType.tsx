import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Table from "../../components/Table";

const StudentType = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-sm text-primary">
        Modules &gt; Settings &gt; Student Type
      </p>
      <div className="divide-y divide-solid divide-gray">
        <div className="py-2 m-0">
          {/* to test RoleBasedGuard */}
          <Button
            variant="link"
            onClick={() => {
              navigate("/module/settings/student-type/add");
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
