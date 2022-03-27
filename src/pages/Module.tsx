import React from "react";
import { Link } from "react-router-dom";
import CardMenu from "../components/CardMenu";
import I_Usys_Logo from "../assets/usys_logo.png";
import { PATH_MODULE } from "../routes/path";

const cards = [
  {
    id: "4234s24",
    title: "Accounting",
    img: "./static/accounting_logo.png",
    link: "/module/accounting",
  },
  {
    id: "42346724",
    title: "Admission",
    img: "./static/admission_logo.png",
    link: "/module/admission",
  },
  {
    id: "4234a2n4",
    title: "Campuses",
    img: "./static/campuses_logo.png",
    link: "/module/campuses",
  },
  {
    id: "423d424y",
    title: "Cashier",
    img: "./static/cashier_logo.png",
    link: "/module/cashier",
  },
  {
    id: "4234s934",
    title: "Enrollment",
    img: "./static/enrollment_logo.png",
    link: "/module/enrollment",
  },
  {
    id: "42345624",
    title: "Entrance Exam",
    img: "./static/entrance_exam_logo.png",
    link: "/module/entrance-exam",
  },
  {
    id: "4234s274",
    title: "Register",
    img: "./static/registrar_logo.png",
    link: "/module/registrar",
  },
  {
    id: "4234324",
    title: "Settings",
    img: "./static/settings_logo.png ",
    link: PATH_MODULE.settings.root,
  },
];

const Module = () => {
  return (
    <div className="h-auto py-5 lg:h-screen grid place-content-center">
      <div>
        <img src={I_Usys_Logo} alt="logo" className="w-40 h-40 mx-auto mb-6" />
      </div>
      <div className="grid md:grid-cols-4 gap-4 place-content-center w-fit mx-auto h-auto font-roboto sm:grid-cols-3">
        {cards.map((c) => {
          return (
            <div key={c.id} className="w-fit h-fit">
              <Link to={`${c.link}`}>
                <CardMenu title={c.title} img={c.img} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Module;
