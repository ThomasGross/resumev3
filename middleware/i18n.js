export default function({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale;

  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return;
  }
  // Get locale from params
  const locale = params.lang || defaultLocale;

  console.log(route);

  if (!store.state.locales.includes(locale)) {
    return error({ message: "This page could not be found.", statusCode: 404 });
  }
  // Set locale
  store.commit("SET_LANG", locale);
  app.i18n.locale = store.state.locale;
  // If route is /<defaultLocale>/... -> redirect to /...

  if (
    locale !== defaultLocale &&
    route.fullPath.indexOf("/" + defaultLocale) === 0
  ) {
    const toReplace =
      "^/" +
      defaultLocale +
      (route.fullPath.indexOf("/" + defaultLocale + "/") === 0 ? "/" : "");
    const re = new RegExp(toReplace);

    return redirect(route.fullPath.replace(re, "/"));
  }
}

// //middleware/i18n.js
// export default function({ isHMR, app, store, route, params, error, redirect }) {
//   const defaultLocale = app.i18n.fallbackLocale;
//   // If middleware is called from hot module replacement, ignore it
//   if (isHMR) return;
//   const locale = route.query.lang || defaultLocale;
//   if (store.state.locales.indexOf(locale) === -1) {
//     return error({ message: "This page could not be found.", statusCode: 404 });
//   }
//   //Mutate the store's locale once we understand which locale is being requested prior to each page render
//   store.commit("SET_LANG", locale);
//   // Set locale from the query string '?lang='**''
//   app.i18n.locale = store.state.locale;
// }

// export default function({
//   isHMR,
//   app,
//   store,
//   route,
//   params,
//   req,
//   error,
//   redirect
// }) {
//   if (isHMR) return;

//   if (req) {
//     if (route.name) {
//       let locale = req.headers["accept-language"]
//         .split(",")[0]
//         .toLocaleLowerCase()
//         .substring(0, 2);

//       if (locale === "en") {
//         // In my case I just care about English or German but of course that line should be a condition to detect if the locale is part of the locales array in the configuration
//         app.i18n.locale = locale;

//         if (
//           params &&
//           Object.keys(params).length === 0 &&
//           params.constructor === Object
//         ) {
//           redirect(app.localePath(app.getRouteBaseName()));
//         } else {
//           redirect(
//             app.localePath({ name: app.getRouteBaseName(), params: params })
//           );
//         }
//       }
//     }
//   }
// }
