const fs = require("fs");
function getData(fileName, type = "utf8") {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

function transformTriangleData(str) {
  let arrs = str.split("\n");
  let triangle = arrs.map((element) => {
    return element.split(" ").map((e) => Number.parseInt(e));
  });
  return triangle;
}

async function getTriangleMaster() {
  let triangle = [];
  letTriangleData = "";
  try {
    triangleData = await getData("./triangulo.txt");
    triangle = transformTriangleData(triangleData);
  } catch (e) {}

  return triangle;
}

module.exports = { getTriangleMaster };
