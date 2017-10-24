function daysAgo(n){
  let today = new Date();
  toda.setDate(today.getDate() - n)
  console.log(today.toDateString());
}

daysAgo(10000000)
