const { d } = require("./utils");

function dispatchMain() {
  (async () => {
    d("before main() start");
    // Const p = await dispatchAsyncFunk(url);
    d("after main() start");
  })();

  process.on("unhandledRejection", error => {
    // Will print "unhandledRejection err is not defined"
    console.log("unhandledRejection", error.message);
    process.exit(1);
  });
}

module.exports = {
  dispatchMain
};
