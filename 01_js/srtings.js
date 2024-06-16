let one = "  my name is swami"
console.log(one);
console.log(one.length);
console.log(one.toLocaleUpperCase());
console.log(one.charAt(3));
console.log(one.charCodeAt(5));
console.log(one.at(5));
console.log(one[2]);

console.log(one.trimStart());
console.log(one.slice(2,6));
console.log(one.slice(2));
console.log(one.slice(6));

two = one.trim().replace("swami","worrier")
console.log(two);
console.log(one.substring(6,8));

ok = "this is just text"
console.log(one.concat(" ",ok));

console.log(one.padStart(7,"0"));




let ten = "      this is my    first     and  last opition    "
console.log(ten.trim());