// import axios from "axios.js";
import readMessages from "./sendMessages.js";
import sendMessages from "./readMessages.js";
const chats = document.querySelector(".barraDeChats");
const contentInput = document.querySelector(".principal_chat");

const chatBar = async () => {
  console.log("jaja si funciona")
  try {
    const res = await axios.get("http://localhost:3000/usersChat");
    if (res.status === 200) {
      let reponseInner = ``;
      res.data?.map((chat) => {
        reponseInner += `
          <div class="chat ${chat.id}" id="num-${chat.id}">
            <div class="chat__content--img">
              <div class="chat__img" style="background-image: url(${
                chat.img
              })"></div>
            </div>
            <div class="chat__name">
              <h2>${chat.name}</h2>
              <hr />        
            </div>
          </div>
          `;
        chats.innerHTML = reponseInner;
      });      
      let arrayDeNums = []
      chats.addEventListener("click", (e) => {
        const inputEnviar = contentInput.querySelector("#form input")
        if(e.path[1].classList[0] !== "chat__name"){
          let num1Id = Number(e.path[1].classList[1])
          arrayDeNums.unshift(num1Id)
          readMessages(num1Id)
        }else{
          let num2Id = Number(e.path[2].classList[1])
          arrayDeNums.unshift(num2Id)
          readMessages(num2Id)
        }
        inputEnviar.addEventListener("focus", (e) => {
          sendMessages(arrayDeNums[0])
        })
      })
     
    }
  } catch (error) {
    console.log(error);
  }
};

export default chatBar;