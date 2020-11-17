const fileUtils = require("./fileUtils");
const { getMaximumFlow } = require("./maximumFlow");

async function main() {
  let triangle = [];
  try {
    triangle = await fileUtils.getTriangleMaster();
  } catch (e) {
    console.log(e);
  }
  console.log(getMaximumFlow(triangle));
}
main();
