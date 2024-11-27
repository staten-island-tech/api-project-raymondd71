import "../style.css";
async function getData() {
  try {
    const response = await fetch("https://valorant-api.com/v1/weapons");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
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
  data.forEach((thing) =>
    document.querySelector(".box").insertAdjacentHTML(
      "beforeend",
      `<div class="card w-[21%] h-[16rem] border-[5px] border-black flex flex-col items-center justify-around mb-[5%] text-center ">
      <h1>${thing.displayName} </h1>
       <img class= "w-auto h-[200px] object-contain" src="${thing.displayIcon}" alt="${thing.displayIcon}" ></div>`
    )
  );
}
document.querySelector("#rifle").addEventListener("click", async () => {
  const rifleWeapons = data.filter(
    (data) => weapon.shopData && weapon.shopData.category === "Rifle"
  );
});
// async function getData(){
//   data.forEach((x)=>{});
//   createCards(data);
// } catch (error){
//   console.group(error);
//   alert("sorry")
// }
//<h2> Fire Rate: ${thing.weaponStats.fireRate}</h2>
