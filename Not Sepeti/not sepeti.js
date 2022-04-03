const yenigörev = document.querySelector(".input-görev");
const yenigöreveklebtn = document.querySelector(".btn-gorev-ekle");
const görevlistesi = document.querySelector(".görev-listesi");

yenigöreveklebtn.addEventListener("click", görevekle);

görevlistesi.addEventListener("click", görevsiltamamla);

function görevsiltamamla(e) {
  console.log(e.target);
  const tıklanılaneleman = e.target;

  if (tıklanılaneleman.classList.contains("gorev-btn")) {
    tıklanılaneleman.parentElement.classList.toggle("gorev-tamamlandı");
  }

  if (tıklanılaneleman.classList.contains("gorev-sil")) {
    tıklanılaneleman.parentElement.remove();
  }
}

function görevekle(e) {
  e.preventDefault();
  console.log("asd");

  const görevdiv = document.createElement("div");
  görevdiv.classList.add("görev-item");

  const görevli = document.createElement("li");
  görevli.classList.add("görev-tanim");
  görevli.innerText = yenigörev.value;
  görevdiv.appendChild(görevli);
  görevlistesi.appendChild(görevdiv);

  const görevtamambtn = document.createElement("button");
  görevtamambtn.classList.add("gorev-btn");
  görevtamambtn.classList.add("gorev");
  görevtamambtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  görevdiv.appendChild(görevtamambtn);

  const görevsilbtn = document.createElement("button");
  görevsilbtn.classList.add("gorev-btn");
  görevsilbtn.classList.add("gorev-sil");
  görevsilbtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  görevdiv.appendChild(görevsilbtn);
}
