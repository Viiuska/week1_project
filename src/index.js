//help:https://www.youtube.com/watch?v=WBCpJmzrDmM
if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting");
    initializeCode();
  });
}

function initializeCode() {
  //help:https://www.howtocodeschool.com/2022/02/change-heading-text-in-javascript.html
  const btn = document.getElementById("my-button");
  var title = document.getElementById("title");

  btn.addEventListener("click", function () {
    console.log("hello world");
    title.textContent = "My notebook";
  });

  const addbutton = document.getElementById("add-data");
  let datalist = document.getElementById("data");

  //https://www.w3schools.com/howto/howto_js_todolist.asp
  addbutton.addEventListener("click", function () {
    let text = document.getElementById("text").value;
    let list = document.createElement("li");
    list.appendChild(document.createTextNode(text));
    datalist.appendChild(list);
  });
}
