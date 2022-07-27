// もふピヨ 桜の花
var petalPlayers = [];

function animatePetals() {
  var petals = document.querySelectorAll('.petal');

  if (!petals[0].animate) {
    var petalsContainer = document.getElementById('petals-container');
    petalsContainer.prepend("Uh oh, it seems like your browser doesn't support Web Animations API yet. Have you tried this in Firefox or Chrome?");
    return false;
  }

  for (var i = 0, len = petals.length; i < len; ++i) {
    var petal = petals[i];
    petal.innerHTML = '<div class="rotate"><img src="https://img-04.stickers.cloud/packs/39e71fe5-ff57-4454-baee-bf750331f3dc/webp/25ec64b8-3b56-465e-a5d8-02b6651658b4.webp" class="askew"></div>';
    var scale = Math.random() * .8 + .2;


    var player = petal.animate([
      { transform: 'translate3d(' + (i/len*100) + 'vw,0,0) scale(' + scale + ')', opacity: scale },
      { transform: 'translate3d(' + (i/len*100 + 10) + 'vw,150vh,0) scale(' + scale + ')', opacity: 1 }
    ], {
      duration: Math.random() * 90000 + 3000,
      iterations: Infinity,
      delay: -(Math.random() * 10000)
    });

    petalPlayers.push(player);
  }
}

animatePetals();
