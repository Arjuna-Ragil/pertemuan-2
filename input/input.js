//soal 1//
function tambahForm() {
  let tambah = document.getElementById("extra");    
  let divCreate = document.createElement("div");          
    divCreate.innerHTML = `

  <div class="boxInput">
    <form>
      <label id="namaLabel" class="input">Nama</label>
      <br>
      <input type="text" placeholder="Nama kamu..."id="namaBox" class="input" onchange="toUpperCase()"/>
      <br>
      <label id="nimLabel" class="input">NIM</label>
      <br>
      <input type="number" placeholder="NIM kamu..." id="nimBox" class="input"/>
      <br>
      <label id="genderLabel" class="input">Jenis Kelamin</label>
      <select id="genderSelect" class="input">
        <option selected disabled>--Pilih jenis kelamin--</option>
        <option>Laki-Laki</option>
        <option>Perempuan</option>
      </select>
      <br>
      <button id="submitButton" onclick="selesai()">Submit</button>
    </form>
  </div>`

  tambah.appendChild(divCreate);
}

//soal 2//
function toUpperCase() {
  let nama = document.getElementById("namaBox");
  nama.value = nama.value.toUpperCase();
}

//soal 3//
function selesai() {
  alert("Selamat data telah berhasil di simpan");
}

//soal 4//
var timeDisplay = document.getElementById("time");


function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);