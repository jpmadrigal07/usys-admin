import CardMenu from "../components/CardMenu";
import I_Usys_Logo from "../assets/usys_logo.png";
import { useNavigate } from "react-router-dom";
import { setAuthenticatedUser } from "../actions/authenticatedUserActions";
import Cookies from "js-cookie";

const Module = () => {
  const navigate = useNavigate();
  const sessionToken = Cookies.get("sessionToken");

  const _removeSessionToken = () => {
    if (sessionToken) {
      Cookies.remove("sessionToken");
      setAuthenticatedUser({});
      console.log("removeSession");
      window.location.href = "/";
    }
  };

  const cards = [
    {
      id: "4234s934",
      title: "Logout",
      img: "./static/logout_logo.png",
      isLogout: true,
      link: "",
    },
    {
      id: "4234s24",
      title: "Accounting",
      img: "./static/accounting_logo.png",
      link: "/module/accounting",
      isLogout: null,
    },
    {
      id: "42346724",
      title: "Admission",
      img: "./static/admission_logo.png",
      link: "/module/admission",
      isLogout: null,
    },
    {
      id: "4234a2n4",
      title: "Campuses",
      img: "./static/campuses_logo.png",
      link: "/module/campuses",
      isLogout: null,
    },
    {
      id: "423d424y",
      title: "Cashier",
      img: "./static/cashier_logo.png",
      link: "/module/cashier",
      isLogout: null,
    },
    {
      id: "42345624",
      title: "Entrance Exam",
      img: "./static/entrance_exam_logo.png",
      link: "/module/entrance-exam",
      isLogout: null,
    },
    {
      id: "4234s274",
      title: "Register",
      img: "./static/registrar_logo.png",
      link: "/module/registrar",
      isLogout: null,
    },
    {
      id: "4234324",
      title: "Settings",
      img: "./static/settings_logo.png ",
      link: "/module/settings",
      isLogout: null,
    },
  ];

  return (
    <div className="h-auto py-5 lg:h-screen grid place-content-center">
      <div>
        <img src={I_Usys_Logo} alt="logo" className="w-40 h-40 mx-auto mb-6" />
      </div>
      <div className="grid md:grid-cols-4 gap-4 place-content-center w-fit mx-auto h-auto font-roboto sm:grid-cols-3">
        {cards.map((c) => {
          return (
            <div key={c.id} className="w-fit h-fit">
              <span
                onClick={() =>
                  c.isLogout
                    ? _removeSessionToken()
                    : navigate(c.link ? c.link : "/")
                }
              >
                <CardMenu title={c.title} img={c.img} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Module;
