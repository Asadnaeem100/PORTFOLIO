document.addEventListener("DOMContentLoaded", function() {
    let starContainer = document.querySelector('.stars');

    for (let i = 0; i < 100; i++) {
      let star = document.createElement('div');
      star.className = 'star';
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() + 's';
      starContainer.appendChild(star);
    }
  });

  function redirect() {
    window.location.href = "index.html";
}