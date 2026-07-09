// script.js - Dados e renderização do site de boxe

document.addEventListener('DOMContentLoaded', () => {

  // ========== DADOS ==========
  const boxeLendas = [
    {
      nome: "Muhammad Ali",
      apelido: "The Greatest",
      biografia: "Considerado o maior peso-pesado de todos os tempos. Ali revolucionou o boxe com sua velocidade, reflexos e carisma. Além de campeão olímpico e mundial, foi um ativista político e social.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_%28Nation_of_Islam%29.jpg/440px-Muhammad_Ali_%28Nation_of_Islam%29.jpg",
      linkYoutube: "https://www.youtube.com/watch?v=4tZ9jfSt-0Q"
    },
    {
      nome: "Mike Tyson",
      apelido: "Iron Mike",
      biografia: "O mais jovem campeão peso-pesado da história. Tyson aterrorizou a divisão com seu poder de nocaute e agressividade. Sua carreira é marcada por altos e baixos, mas seu legado é inegável.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mike_Tyson_2019_by_Glenn_Francis.jpg/440px-Mike_Tyson_2019_by_Glenn_Francis.jpg",
      linkYoutube: "https://www.youtube.com/watch?v=7g_ZFVhOv2I"
    },
    {
      nome: "Floyd Mayweather Jr.",
      apelido: "Money",
      biografia: "Invicto em 50 lutas, Mayweather é conhecido por sua defesa impecável e inteligência tática. Multi-campeão em cinco categorias, é um dos pugilistas mais bem pagos da história.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Floyd_Mayweather_Jr._2011.jpg/440px-Floyd_Mayweather_Jr._2011.jpg",
      linkYoutube: "https://www.youtube.com/watch?v=0wYjY0ivN50"
    },
    {
      nome: "Sugar Ray Leonard",
      apelido: "Sugar",
      biografia: "Um dos maiores boxeadores dos pesos médios-meio-médios. Leonard foi campeão mundial em cinco categorias e protagonizou lutas lendárias contra Duran, Hearns e Hagler.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Sugar_Ray_Leonard_2016.jpg/440px-Sugar_Ray_Leonard_2016.jpg",
      linkYoutube: "https://www.youtube.com/watch?v=JpF3B63lE1U"
    }
  ];

  const videos = [
    { titulo: "Ali vs Foreman - 'Rumble in the Jungle'", embed: "https://www.youtube.com/embed/7yMxJfKJ25M" },
    { titulo: "Tyson vs Holyfield I - A mordida", embed: "https://www.youtube.com/embed/6JxP8b5UxXk" },
    { titulo: "Mayweather vs Pacquiao - A luta do século", embed: "https://www.youtube.com/embed/OiLTlsntb_g" },
    { titulo: "Leonard vs Hearns I - O confronto", embed: "https://www.youtube.com/embed/qhYQhCz3gCE" }
  ];

  const fotos = [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ali_Liston.jpg/440px-Ali_Liston.jpg", legenda: "Ali x Liston, 1964" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mike_Tyson_1988.jpg/440px-Mike_Tyson_1988.jpg", legenda: "Tyson em 1988" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Floyd_Mayweather_%26_Manny_Pacquiao_%282015%29.jpg/440px-Floyd_Mayweather_%26_Manny_Pacquiao_%282015%29.jpg", legenda: "Mayweather x Pacquiao, 2015" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ray_Leonard_1980.jpg/440px-Ray_Leonard_1980.jpg", legenda: "Sugar Ray Leonard, 1980" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Joe_Louis_1938.jpg/440px-Joe_Louis_1938.jpg", legenda: "Joe Louis, 1938" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Rocky_Marciano.jpg/440px-Rocky_Marciano.jpg", legenda: "Rocky Marciano, invicto" }
  ];

  // ========== RENDER ==========

  // 1. Biografias (cards)
  const biografiaContainer = document.getElementById('biografias');
  if (biografiaContainer) {
    boxeLendas.forEach(lenda => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${lenda.imagem}" alt="${lenda.nome}" class="card-img" loading="lazy">
        <div class="card-content">
          <h3>${lenda.nome}</h3>
          <span class="apelido">${lenda.apelido}</span>
          <p>${lenda.biografia}</p>
          <a href="${lenda.linkYoutube}" target="_blank" class="card-link">
            <i class="fab fa-youtube"></i> Ver no YouTube
          </a>
        </div>
      `;
      biografiaContainer.appendChild(card);
    });
  }

  // 2. Vídeos YouTube
  const videoGrid = document.getElementById('videoGrid');
  if (videoGrid) {
    videos.forEach(video => {
      const div = document.createElement('div');
      div.className = 'video-item';

      div.innerHTML = `
        <iframe src="${video.embed}" allowfullscreen loading="lazy"></iframe>
        <div class="video-caption"><i class="fab fa-youtube" style="color:#b2632c;margin-right:8px;"></i>${video.titulo}</div>
      `;
      videoGrid.appendChild(div);
    });
  }

  // 3. Fotografias
  const fotoGrid = document.getElementById('fotoGrid');
  if (fotoGrid) {
    fotos.forEach(foto => {
      const div = document.createElement('div');
      div.className = 'foto-item';

      div.innerHTML = `
        <img src="${foto.url}" alt="${foto.legenda}" loading="lazy">
        <div class="foto-legenda">📸 ${foto.legenda}</div>
      `;
      fotoGrid.appendChild(div);
    });
  }

});
