import audioMP3 from './tetris.mp3'

const audio = new window.Audio(audioMP3)

function initAudio () {
  audio.volume = 0.2
  audio.play().catch((error) => {
    console.error('Error al reproducir el audio:', error)
  })
}

function setVolume (volume) {
  audio.volume = volume
}

function pauseAudio () {
  audio.pause()
}

function muted () {
  audio.muted = true
}

export {
  initAudio,
  setVolume,
  pauseAudio,
  muted
}
