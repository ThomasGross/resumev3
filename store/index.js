export const state = () => ({
  locales: ["en", "da"],
  locale: "en",
  colorsModes: ["dark", "light"],
  activeColorMode: "dark"
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
  SET_COLOR_MODE(state, activeColorMode) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  }
};
