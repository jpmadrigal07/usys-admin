import { Icon } from "@iconify/react";
import React from "react";

const Settings = () => {
  return (
    <div>
      <div className="w-full pl-16 py-10 text-ash-gray">
        {" "}
        Module{" "}
        <span>
          <a className="text-primary">Settings</a>
        </span>
      </div>
      <div className="pl-72 text-ash-gray"> Settings </div>
      <div className="grid grid-cols-6 mx-72 py-8 justify-items-center ;\">
        <div className="text-center grid justify-items-center">
          {<Icon icon="bi:person-plus" fontSize={45} color="#006fc9" />}
          <span className="text-ash-gray pt-3">Student Type</span>
        </div>
        <div className="text-center grid justify-items-center">
          {<Icon icon="bi:person-video3" fontSize={45} color="#006fc9" />}
          <span className="text-ash-gray pt-3">Student Level</span>
        </div>
        <div className="text-center grid justify-items-center">
          {<Icon icon="bi:calendar-week" fontSize={45} color="#006fc9" />}
          <span className="text-ash-gray pt-3">Semester</span>
        </div>
        <div className="text-center grid justify-items-center">
          {<Icon icon="bi:book-half" fontSize={45} color="#006fc9" />}
          <span className="text-ash-gray pt-3">Subject</span>
        </div>
        <div className="text-center grid justify-items-center">
          {<Icon icon="bi:journal-bookmark" fontSize={45} color="#006fc9" />}
          <span className="text-ash-gray pt-3">Subject Prerequisite</span>
        </div>
        <div className="text-center grid justify-items-center">
          {<Icon icon="bi:card-list" fontSize={45} color="#006fc9" />}
          <span className="text-ash-gray pt-3">Curriculum</span>
        </div>
      </div>
    </div>
  );
};

export default Settings;
