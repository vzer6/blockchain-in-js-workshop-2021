const crypto = require('crypto');

// 生成叶子节点数组
function createLeafNodes(dataArray) {
  return dataArray.map((data) => {
    return crypto.createHash('sha256').update(data.toString()).digest('hex');
  });
}

// 构建树
function buildTree(nodes) {
  if (nodes.length === 1) {
    return nodes[0];
  }

  let parentNodes = [];

  for (let i = 0; i < nodes.length; i += 2) {
    let left = nodes[i];
    let right = i + 1 === nodes.length ? left : nodes[i + 1];
    let parent = crypto.createHash('sha256').update(left + right).digest('hex');
    parentNodes.push(parent);
  }

  return buildTree(parentNodes);
}

// 获取默克尔树根节点
function getMerkleRoot(dataArray) {
  const leafNodes = createLeafNodes(dataArray);
  return buildTree(leafNodes);
}

// 测试
const dataArray = ["hello", "world", "this", "is", "a", "test"];

console.log("Data array:", dataArray);

const merkleRoot = getMerkleRoot(dataArray);

console.log("Merkle root:", merkleRoot);
