function hitungLuas() {
    var sisi = document.getElementById("nilai-sisi1").value;
    var x = document.getElementById("hasil-hitung1");
    if (sisi == "") {
      alert("Data tidak boleh kosong");
      x.style.display = "none";
      return false;

    } else {
        
        luas = sisi * sisi;

        document.getElementById("nilai-input-luas1").innerHTML = sisi;
        document.getElementById("nilai-input-luas2").innerHTML = sisi;
        document.getElementById("hasil-luas").innerHTML = luas;
        x.style.display = "flex";
        x.style.flexDirection = "column";
        x.style.alignItems = "flex-start";

        return false;
    }
};

function hitungKel() {
    var sisi = document.getElementById("nilai-sisi2").value;
    var x = document.getElementById("hasil-hitung2");
    if (sisi == "") {
      alert("Data tidak boleh kosong");
      x.style.display = "none";
      return false;

    } else {
        
        keliling = sisi * sisi * sisi * sisi;

        document.getElementById("nilai-input-kel1").innerHTML = sisi;
        document.getElementById("nilai-input-kel2").innerHTML = sisi;
        document.getElementById("nilai-input-kel3").innerHTML = sisi;
        document.getElementById("nilai-input-kel4").innerHTML = sisi;
        document.getElementById("hasil-kel").innerHTML = keliling;
        x.style.display = "flex";
        x.style.flexDirection = "column";
        x.style.alignItems = "flex-start";

        return false;
    }
};

function hideHasil1() {
    var x = document.getElementById("hasil-hitung1");
    var sisi = document.getElementById("nilai-sisi1");
    if (x.style.display === "flex" && sisi.value != "") {
      x.style.display = "none";
      sisi.value = "";
    }

    return false;
};


function hideHasil2() {
    var x = document.getElementById("hasil-hitung2");
    var sisi = document.getElementById("nilai-sisi2");
    if (x.style.display === "flex" && sisi.value != "") {
      x.style.display = "none";
      sisi.value = "";
    }

    return false;
};

function pilihPanjang() {
  var x = document.getElementById("kalkulator-panjang");
  var y = document.getElementById("kalkulator-persegi");
  if (x.style.display != "block" ) {
    x.style.display = "block";
    y.style.display = "none";
  }

  return false;
};

function pilihPersegi() {
  var x = document.getElementById("kalkulator-panjang");
  var y = document.getElementById("kalkulator-persegi");
  if (x.style.display != "none" ) {
    x.style.display = "none";
    y.style.display = "block";
  }

  return false;
};

