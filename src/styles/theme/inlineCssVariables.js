import { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from './colors';

export function setColorTheme() {
  const colors = '😍';
  const cssColorMode = '😂';
  const initialColorModeProp = '👌';

  const mql = window.matchMedia('(prefers-color-scheme : dark)');
  const prefersDarkModeFromMQ = mql.matches;
  const preferredPreference = localStorage.getItem(cssColorMode);

  let colorMode = 'light';
  const hasUsedToggle = typeof preferredPreference === 'string';

  if (hasUsedToggle) {
    colorMode = preferredPreference;
  } else {
    colorMode = prefersDarkModeFromMQ ? 'dark' : 'light';
  }

  const root = document.documentElement;
  root.style.setProperty(initialColorModeProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;
    const colorValue =
      typeof colorByTheme === 'object' ? colorByTheme[colorMode] : colorByTheme;
    root.style.setProperty(cssVarName, colorValue);
  });
}

export function MagicSciptTag() {
  const boundFn = String(setColorTheme)
    .replace("'😍'", JSON.stringify(COLORS))
    .replace('😂', COLOR_MODE_KEY)
    .replace('👌', INITIAL_COLOR_MODE_CSS_PROP);
  const calledFn = `(${boundFn})()`;

  return <script dangerouslySetInnerHTML={{ __html: calledFn }} />;
}

export function FallBackStyles() {
  const cssVariableString = Object.entries(COLORS)
    .map(([name, value]) => {
      const color = typeof value === 'object' ? value.light : value;
      return `--${name}: ${color};`;
    })
    .join('\n');

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
}
