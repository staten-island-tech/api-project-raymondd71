import "./style.css";
async function getData() {
  try {
    const response = await fetch("https://valorant-api.com/v1/weapons");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    alert("sorry could not find that weapon");
  }
}

function createCards(data) {
  data.forEach((thing) =>
    document.querySelector(".container").insertAdjacentHTML(
      "beforeend",
      `<div class= "card item-center">
      <h1>:${thing["displayName"]}</h1>
      </div>`
    )
  );
}

getData();
createCards();
// async function getData(){
//   data.forEach((x)=>{});
//   createCards(data);
// } catch (error){
//   console.group(error);
//   alert("sorry")
// }
