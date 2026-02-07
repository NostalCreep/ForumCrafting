// Cargar los mensajes
fetch('messages.json')
  .then(res => res.json())
  .then(data => {
    const forum = document.getElementById('forum');

    data.forEach((msg, index) => {
      const post = document.createElement('div');
      post.className = 'post';

      post.innerHTML = `
        <p class="english">${msg.english}</p>
        <button id="btn-${index}">Traducir</button>
        <p class="spanish" id="spanish-${index}">${msg.spanish}</p>
      `;

      forum.appendChild(post);

      // Botón de traducción
      const button = document.getElementById(`btn-${index}`);
      const spanish = document.getElementById(`spanish-${index}`);

      button.addEventListener('click', () => {
        if (spanish.style.display === 'none') {
          spanish.style.display = 'block';
          button.textContent = 'Ocultar traducción';
        } else {
          spanish.style.display = 'none';
          button.textContent = 'Traducir';
        }
      });
    });
  });
