// ASYNC BASICS EXERCISE
// 1
let name1 = "Falcon";

function falconName() {
  console.log(`Question 1`);
  console.log(name1);
}

// function falcon(n) {
//   setTimeout(() => {
//     name1 = n;
//   }, 1000);
// }
// falcon(`Sam Wilson`);
// falconName();


function falcon(n, callback) {
  setTimeout(() => {
    name1 = n;
    callback();
  }, 1000);
}
falcon(`Sam Wilson`, falconName);


// 2
let name2 = "Winter Soldier";

function winterSoldierName() {
  console.log(`Question 2`);
  console.log(name2);
}

// function winterSoldier(n) {
//   setTimeout(() => {
//     name2 = n;
//   }, 2000);
// }
// winterSoldier(`Bucky Barnes`);
// winterSoldierName();

function winterSoldier(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      name2 = n;
      resolve();
    }, 2000);
  });
}

winterSoldier(`Bucky Barnes`)
  .then(winterSoldierName);

// 3
let name3 = "Agent 13";

function agent13Name() {
  console.log(`Question 3`);
  console.log(name3);
}

function agent13(n){
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      name3 = n;
      resolve()
    }, 3000)
  });
}

async function agent13Name() {
await agent13('Sharon Carter');
console.log(`question 3`);
console.log(name3);
}
agent13Name();


Promise.all([p1, p2, p3])
.then(values => {
  console.log(values);
})
