"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the groovy ${chalk.red(
          "generator-micrub"
        )} tiddlywiki generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
      {
        type: "input",
        name: "author",
        message: "Author's full name",
        default: "Anonymous"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const copyList = ["_mocharc.js", "_gitignore", "wiki-content"];
    const templateList = ["package.json"];
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
};
