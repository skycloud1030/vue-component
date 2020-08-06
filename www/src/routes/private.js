export function beforeEnter(to, from, next) {
  const isLogin = localStorage.getItem("username") != null;
  if (isLogin) {
    next();
  } else {
    if (to.path !== "/login") next("/login");
    else next();
  }
}
