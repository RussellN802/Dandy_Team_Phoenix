console.log("js running!!");

const button = document.getElementById("submit");
const email = document.getElementById("email");

button.addEventListener("click", function(){
  const data = email.value;
  console.log(data);
  });
//  we would actually append this to a file here
