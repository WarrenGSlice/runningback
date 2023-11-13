/** @type {import('tailwindcss').Config} */
export const content = [
  "./node_modules/flowbite/**/*.js",
  "./src/**/*.{html,js}"
];
export const theme = {
  extend: {},
};
export const plugins = [
  require('flowbite/plugin')
];

