const e1 = document.getElementById("button1");

let index = 1;

e1.addEventListener(
  "click",
  () => {
    console.log(document.getElementById("p1").innerText);
    document.getElementById("p1").innerText = index;
    console.log(index);
    index++;
  },
  false
);

const e2 = document.getElementById("button2");
e2.addEventListener(
  "click",
  () => {
    const eles = document.getElementsByTagName("div");
    for (let i = 0; i < eles.length; i++) {
      console.log(eles[i].innerText);
    }
  },
  false
);

const e3 = document.getElementById("button3");
e3.addEventListener(
  "click",
  () => {
    const eles = document.getElementsByName("res1");
    for (let i = 0; i < eles.length; i++) {
      console.log(eles[i].value);
    }
  },
  false
);

const e4 = document.getElementById("button4");
e4.addEventListener(
  "click",
  () => {
    const eles = document.getElementsByClassName("foo");
    for (let i = 0; i < eles.length; i++) {
      console.log(eles[i].innerText);
    }
  },
  false
);

const e5 = document.getElementById("button5");
e5.addEventListener(
  "click",
  () => {
    const li = document.createElement("li");
    const txt = document.createTextNode("test");
    li.appendChild(txt);
    const listele = document.getElementById("list1");
    listele.appendChild(li);
  },
  false
);

const e6 = document.getElementById("button6");
e6.addEventListener(
  "click",
  () => {
    const newList = document.createElement("li");
    newList.setAttribute("id", "newList");
    const newTxt = document.createTextNode("new ele");
    newList.appendChild(newTxt);
    const oldlist = document.getElementById("oldlist");
    const parentNode = oldlist.parentNode;
    parentNode.replaceChild(newList, oldlist);
  },
  false
);

const e7 = document.getElementById("button7");
e7.addEventListener(
  "click",
  () => {
    console.log(1);

    const ul = document.getElementById("ul2");
    const eles = ul.getElementsByClassName("list2");
    const rmindex = eles.length - 1;
    ul.removeChild(eles[rmindex]);
  },
  false
);
