import { Icon } from "@iconify/react";
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const CreateStudentType = () => {
  return (
    <div className="px-10 py-4 ">
      <p className="text-sm text-primary">
        Modules &gt; Settings &gt; Student Type &gt;
        <span className="text-dark">Create</span>
      </p>

      <div>
        {" "}
        <p className="sm: py-5 text-sm">Create Student Type</p>{" "}
      </div>
      <div className="text-sm ">
        <div className="py-2 m-0 grid grid-cols-6 gap-4">
          <div>
            Input Text
            <Icon className="inline ml-1" icon="uil:exclamation-circle" />
          </div>
          <Input size="md" variant="text"></Input>
        </div>

        <div className="py-2 m-0 grid grid-cols-6 gap-4">
          <div>
            Input Text <span className="text-danger">*</span>
            <Icon className="inline ml-1" icon="uil:exclamation-circle" />
          </div>
          <Input size="md" variant="text"></Input>
        </div>

        <div className="py-2 m-0 grid grid-cols-6 gap-4">
          <div>
            Input Text
            <Icon className="inline ml-1" icon="uil:exclamation-circle" />
          </div>
          <Input size="md" variant="text"></Input>
        </div>

        <div className="mt-12 flex border-y-2 border-y-dark-gray sm: py-2  ">
          <div className="mx-5">
            <Button size="sm" variant="primary">
              Create
            </Button>
          </div>

          <div className="inline ml-10">
            <Button variant="ghost" size="sm">
              &#60; Previous
            </Button>
            <Button variant="ghost" size="sm">
              Next &#62;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStudentType;
