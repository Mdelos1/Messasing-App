const chats = document.querySelector(".barraDeChats");
const search = document.querySelector(".buscadorPrincipal");
const button = search.querySelector("button");

document.addEventListener("DOMContentLoaded", () => {
  conponent()
})

const conponent = async() => {
  try {
    const res = await axios.get("http://localhost:3000/usersChat")
    if (res.status === 200){
      // console.log(res.data)
      let reponseInner = ``
      res.data?.map(chat => {
        reponseInner += `
          <div class="chat" id="${chat.id}" onclick="messages(${chat.id})">
            <div class="chat__content--img">
              <div class="chat__img" style="background-image: url(${chat.img})"></div>
            </div>
            <div class="chat__name">
              <h2>${chat.name}</h2>
              <hr />
            </div>
          </div>
        `
        chats.innerHTML = reponseInner
      })
  }} catch (error) {
    console.log(error)
  }
}

const messages = async(id) => {
  try {
    const res = await axios.get(`http://localhost:3000/messages/${id}`)
    const info = res.data 
    if (res.status === 200){
        console.log(info.messages)
        const contentChat = document.querySelector(".container__message")
        
        const myMessage = contentChat?.querySelector(".myMessage")
        const othersMessage = contentChat.querySelector(".othersMessage")
        
        const message1 = info.messages[0].message1
        const message2 = info.messages[1].message2
        message1?.map(e => {
          console.log(e)
          myMessage.innerHTML = `
            <p>
              ${e}
            </p>
          `
        })
        message2?.map(e => {
          console.log(e)
          othersMessage.innerHTML = `
            <p>
              ${e}
            </p>
          `
        })
        // })
  }} catch (error) {
    console.log(error)
  }
}



// const idChat = document.querySelector(".barraDeChats")
// console.log(idChat.children)
// button?.addEventListener("click", () => {
//   e.preventDefault()
//   const j = search.querySelector("input")
// })
















// const { default: axios } = require("axios");




// // document.addEventListener("DOMContentLoaded", () => {
  
// // })
// axios.get("http://localhost:3000/usersChat")
// axios
// const jsonChat = () => {
//   try {
//     console.log(date)
//     date?.map(chat => {
//       chats.innerHTML += `
//         <div class="chat">
//           <div class="chat__content--img">
//             <div class="chat__img" style="background-image: url(${chat.img})"></div>
//           </div>
//           <div class="chat__name">
//             <h2>${chat.name}</h2>
//             <hr />
//           </div>
//         </div>
//       `
    
//     })
//   }catch (error) {
//     console.log(error)
//   }
// }

// jsonChat()

// // chats.addEventListener("DOMContentLoaded", jsonChat)
// // const component = (res) => {

// //     })
// //   }
// //   component()
// // console.log(search)











