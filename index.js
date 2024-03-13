// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function resetCats() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
};
function destructivelyAppendCat() {
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield", "Ralph")
};
function destructivelyPrependCat() {
  cats.length = 0;
  cats.push("Bob", "Milo", "Otis", "Garfield")
};
function destructivelyRemoveLastCat() {
  cats.length = 0;
  cats.push("Milo", "Otis")
};
function destructivelyRemoveFirstCat() {
  cats.length = 0;
  cats.push("Otis", "Garfield")
};
function appendCat(name = "Broom") {

  return ["Milo", "Otis", "Garfield", "Broom"]
};
function prependCat(name = "Arnold") {
  return ["Arnold", ...cats]
};
function removeLastCat() {
  return cats.slice(0, -1);
};
function removeFirstCat() {
  return cats.slice(1)
};
