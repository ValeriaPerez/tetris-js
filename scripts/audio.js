const audio = new window.Audio('../assets/tetris.mp3')

function initAudio () {
  audio.volume = 0
  audio.play()
}

function muted () {
  audio.muted = true
}

export {
  initAudio,
  muted
}
