const contentInput = document.querySelector(".principal_chat");

const sendMessages = (id) => {
  const btn = contentInput.querySelector("button");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const input = contentInput.querySelector("form input");
    const mens = input.value;
    // const numRandom = Math.floor(Math.random() * 1000)
    let enviarMensaje = {
        "id": 1,
        "idUser1": 2,
        "idUser2": 2,
        "message": [
          {
            "senBy": 4,
            "date": "01/10/2022",
            "hour": "10:00 am",
            "message": `${mens}`,
            "flag": "no visto"
          }
        ]
      }
    axios.post(`http://localhost:3000/messages/${id}`, enviarMensaje);
  });
};

export default sendMessages;