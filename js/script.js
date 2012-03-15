
new Loader(['images/water-tile.png', 'audio/attack.wav'], function() {
  var audio, image, loaded;
  loaded = document.createElement('div');
  loaded.innerHTML = 'all loaded';
  document.body.appendChild(loaded);
  image = new Image;
  image.src = 'images/water-tile.png';
  document.body.appendChild(image);
  audio = new Audio;
  audio.src = 'audio/attack.wav';
  return audio.play();
});
