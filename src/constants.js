const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500
};

const QUERIES = {
  tabletAndUp: `@media(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `@media(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `@media(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`
};

export { BREAKPOINTS, QUERIES };
