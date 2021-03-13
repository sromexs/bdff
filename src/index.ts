import fs from "fs";

const mkdir = (dirnames: string | string[]) => {
  if (typeof dirnames === "string") {
    dirnames = [dirnames];
  }

  for (const dir of dirnames) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }
};

type TFile = {
  name: string;
  data: string | NodeJS.ArrayBufferView;
};

const writeFile = (files: TFile | TFile[]) => {
  if (!Array.isArray(files)) {
    files = [files];
  }

  for (const file of files) {
    if (!fs.existsSync(file.name)) {
      fs.writeFileSync(file.name, file.data);
    }
  }
};

export default { writeFile, mkdir };
