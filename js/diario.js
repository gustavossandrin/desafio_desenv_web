 document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('diaryForm');
      const message = document.getElementById('message');
      const entriesList = document.getElementById('entriesList');

      function displayEntries() {
        entriesList.innerHTML = '';

        const existingEntries = localStorage.getItem('diaryEntries');
        if (existingEntries) {
          const entries = JSON.parse(existingEntries);

          entries.slice().reverse().forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry');

            entryDiv.innerHTML = `
              <p><strong>Data:</strong> ${entry.data}</p>
              <p><strong>Humor:</strong> ${entry.humor}</p>
              <p>${entry.texto}</p>
            `;
            entriesList.appendChild(entryDiv);
          });
        } else {
          entriesList.innerHTML = '<p>Sem entradas salvas ainda.</p>';
        }
      }

      // Carregar entradas ao abrir a página
      displayEntries();

      form.addEventListener('submit', function(event) {
        event.preventDefault();

        const entryText = document.getElementById('entry').value.trim();
        const moodOption = document.querySelector('input[name="mood"]:checked');

        if (entryText === '' || !moodOption) {
          alert('Por favor, preencha o texto e selecione um humor.');
          return;
        }

        const newEntry = {
          texto: entryText,
          humor: moodOption.value,
          data: new Date().toLocaleString()
        };

        let existingEntries = localStorage.getItem('diaryEntries');
        existingEntries = existingEntries ? JSON.parse(existingEntries) : [];

        existingEntries.push(newEntry);
        localStorage.setItem('diaryEntries', JSON.stringify(existingEntries));

        message.innerText = 'Entrada salva com sucesso!';
        form.reset();
        displayEntries();
      });
    });
