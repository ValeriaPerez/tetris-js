const audio = new window.Audio('../audio/tetris.mp3')

function initAudio () {
  audio.volume = 0.1
  audio.play()
}

function muted () {
  audio.muted = true
}

export {
  initAudio,
  muted
}
