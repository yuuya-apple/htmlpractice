const e = document.getElementById("button");
e.addEventListener(
  "click",
  () => {
    const txt = document.getElementById("txtbox");
    const newli = document.createElement("li");
    newli.setAttribute("id", "listcont" + index);
    const newTxt = document.createTextNode(txt.value);
    newli.appendChild(newTxt);
    const ul = document.getElementById("list");
    ul.appendChild(newli);
    const newbutton = document.createElement("input");
    newbutton.setAttribute("type", "button");
    newbutton.setAttribute("value", "DELE");
    newbutton.setAttribute("class", "listcont" + index);
    newbutton.setAttribute("onclick", "deletecont()");
    newli.appendChild(newbutton);

    index++;
  },
  false
);
let index = 0;

function deletecont(e2) {
  const e3 = window.event;
  const ul = document.getElementById("list");
  console.log(e3.target.getAttribute("class"));
  const li = document.getElementById(e3.target.getAttribute("class"));
  ul.removeChild(li);
}
