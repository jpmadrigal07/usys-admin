import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { PATH_MODULE } from "../routes/path";

const Settings = () => {
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
  ];
  return (
    <div>
      <Breadcrumb links={links} />
      <div className="pl-72 text-ash-gray"> Settings </div>
      <div className="grid grid-cols-6 mx-72 py-8 justify-items-center ;\">
        <span
          onClick={() => navigate(PATH_MODULE.settings.studentType.root)}
          className={`hover:bg-gray px-9 py-5 hover:cursor-pointer`}
        >
          <div className="text-center grid justify-items-center">
            {<Icon icon="bi:person-plus" fontSize={45} color="#006fc9" />}
            <span className="text-ash-gray pt-3">Student Type</span>
          </div>
        </span>
        <a href="#" className={` hover:bg-gray px-9 py-5 `}>
          <div className="text-center grid justify-items-center">
            {<Icon icon="bi:person-video3" fontSize={45} color="#006fc9" />}
            <span className="text-ash-gray pt-3">Student Level</span>
          </div>
        </a>
        <a href="#" className={` hover:bg-gray px-9 py-5 `}>
          <div className="text-center grid justify-items-center">
            {<Icon icon="bi:calendar-week" fontSize={45} color="#006fc9" />}
            <span className="text-ash-gray pt-3">Semester</span>
          </div>
        </a>
        <a href="#" className={` hover:bg-gray px-9 py-5`}>
          <div className="text-center grid justify-items-center">
            {<Icon icon="bi:book-half" fontSize={45} color="#006fc9" />}
            <span className="text-ash-gray pt-3">Subject</span>
          </div>
        </a>
        <a href="#" className={` hover:bg-gray px-9 py-5`}>
          <div className="text-center grid justify-items-center">
            {<Icon icon="bi:journal-bookmark" fontSize={45} color="#006fc9" />}
            <span className="text-ash-gray pt-3">
              Subject <br></br> Prerequisite
            </span>
          </div>
        </a>
        <a href="#" className={` hover:bg-gray px-9 py-5`}>
          <div className="text-center grid justify-items-center">
            {<Icon icon="bi:card-list" fontSize={45} color="#006fc9" />}
            <span className="text-ash-gray pt-3">Curriculum</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Settings;
