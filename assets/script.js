$.getJSON("assets/data/mapel.json", function (data) {
  let mapel = data.mapel;
  $.each(mapel, function (i, data) {
    $("#daftar-mapel").append(
      `<div class="card bg-white flex-box"><h4>` +
        data.nama +
        `</h4>
  <img class="icon content-center" src="` +
        data.icon.img +
        `" alt="Icon ` +
        data.icon.alt +
        `"></div>`
    );
  });
});

$.getJSON("assets/data/mapel.json", function (data) {
  let mapel = data.mapel;
  let posisi = data.posisi;
  $.each(mapel, function (i, data) {
    $("#list-attribute").append(
      `<tr>
    <td>` +
        data.icon.alt +
        `</td><td>` +
        posisi +
        `
        </td>
    <td>` +
        data.icon.designer +
        `</td>
    <td><a href="` +
        data.icon.src +
        `">
    Klik</a></td>
  </tr>`
    );
  });
});

const modal = document.getElementById("attribute");
const btn = document.getElementById("OpenAttribute");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
