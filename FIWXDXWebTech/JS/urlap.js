$(document).ready(function () {
    // Űrlap elküldése
    $('#reg-form').on('submit', function (e) {
        e.preventDefault();
        let valid = true;

        // Név ellenőrzés
        if ($('#nev').val().trim() === '') {
            $('#nev').addClass('error');
            $('#nev-error').text('A név megadása kötelező!');
            valid = false;
        } else {
            $('#nev').removeClass('error');
            $('#nev-error').text('');
        }

        // Email ellenőrzés
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ($('#email').val().trim() === '' || !emailRegex.test($('#email').val())) {
            $('#email').addClass('error');
            $('#email-error').text('Érvényes email cím megadása kötelező!');
            valid = false;
        } else {
            $('#email').removeClass('error');
            $('#email-error').text('');
        }

        // Dátum ellenőrzés
        if ($('#szuletesi-datum').val() === '') {
            $('#szuletesi-datum').addClass('error');
            $('#datum-error').text('A születési dátum megadása kötelező!');
            valid = false;
        } else {
            $('#szuletesi-datum').removeClass('error');
            $('#datum-error').text('');
        }

        // Nem ellenőrzés
        if (!$('input[name="nem"]:checked').length) {
            $('#nem-error').text('A nem megadása kötelező!');
            valid = false;
        } else {
            $('#nem-error').text('');
        }

        // Kategória ellenőrzés
        if ($('#kategoria').val() === '') {
            $('#kategoria').addClass('error');
            $('#kategoria-error').text('A kategória kiválasztása kötelező!');
            valid = false;
        } else {
            $('#kategoria').removeClass('error');
            $('#kategoria-error').text('');
        }

        // Adatvédelmi nyilatkozat ellenőrzés
        if (!$('#adatvedelem').is(':checked')) {
            $('#adatvedelem-error').text('Az adatvédelmi nyilatkozat elfogadása kötelező!');
            valid = false;
        } else {
            $('#adatvedelem-error').text('');
        }

        if (valid) {
            alert('Sikeres regisztráció!');
            const formData = collectFormData();
            displayFormData(formData);
        }

        function collectFormData() {
            return {
                nev: $('#nev').val().trim(),
                email: $('#email').val().trim(),
                szuletesiDatum: $('#szuletesi-datum').val(),
                nem: $('input[name="nem"]:checked').val(),
                dartsTapasztalat: $('#darts-tapasztalat').val(),
                jatekStilus: $('#jatek-stilus').val(),
                jatszottHelyszin: $('#jatszott-helyszin').val(),
                megjegyzes: $('#megjegyzes').val(),
                idopont: new Date().toLocaleString('hu-HU')
            };
        }

        function displayFormData(data) {
            // Értékek fordítása
            const nemMap = {
                'ferfi': 'Férfi',
                'no': 'Nő'
            };

            const tapasztalatMap = {
                'kezdo': 'Kezdő (0-1 év)',
                'halado': 'Haladó (1-3 év)',
                'versenyzo': 'Versenyző (3+ év)',
                'profi': 'Profi'
            };

            const jatekStilusMap = {
                '501': '501 - Klasszikus',
                'cricket': 'Cricket - Stratégiai',
                'around': 'Around the Clock - Gyakorlás',
                'mind': 'Mindegyik'
            };

            const helyszinMap = {
                'otthon': 'Otthon',
                'pub': 'Pub/Bar',
                'klub': 'Darts klub',
                'verseny': 'Versenyhelyszín'
            };

            const html = `
            <div class="success-message">
                <h3>✅ Sikeres kitöltés!</h3>
                <p>Köszönjük, hogy kitöltötted az űrlapot! Itt láthatod az adataidat:</p>
            </div>
            
            <div class="adatok-container">
                <div class="adat-csoport">
                    <h4>Személyes adatok</h4>
                    <div class="adat-sor">
                        <span class="adat-cimke">Teljes név:</span>
                        <span class="adat-ertek">${data.nev}</span>
                    </div>
                    <div class="adat-sor">
                        <span class="adat-cimke">E-mail cím:</span>
                        <span class="adat-ertek">${data.email}</span>
                    </div>
                    <div class="adat-sor">
                        <span class="adat-cimke">Születési dátum:</span>
                        <span class="adat-ertek">${data.szuletesiDatum}</span>
                    </div>
                    <div class="adat-sor">
                        <span class="adat-cimke">Nem:</span>
                        <span class="adat-ertek">${nemMap[data.nem]}</span>
                    </div>
                </div>

                <div class="adat-csoport">
                    <h4>Darts profil</h4>
                    <div class="adat-sor">
                        <span class="adat-cimke">Darts tapasztalat:</span>
                        <span class="adat-ertek">${tapasztalatMap[data.dartsTapasztalat]}</span>
                    </div>
                    <div class="adat-sor">
                        <span class="adat-cimke">Kedvenc játékstílus:</span>
                        <span class="adat-ertek">${jatekStilusMap[data.jatekStilus]}</span>
                    </div>
                    <div class="adat-sor">
                        <span class="adat-cimke">Szokásos játéklhelyszín:</span>
                        <span class="adat-ertek">${helyszinMap[data.jatszottHelyszin]}</span>
                    </div>
                </div>

                ${data.megjegyzes ? `
                <div class="adat-csoport">
                    <h4>Megjegyzések</h4>
                    <div class="adat-sor">
                        <span class="adat-ertek">${data.megjegyzes}</span>
                    </div>
                </div>
                ` : ''}

                <div class="adat-csoport">
                    <h4>Technikai adatok</h4>
                    <div class="adat-sor">
                        <span class="adat-cimke">Kitöltés ideje:</span>
                        <span class="adat-ertek">${data.idopont}</span>
                    </div>
                </div>
                <br>

                <div>
                    <button type="button" id="uj-regisztracio">Új regisztráció</button>
                    <button type="button" id="mentes">Mentés (JSON-be)</button>
                </div>
            </div>
        `;

            // HTML frissítése
            $('#regisztracio').html(`
            <h2>Űrlap adataid</h2>
            ${html}
        `);

            // Gomb eseménykezelők
            $('#uj-regisztracio').on('click', resetForm);
            $('#mentes').on('click', function () {
                saveToJSON(data);
            });
        }

        function saveToJSON(data) {
            try {
                // Betöltjük a meglévő adatokat
                let existingData = JSON.parse(localStorage.getItem('urlap_adatok') || '[]');
                
                // Hozzáadjuk az újat
                existingData.push(data);
                
                // Elmentjük
                localStorage.setItem('urlap_adatok', JSON.stringify(existingData));
                
                // Fájl letöltése
                downloadJSON(existingData, 'urlap_adatok.json');
                
                alert('✅ Adatok sikeresen elmentve JSON fájlba!');
            } catch (error) {
                console.error('Hiba a mentés során:', error);
                alert('❌ Hiba történt a mentés során!');
            }
        }

        function downloadJSON(data, filename) {
            const jsonString = JSON.stringify(data, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // Űrlap visszaállítása
        function resetForm() {
            location.reload(); // Egyszerű megoldás - újratölti az oldalt
        }
    });
});