import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Settings = () => {
  const notify = () => toast("Wow so easy !");
  return (
    <div>
      <button onClick={notify}>Notifyasdasdasdasd</button>
      <div className="w-full pl-16 py-10 text-ash-gray">
        {" "}
        Module{" "}
        <span>
          <a className="text-primary">Settings</a>
        </span>
      </div>
      <div className="pl-72 text-ash-gray"> Settings </div>
      <div className="grid grid-cols-6 mx-72 py-8 justify-items-center ;\">
        <a href="#" className={` hover:bg-gray px-9 py-5 `}>
          <Link to={"/module/settings/student-type"}>
            <div className="text-center grid justify-items-center">
              {<Icon icon="bi:person-plus" fontSize={45} color="#006fc9" />}
              <span className="text-ash-gray pt-3">Student Type</span>
            </div>
          </Link>
        </a>
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
