const contentChat = document.querySelector(".container__message");

const readMessages = async(id) => {
  try {
    const res = await axios.get(`http://localhost:3000/messages/${id}`)
    const info = res.data 
    if (res.status === 200){
      console.log(info)
      

  }} catch (error) {
    console.log(error)
  }
}

export default readMessages;