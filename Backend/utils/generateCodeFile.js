const path = require("path");
const fs = require("fs");
const date = require("date-and-time");
const { basePath } = require("../basePath.js");

const dirCodeFiles = path.join(
  path.join(basePath(), "UsersCodes"),
  "codeFiles"
);

if (!fs.existsSync(dirCodeFiles)) {
  fs.mkdirSync(dirCodeFiles, { recursive: true });
}

const generateCodeFile = async (lang, content, input, username) => {
  const userDir = path.join(dirCodeFiles, `${username}`);
  if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir, { recursive: true });
  }
  var now = new Date();
  now = date.format(now, "DD_MM_YYYY__HH_mm_ss");

  const codeFileName = `${username}_${now.toString()}.${lang}`;
  const codeFilePath = path.join(userDir, codeFileName);
  fs.writeFileSync(codeFilePath, content);

  const inFileName = `${codeFileName.split(".")[0]}.txt`;
  const inPath = path.join(userDir, inFileName);
  if (input) {
    fs.writeFileSync(inPath, input);
  }
  return { codeFilePath, inPath };
};

module.exports = { generateCodeFile };
