import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const CreateSemester = () => {
  return (
    <div>
      <p className="text-sm text-primary">
        <Link to={"/semester"}>Semester</Link> &gt;
        <span className="text-dark">Add</span>
      </p>

      <div>
        {" "}
        <p className="sm: py-5 text-sm">Create Semester</p>{" "}
      </div>
      <form>
        <div className="text-sm ">
          <div className="py-2 m-0 grid grid-cols-6 gap-4">
            <div>
              Name <span className="text-danger">*</span>
              <Icon className="inline ml-1" icon="uil:exclamation-circle" />
            </div>
            <Input size="md" variant="text"></Input>
          </div>

          <div className="mt-12 flex border-y-2 border-y-dark-gray sm: py-2  ">
            <div className="mx-5">
              <Button size="sm" variant="primary">
                Add
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateSemester;
