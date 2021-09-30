import setup from "./global-setup";
import teardown from "./global-teardown";

exports.mochaGlobalSetup = async () => {
  await setup();
};

exports.mochaGlobalTeardown = async () => {
  await teardown();
};
