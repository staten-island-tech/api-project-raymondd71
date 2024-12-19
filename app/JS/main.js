import "../style.css";

let data = [];
let datas = [];

async function getData() {
  try {
    const response = await fetch("https://valorant-api.com/v1/weapons");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      data = await response.json();
      console.log(data);
      const weapons = data.data;
      createCards(weapons);
    }
  } catch (error) {
    console.log(error);
    alert("something went wrong :(");
  }
}
getData();

function createCards(data) {
  document.querySelector(".box").innerHTML = "";
  data.forEach((thing) =>
    document.querySelector(".box").insertAdjacentHTML(
      "beforeend",
      `<div class="card w-[21%] h-[16rem] border-[5px] border-black flex flex-col items-center justify-around mb-[5%] text-center [@media(max-width:800px)]:w-[33%] [@media(max-width:550px)]:w-[50%]">
      <h1>${thing.displayName} </h1>
       <img class= "w-auto h-[200px] object-contain" src="${thing.displayIcon}" alt="${thing.displayIcon}" ></div>`
    )
  );
}

document.getElementById("showall").addEventListener("click", () => {
  document.querySelector(".box").innerHTML = "";
  createCards(data.data);
  console.log(data.data);
});

async function secondarySort() {
  document
    .getElementById("secondary")
    .addEventListener("click", async function (event) {
      event.preventDefault();

      try {
        const response = await fetch("https://valorant-api.com/v1/weapons");
        if (response.status != 200) {
          throw new Error(response);
        } else {
          const data = await response.json();
          const weapons = data.data.filter(
            (thing) => thing.shopData && thing.shopData.category === "Pistols"
          );

          createCards(weapons);
        }
      } catch (error) {
        console.log(error);
        alert("sorry");
      }
    });
}
secondarySort();

async function riflesSort() {
  document
    .getElementById("rifleButton")
    .addEventListener("click", async function (event) {
      event.preventDefault();

      try {
        const response = await fetch("https://valorant-api.com/v1/weapons");
        if (response.status != 200) {
          throw new Error(response);
        } else {
          const data = await response.json();
          const weapons = data.data.filter(
            (thing) => thing.shopData && thing.shopData.category === "Rifles"
          );

          createCards(weapons);
        }
      } catch (error) {
        console.log(error);
        alert("Sorry,unable to find the weapon");
      }
    });
}
riflesSort();

async function heavySort() {
  document
    .getElementById("heavyButton")
    .addEventListener("click", async function (event) {
      event.preventDefault();

      try {
        const response = await fetch("https://valorant-api.com/v1/weapons");
        if (response.status != 200) {
          throw new Error(response);
        } else {
          const data = await response.json();
          const weapons = data.data.filter(
            (thing) =>
              thing.shopData && thing.shopData.category === "Heavy Weapons"
          );

          createCards(weapons);
        }
      } catch (error) {
        console.log(error);
        alert("Sorry,unable to find the weapon");
      }
    });
}
heavySort();

async function smgSort() {
  document
    .getElementById("smgButton")
    .addEventListener("click", async function (event) {
      event.preventDefault();

      try {
        const response = await fetch("https://valorant-api.com/v1/weapons");
        if (response.status != 200) {
          throw new Error(response);
        } else {
          const data = await response.json();
          const weapons = data.data.filter(
            (thing) => thing.shopData && thing.shopData.category === "SMGs"
          );

          createCards(weapons);
        }
      } catch (error) {
        console.log(error);
        alert("Sorry,unable to find the weapon");
      }
    });
}
smgSort();

async function getStuffs() {
  try {
    const response = await fetch("https://valorant-api.com/v1/bundles");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      datas = await response.json();
      console.log(datas);
      const bundles = datas.data;
    }
  } catch (error) {
    console.log(error);
    alert("something went wrong :(");
  }
}
getStuffs();

document.getElementById("showBundles").addEventListener("click", () => {
  document.querySelector(".box").innerHTML = "";
  createCards(datas.data);
  console.log(datas.data);
});

// document.addEventListener("click", () => {
//   document.getElementById("rifleButton").addEventListener("click", () => {
//     const weaponRifle = data.data.filter(
//       (thing) => thing.shopData && thing.shopData.category === "Rifles"
//     );
//     document.querySelector(".box").innerHTML = "";
//     createCards(weaponRifle);
//     console.log(weaponRifle);
//   });
// });

// document.querySelector("#rifleButton").addEventListener("click", () => {
//   const weaponRifle = data.data.filter(
//     (thing) =>
//     thing.shopData && thing.shopData.cataegory === "Rifle") {
//       weaponRifle.push(thing);
//     }
//   );
//   document.querySelector(".box").innerHTML = "";
//   displayAgents(weaponRifle);
// });
// // async function getData(){
//   data.forEach((x)=>{});
//   createCards(data);
// } catch (error){
//   console.group(error);
//   alert("sorry")
// }
//<h2> Fire Rate: ${thing.weaponStats.fireRate}</h2>

// import "../style.css";

// let data = [];

// async function getData() {
//   try {
//     const response = await fetch("https://valorant-api.com/v1/weapons");
//     if (response.status !== 200) {
//       throw new Error(response.statusText);
//     } else {
//       data = await response.json();
//       console.log(data); // Print data to the console
//       const weapons = data.data;
//       createCards(weapons);
//     }
//   } catch (error) {
//     console.log(error);
//     alert("something went wrong :(");
//   }
// }

// getData();

// function createCards(weapons) {
//   weapons.forEach((weapon) =>
//     document.querySelector(".box").insertAdjacentHTML(
//       "beforeend",
//       `<div class="card w-[21%] h-[16rem] border-[5px] border-black flex flex-col items-center justify-around mb-[5%] text-center">
//       <h1>${weapon.displayName}</h1>
//        <img class="w-auto h-[200px] object-contain" src="${weapon.displayIcon}" alt="${weapon.displayIcon}"></div>`
//     )
//   );
// }

// document.addEventListener("click", () => {
//   document.getElementById("rifleButton").addEventListener("click", () => {
//     const weaponRifle = data.data.filter(
//       (weapon) => weapon.shopData && weapon.shopData.category === "Rifles"
//     );
//     document.querySelector(".box").innerHTML = "";
//     createCards(weaponRifle);
//     console.log(weaponRifle); // Print filtered rifles to the console
//   });
// });
// document.addEventListener("click", () => {
//   document.getElementById("heavyButton").addEventListener("click", () => {
//     const weaponHeavy = data.data.filter(
//       (weapon) =>
//         weapon.shopData && weapon.shopData.category === "Heavy Weapons"
//     );
//     document.querySelector(".box").innerHTML = "";
//     createCards(weaponHeavy);
//     console.log(weaponHeavy); // Print filtered rifles to the console
//   });
// });
