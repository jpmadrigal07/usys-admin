function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

// ----------------------------------------------------------------------
const ROOT_LOGIN = "/";
const ROOT_MODULE = "/module";
const ROOT_SETTINGS = "/settings";
const ROOT_STUDENT_TYPE = "/student-type";
// ----------------------------------------------------------------------
const ADD_PAGE = "/add";
// ----------------------------------------------------------------------

export const PATH_PAGE = {
  login: ROOT_LOGIN,
};

export const PATH_MODULE = {
  root: ROOT_MODULE,
  settings: {
    root: path(ROOT_MODULE, ROOT_SETTINGS),
    studentType: {
      root: path(ROOT_MODULE, `${ROOT_SETTINGS}${ROOT_STUDENT_TYPE}`),
      add: path(ROOT_MODULE, `${ROOT_SETTINGS}${ROOT_STUDENT_TYPE}${ADD_PAGE}`),
    },
  },
};
