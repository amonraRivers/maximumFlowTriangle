// get the flow from 1 minimum triangle

function getMaximumNodeFlow(cell, children) {
  return cell + Math.max(...children);
}
function getNodeChildren(triangle, row, column) {
  let children = [];
  let childrensRow = row + 1;
  if (childrensRow < triangle.length) {
    //left
    if (column > 0 && column - 1 < triangle[childrensRow].length) {
      let leftChild = triangle[childrensRow][column - 1];
      if (leftChild) {
        children.push(leftChild);
      }
    } else {
      children.push(0);
    }
    //center
    if (column >= 0 && column < triangle[childrensRow].length) {
      let centerChild = triangle[childrensRow][column];
      if (centerChild) {
        children.push(centerChild);
      }
    } else {
      children.push(0);
    }
    if (column >= 0 && column + 1 < triangle[childrensRow].length) {
      let rightChild = triangle[childrensRow][column + 1];
      if (rightChild) {
        children.push(rightChild);
      }
    } else {
      children.push(0);
    }
  } else {
    children = [0, 0, 0];
  }
  return children;
}
function getRowMaximumFlows(triangle, row) {
  let rowMaxFlows = [];
  if (row < triangle.length) {
    triangle[row].forEach((node, column) => {
      let nodeChildren = getNodeChildren(triangle, row, column);
      let nodeMaxFlow = getMaximumNodeFlow(triangle[row][column], nodeChildren);
      rowMaxFlows.push(nodeMaxFlow);
    });
  }
  return rowMaxFlows;
}

function arrayOfArrays(arr) {
  let isArrayOfArrays = true;
  if (Array.isArray(arr) && arr.length > 0) {
    arr.forEach((element) => {
      if (!Array.isArray(element)) {
        isArrayOfArrays = false;
      }
    });
  } else {
    isArrayOfArrays = false;
  }
  return isArrayOfArrays;
}

function getMaximumFlow(triangle) {
  if (arrayOfArrays(triangle)) {
    for (let row = triangle.length - 1; row >= 0; row--) {
      let currentRow = triangle[row];
      triangle[row] = getRowMaximumFlows(triangle, row);
    }
    return triangle[0][0];
  }
  return null;
}

module.exports = { getMaximumFlow };
