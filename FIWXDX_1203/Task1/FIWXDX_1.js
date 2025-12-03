$(document).ready(function() {
    $("#btn-load").click(function() {
      $.ajax({
        url: "FIWXDX_orarend.json",
        dataType: "json",
        success: function(adatok) {
          let html = "<h2><strong>MISKOLCI EGYETEM</strong></h2>";
          html += `<p>Cím: ${adatok.cim.iranyitoszam} ${adatok.cim.varos} ${adatok.cim.utca}</p>`;
          html += `<h3>Telefonszám:</h3>`
          html += `<p>Vezetékes: ${adatok.telefonszam[0].szam}<br>Mobil: ${adatok.telefonszam[1].szam}</p>`;
          html += "<h3>Órarend</h3><ul>";
  
          $.each(adatok.ora, function(i, ora) {
            html += `<li>
              <strong>${ora.targy}</strong> (${ora.tipus})<br>
              ${ora.idopont.nap}, ${ora.idopont.tol}:00 - ${ora.idopont.ig}:00<br>
              Helyszín: ${ora.helyszin}<br>
              Oktató: ${ora.oktato}<br>
              Szak: ${ora.szak}
            </li><br>`;
          });
  
          html += "</ul>";
          $("#terulet").html(html);
        },
        error: function() {
          $("#terulet").html("<p>Hiba történt az adatok betöltésekor.</p>");
        }
      });
    });
  });
  