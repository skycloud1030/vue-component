export function beforeEnter(to, from, next) {
  const isLogin = localStorage.getItem("account") != null;
  if (isLogin) {
    next();
  } else {
    if (to.path !== "/login") next("/login");
    else next();
  }
}
