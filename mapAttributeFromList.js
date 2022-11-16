// Get all elements from a list in UI

// Example:
// we need all public key from this page https://objkt.com/collection/KT1SiWsWp3JDDCkTaDZBkVahAxRQj1djX5Eg
// get div list element
let divList = document.querySelector(
  "body > app-root > div.frow-container.full-width.main > div > app-collection > div > app-collaborator-list-modal > app-modal > div.modal-component.frow.centered.text-left.visible > div > div > div",
);

// get all children and convert to array
let nodeList = divList.children;
var elements = Array.from(xd);

// extrat for each element the firstElementChild.href attribute
elements.map((x) => {
  console.log(x.firstElementChild.href);
});
// after this print we can copy the output and put it in vscode to extract key element

// NOTES:
// for a node implementation see https://github.com/taoqf/node-html-parser
// to copy element using navigator https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
// to load in node the element https://stackoverflow.com/questions/10691464/is-it-possible-to-read-another-urls-dom-structure
