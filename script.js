fetch('messages.json')
  .then(res => res.json())
  .then(data => {
    const forum = document.getElementById('forum');
    data.forEach(msg => {
      const post = document.createElement('div');
      post.className = 'post';
      post.innerHTML = `
        <p>${msg.english}</p>
        <p><em>${msg.spanish}</em></p>
      `;
      forum.appendChild(post);
    });
  });