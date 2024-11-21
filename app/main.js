import "./style.css";
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
    alert("sorry could not find that weapon");
  }
}
getData();

function createCards(data) {
  data.forEach((thing) =>
    document.querySelector(".box").insertAdjacentHTML(
      "beforeend",
      `<div class="card h-[50rem] w-[21%] min-w-[30rem] border-2 border-black rounded-[25px] flex flex-col items-center justify-around mb-[5%] bg-[rgba(211,211,211,0.5)] shadow-[5px_5px_5px_gray]">
      <h1>${thing.displayName}</h1>
       <img src="displayIcon" alt=""></div>`
    )
  );
}
console.log(getData());

// async function getData(){
//   data.forEach((x)=>{});
//   createCards(data);
// } catch (error){
//   console.group(error);
//   alert("sorry")
// }
