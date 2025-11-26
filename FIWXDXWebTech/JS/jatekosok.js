$(document).ready(function () {
    // JSON adatok betöltése AJAX-kal
    $.ajax({
        url: '../jatekosok.json',
        dataType: 'json',
        success: function (data) {
            displayPlayers(data.jatekosok);
        },
        error: function (xhr, status, error) {
            $('#jatekosok-container').html('<p class="error">Hiba történt a játékosok betöltése során.</p>');
            console.error('Hiba:', error);
        }
    });

    // Játékosok megjelenítése
    function displayPlayers(jatekosok) {
        const container = $('#jatekosok-container');
        container.empty();
        
        if (jatekosok && jatekosok.length > 0) {
            let html = '<div class="players-grid">';
            
            jatekosok.forEach(function(jatekos) {
                html += `
                    <div class="player-card">
                        <div class="player-header">
                            <span class="player-rank">#${jatekos.vilagranglista_helyezes}</span>
                            <h3 class="player-name">${jatekos.nev}</h3>
                        </div>
                        <div class="player-info">
                            <img class="player-image" src="${jatekos.kep}" alt="Tábla">
                            <p><strong>Ország:</strong> ${jatekos.orszag}</p>
                            ${jatekos.szuletesi_ev ? `<p><strong>Születési év:</strong> ${jatekos.szuletesi_ev}</p>` : ''}
                        </div>
                        ${jatekos.főbb_cimek && jatekos.főbb_cimek.length > 0 ? `
                        <div class="player-achievements">
                            <strong>Főbb címek:</strong>
                            <ul>
                                ${jatekos.főbb_cimek.map(cim => `<li>${cim}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}
                    </div>
                `;
            });
            
            html += '</div>';
            container.html(html);
        } else {
            container.html('<p class="error">Nincsenek játékos adatok.</p>');
        }
    }
});