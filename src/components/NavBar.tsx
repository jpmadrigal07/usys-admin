import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
// import { NAVBAR_MENU } from "../constants";
import { useMutation } from "react-query";
import { verify } from "../utils/server/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthenticatedUser } from "../actions/authenticatedUserActions";
import Cookies from "js-cookie";

const fontfamily = "font-roboto";
const fontSize = "text-sm";
const fontColor = "text-light";
const heightPadding = "h-full p-4 hover:bg-primary-darker";
const itemsFontColor = "text-ash-gray hover:bg-lighter-gray";
const iconHoverColor = "h-full hover:bg-primary-darker px-2";
const drawerHeight = "h-[calc(100vh-50px)]";
const shadows = "drop-shadow-md";
const linkColor = "text-primary-darker hover:underline underline-offset-1";

type T_MENU = {
  page: string;
  path: string;
};

function NavBar(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDrawerAccountOpen, setDrawerAccountOpen] = useState(false);

  const { setAuthenticatedUser, name } = props;
  const router = useLocation();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState("");
  const [time, setTime] = useState(new Date().getTime());

  const sessionToken = Cookies.get("sessionToken");

  const loggedInName = name ? name : "Admin";

  const { mutate: triggerTokenVerify, isLoading: isTokenVerifyLoading } =
    useMutation(async (tokenVerify: any) => verify(tokenVerify), {
      onError: async () => {
        navigate("/");
      },
    });

  useEffect(() => {
    triggerTokenVerify({ token: sessionToken });
  }, [sessionToken, triggerTokenVerify]);

  useEffect(() => {
    setCurrentPage(router.pathname);
  }, [router.pathname]);

  const _removeSessionToken = () => {
    if (sessionToken) {
      Cookies.remove("sessionToken");
      setAuthenticatedUser({});
      console.log("removeSession");
      navigate("/");
    }
  };

  return (
    <>
      <button
        className="w-full sticky top-0 z-50"
        onBlur={() => {
          setIsOpen(false);
        }}
      >
        <nav className="bg-primary relative">
          <div className="max-w-12xl mx-auto px-1">
            <div className="flex justify-between">
              <div className="flex">
                <div className={`flex  items-center`}>
                  <Link
                    to="/module"
                    className={`hover:bg-primary-darker px-4 h-full p-4`}
                  >
                    <Icon
                      icon={"bi:grid-3x3-gap-fill"}
                      fontSize={20}
                      color="#FFFFFF"
                    />
                  </Link>
                  <span
                    className={`${fontfamily} ${fontColor} p-3 font-bold hover:bg-primary-darker`}
                  >
                    USYS
                  </span>
                </div>

                <div className="flex divide-light divide-solid divide-x py-4">
                  <div></div>
                  <div></div>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                  <a
                    href="#"
                    className={`${fontfamily}  ${fontSize} ${fontColor} ${heightPadding} font-medium  px-3 text-gray-700 hover:text-gray-900`}
                  >
                    Your Info
                  </a>
                  <a
                    href="#"
                    className={`${fontfamily}  ${fontSize} ${fontColor} ${heightPadding} px-3 text-gray-700 `}
                  >
                    Privacy
                  </a>
                  <a
                    href="#"
                    className={`${fontfamily}  ${fontSize} ${fontColor} ${heightPadding} px-3 text-gray-700 hover:text-gray-900`}
                  >
                    Security
                  </a>

                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      className={`${fontfamily} ${fontSize} ${fontColor}  ${heightPadding} inline-flex justify-center w-full px-4  text-gray-700 hover:bg-gray-50`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Payment & billing
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div
                        className="origin-top-right absolute left-0  w-full  shadow-lg  z-10 bg-light"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                      >
                        <div className="py-1" role="none">
                          <a
                            href="#"
                            className={`${fontfamily} ${fontSize} ${itemsFontColor} text-gray-700 block px-4 py-2 text-sm z-10`}
                            role="menuitem"
                            id="menu-item-0"
                          >
                            Order History
                          </a>
                          <a
                            href="#"
                            className={`${fontfamily} ${fontSize} ${itemsFontColor} text-gray-700 block px-4 py-2 text-sm z-10`}
                            role="menuitem"
                            id="menu-item-1"
                          >
                            Payment Option
                          </a>
                          <a
                            href="#"
                            className={`${fontfamily} ${fontSize} ${itemsFontColor} text-gray-700 block px-4 py-2 text-sm z-10`}
                            role="menuitem"
                            id="menu-item-2"
                          >
                            Address book
                          </a>
                          <a
                            href="#"
                            className={`${fontfamily} ${fontSize} ${itemsFontColor} text-gray-700 block px-4 py-2 text-sm z-10`}
                            role="menuitem"
                            id="menu-item-3"
                          >
                            Billing help
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  <a
                    href="#"
                    className={`${fontfamily}  ${fontSize} ${fontColor}  ${heightPadding} px-3 text-gray-700 hover:text-gray-900`}
                  >
                    Services & subscriptions
                  </a>
                  <a
                    href="#"
                    className={`${fontfamily}  ${fontSize} ${fontColor}  ${heightPadding} px-3 text-gray-700 hover:text-gray-900`}
                  >
                    Devices
                  </a>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <div className={`${iconHoverColor} inline-block text-left`}>
                  <button
                    className={`pt-2 inline-flex justify-center w-full text-gray-700 hover:bg-gray-50 `}
                    onClick={() => setDrawerOpen(!isDrawerOpen)}
                  >
                    <Icon
                      icon={"bx:bx-question-mark"}
                      fontSize={35}
                      color="#FFFFFF"
                    />
                  </button>

                  {isDrawerOpen && (
                    <div
                      className={`${drawerHeight} ${shadows} mt-1 origin-top-right absolute right-0 w-[320px] bg-dirty-white z-20`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="grid h-full">
                        <div className="h-full">
                          <div className="p-5 grid grid-cols-2 grid-rows-1">
                            <div className="text-xl font-meduim ">Help</div>
                            <div
                              className="col-end-4 cursor-pointer p-1 hover:bg-gray"
                              onClick={() => setDrawerOpen(!isDrawerOpen)}
                            >
                              <Icon
                                icon={"bi:x-lg"}
                                fontSize={17}
                                color="black"
                              />
                            </div>
                          </div>

                          <div className="px-3 pb-5 pt-1 text-sm h-full">
                            <div className="flex pb-2">
                              <div className="cursor-pointer my-4 mr-2">
                                <Icon
                                  icon="bytesize:arrow-left"
                                  inline={true}
                                  fontSize={17}
                                  color="gray"
                                />
                              </div>

                              <div className="cursor-pointer my-4 mr-1">
                                <Icon
                                  icon="clarity:house-line"
                                  inline={true}
                                  fontSize={17}
                                  color="gray"
                                />
                              </div>

                              <div className=" cursor-pointer py-2 relative mx-auto ">
                                <input
                                  className={`${shadows} border-0 bg-white h-8 px-5 pl-10 text-sm focus:outline-none`}
                                  type="search"
                                  name="search"
                                  placeholder="Search help"
                                />

                                <button
                                  type="submit"
                                  className="absolute left-0 top-0 mx-3 my-4"
                                >
                                  <svg
                                    className="text-gray-600 h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    id="Capa_1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 56.966 56.966"
                                    xmlSpace="preserve"
                                    width="512px"
                                    height="512px"
                                  >
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="bg-light mt-2 pb-10 p-4 shadow-lg">
                              <div
                                className={`${fontfamily} text-sm font-semibold `}
                              >
                                Featured Help
                              </div>
                              <p
                                className={`${fontfamily} pt-2 text-sm w-fit font-normal text-dark`}
                              >
                                Select a category to explore popular help
                                topics.
                              </p>
                              <a
                                href="#"
                                className={`${fontfamily} ${fontSize} ${linkColor} block py-2 text-sm z-10`}
                              >
                                Account profile
                              </a>
                              <a
                                href="#"
                                className={`${fontfamily} ${fontSize} ${linkColor} block py-2 text-sm z-10`}
                              >
                                Account security
                              </a>
                              <a
                                href="#"
                                className={`${fontfamily} ${fontSize} ${linkColor} block py-2 text-sm z-10`}
                              >
                                Purchases on your account
                              </a>
                              <a
                                href="#"
                                className={`${fontfamily} ${fontSize} ${linkColor} block py-2 text-sm z-10`}
                              >
                                Subscriptions
                              </a>
                              <a
                                href="#"
                                className={`${fontfamily} ${fontSize} ${linkColor} block py-2 text-sm z-10`}
                              >
                                Devices on your account
                              </a>
                            </div>
                            <div className="flex text-center mt-2">
                              <a
                                href="#"
                                className={`${fontfamily}  ${linkColor} block py-2 pr-1 font-thin text-right pl-20 text-xs z-10`}
                              >
                                Legal
                              </a>
                              <span
                                className={`${fontfamily} block text-left py-2 font-thin text-xs z-10`}
                              >
                                |
                              </span>
                              <a
                                href="#"
                                className={`${fontfamily}  ${linkColor} block py-2 pl-1 font-thin text-left w-full text-xs z-10`}
                              >
                                Privacy & Cookies
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className={`${iconHoverColor} inline-block text-left`}>
                  <button
                    className={`pt-2 text-yellow-900 hover:text-yellow-800 rounded transition duration-300`}
                    onClick={() => setDrawerAccountOpen(!isDrawerAccountOpen)}
                  >
                    <Icon
                      icon={"carbon:user-avatar-filled-alt"}
                      fontSize={35}
                      color="#FFFFFF"
                    />
                  </button>

                  {isDrawerAccountOpen && (
                    <div
                      className={`${shadows} mt-1 h-[241px] w-[320px] text-left grid grid-cols-3 origin-top-right absolute right-0  bg-light z-10`}
                    >
                      <div className={``}>
                        <img
                          src="https://www.freepnglogos.com/uploads/microsoft-logo-4.png"
                          alt="Logo"
                        />
                      </div>
                      <div></div>
                      <div className={` `}>
                        <button
                          onClick={() => _removeSessionToken()}
                          className={`${fontfamily} ${fontSize} font-normal block p-4 pl-6 text-sm hover:bg-light-gray`}
                        >
                          Sign Out
                        </button>
                      </div>

                      <div>
                        <img
                          src={
                            "https://partneruniversity.microsoft.com/content/images/microsoft-img.png"
                          }
                          className="rounded-[50%] border-none  object-scale-down h-30 p-3"
                          alt="Profile Picture"
                        />
                      </div>
                      <div className="col-span-2 p-5">
                        <p className="text-md font-semibold truncate">
                          {isTokenVerifyLoading
                            ? "Loading..."
                            : `Hello ${loggedInName}!`}
                        </p>
                        <p
                          className={`${fontfamily} font-light text-sm w-fit text-dark`}
                        >
                          paulwilfred@outlook.ph
                        </p>
                        <a
                          href="#"
                          className={`${fontfamily} font-light text-sm w-fit  ${linkColor} block z-10`}
                        >
                          My Microsoft account
                        </a>
                      </div>

                      <div className="flex col-span-3 bg-dirty-white 15 pt-3 pl-3">
                        <Icon
                          icon={"carbon:user-avatar-filled-alt"}
                          fontSize={40}
                          color="gray"
                        />
                        <p
                          className={`${fontfamily} font-base text-xs w-fit p-2 text-dark`}
                        >
                          Sign in with different account
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:hidden flex items-center">
                <button className="mobile-menu-button">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffff"
                    viewBox="0 0 24 24"
                    stroke="#ffff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mobile-menu hidden md:hidden">
            <a href="#" className="block py-2 px-2 text-sm hover:bg-gray-200">
              Your Info
            </a>
            <a href="#" className="block py-2 px-2 text-sm hover:bg-gray-200">
              Privacy
            </a>
            <a href="#" className="block py-2 px-2 text-sm hover:bg-gray-200">
              Security
            </a>
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full px-2 py-2 font-medium text-gray-700 hover:bg-gray-50 "
              >
                Payment & billing
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <a href="#" className="block py-2 px-2 text-sm hover:bg-gray-200">
              Service & Subscriptions
            </a>
            <a href="#" className="block py-2 px-2 text-sm hover:bg-gray-200">
              Devices
            </a>
          </div>
        </nav>
      </button>
    </>
  );
}

const mapStateToProps = (global: any) => ({
  email: global.authenticatedUser.user.email,
});

export default connect(mapStateToProps, { setAuthenticatedUser })(NavBar);
