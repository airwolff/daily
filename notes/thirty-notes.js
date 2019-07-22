function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    // dataset.potato will return what is in the html for data-potato eg data-potato="px" (-potato can be anything). for above '' is for nothing so we don't get undefined
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // this.name and this.value returns name="potato" and value attribute from html
  console.log(this.dataset);
}



const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
];

// filter iterates over each object in inventors array and runs callback function on it
const fifteen = inventors.filter(function(inventor) {
  if(inventor.year >= 1500 && inventor.year <= 1599) {
    return true;
  }
});
console.table(fifteen);