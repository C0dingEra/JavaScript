//sets -->store unique value

// const set1=new Set();
// set1.add(4);
// set1.add(41);
// set1.add("Akash");
// set1.add("Akash");
// console.log(set1);

// const set1=new Set([4,5,"Akash",5]);
// console.log(set1);

// console.log(set1.size);
// console.log(typeof set1)

//methods
// 1)add
// const set1=new Set();
// set1.add(5)
// set1.add(51)
// set1.add("Akash")
// console.log(set1);

// 2) clear
// set1.clear()
// console.log(set1);

// 3)delete
// set1.delete("Akash");
// console.log(set1)

// 4)union
const set1=new Set([4,8,9,"Akash"])
const set2=new Set([4,7,91,"Akash"])
// console.log(set1.union(set2));

// 5)intersection

// console.log(set1.intersection(set2));

// 6)difference
console.log(set1.difference(set2));
