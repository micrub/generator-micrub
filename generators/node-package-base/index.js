const Generator = require("yeoman-generator");
const d = require("debug")(__filename);

class NodePackageBase extends Generator {
  constructor() {
    super();
    d("Starting `NodePackageBase`");
  }

  writing() {
    const copyList = ["_gitignore"];
    const templateList = ["package.json"];
    this.handleCopy(copyList);
    this.handleTemplates(templateList);
  }

  handleTemplates(templateList) {
    for (let index = 0; index < templateList.length; index++) {
      const copyPathFrom = templateList[index];
      const copyPathTo = copyPathFrom;

      this.fs.copyTpl(
        this.templatePath(copyPathFrom),
        this.destinationPath(copyPathTo),
        { ...this.props }
      );
    }
  }

  handleCopy(copyList) {
    for (let index = 0; index < copyList.length; index++) {
      let copyPathFrom = copyList[index];
      let copyPathTo = copyPathFrom;

      // Handle _ prefix
      if (copyPathFrom.charAt(0) === "_") {
        copyPathTo = copyPathFrom.replace("_", ".");
      }

      this.fs.copy(
        this.templatePath(copyPathFrom),
        this.destinationPath(copyPathTo)
      );
    }
  }
}
module.exports = NodePackageBase;
