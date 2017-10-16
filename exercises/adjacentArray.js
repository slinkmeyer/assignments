let newArray = ["slinkmeyer", "meows", "purrs", "runs"];
for (i = 0; i < newArray.length; i++) {
  while (newArray.reduce(function (a, b) {
    return a > b ? a : b;
  });
console.log(newArray)
}
