import camelCase from "lodash/camelCase";

const requireModule = require.context(".", true, /^((?!\.unit\.).)*\.json$/);
const root = {};

requireModule.keys().forEach(fileName => {
  if (fileName === "./index.js") return;

  const modulePath = fileName
    .replace(/^\.\//, "")
    .replace(/\.\w+$/, "")
    .split(/\//)
    .map(camelCase);

  const messages = getNamespace(root, modulePath);

  messages[modulePath.pop()] = { ...requireModule(fileName) };

  function getNamespace(subtree, path) {
    if (path.length === 1) return subtree;
    const namespace = path.shift();
    return getNamespace(subtree[namespace], path);
  }
});

export default root;
