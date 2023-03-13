const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const files = fs.readdirSync(path.resolve(__dirname, "light"));

const EXIST_ICONS = [];
let scss = "";
files.forEach((filename) => {
  const [name] = filename.split(".");
  EXIST_ICONS.push(`"${name}"`);
  scss =
    scss +
    `
  .${name} {
    background-image: url(~./imgs/light/${name}.png);
  }
  :global(body.dark-theme) {
    .${name} {
      background-image: url(~./imgs/dark/${name}.png);
    }
  }
  `;
});

fs.writeFileSync(
  "../EXIST_ICON.js",
  `
  export const EXIST_ICON = [${EXIST_ICONS.toString()}]
`
);
exec(`npx eslint --ext .js --fix ../EXIST_ICON.js`);

fs.writeFileSync("../icon.module.scss", scss);
exec(`npx eslint --ext .js --fix ../EXIST_ICON.js`);
