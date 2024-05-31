import {
  BLOCK_SIZE,
  BOARD_HEIGHT,
  BOARD_WIDTH,
  BOARD,
  EVENT_KEYS,
  PIECES
} from '../utils'
import { initAudio, muted } from './audio'

// 1. Iniciando canvas
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = BLOCK_SIZE * BOARD_WIDTH
canvas.height = BLOCK_SIZE * BOARD_HEIGHT

context.scale(BLOCK_SIZE, BLOCK_SIZE)

let score = 0

// Pieza jugador
const piece = {
  position: { x: 6, y: 0 },
  shape: PIECES[Math.floor(Math.random() * PIECES.length)]
}

// Game loop
let dropCounter = 0
let dropInterval = 1000

function update (time = 0) {
  const deltaTime = time - dropInterval
  dropInterval = time

  dropCounter += deltaTime

  if (dropCounter > 1000) {
    piece.position.y++
    dropCounter = 0
    if (checkCollision()) {
      piece.position.y--
      solidifyPiece()
      checkLine()
    }
  }

  draw()
  window.requestAnimationFrame(update)
}

// Dibuja canvas
function draw () {
  context.fillStyle = '#000'
  context.fillRect(0, 0, canvas.width, canvas.height)

  BOARD.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        context.fillStyle = '#fff'
        context.fillRect(x, y, 1, 1)
      }
    })
  })

  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        context.fillStyle = 'red'
        context.fillRect(x + piece.position.x, y + piece.position.y, 1, 1)
      }
    })
  })

  document.querySelector('strong').innerHTML = score
}

// Escuchando teclas
document.addEventListener('keydown', event => {
  if (event.key === EVENT_KEYS.left) {
    piece.position.x--
    if (checkCollision()) {
      piece.position.x++
    }
  }
  if (event.key === EVENT_KEYS.right) {
    piece.position.x++
    if (checkCollision()) {
      piece.position.x--
    }
  }
  if (event.key === EVENT_KEYS.down) {
    piece.position.y++
    if (checkCollision()) {
      piece.position.y--
      solidifyPiece()
      checkLine()
    }
  }

  if (event.key === EVENT_KEYS.rotate) {
    // Rotamos la pieza
    const rotatedPiece = piece.shape[0].map((_, index) => {
      return piece.shape.map(row => row[index]).reverse()
    })

    piece.shape = rotatedPiece
    if (checkCollision()) {
      piece.shape = piece.shape[0].map((_, index) => {
        return piece.shape.map(row => row[index])
      })
    }
  }
})

// Revisamos si hay colision
function checkCollision () {
  return piece.shape.find((row, y) => {
    return row.find((value, x) => {
      return (
        value !== 0 &&
        BOARD[y + piece.position.y]?.[x + piece.position.x] !== 0
      )
    })
  })
}

// Solidificamos la pieza
function solidifyPiece () {
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        BOARD[y + piece.position.y][x + piece.position.x] = 1
      }
    })
  })

  // Nueva pieza
  piece.shape = PIECES[Math.floor(Math.random() * PIECES.length)]
  // Posicionamos la pieza en la parte superior
  piece.position.x = Math.floor(BOARD_WIDTH / 2) - Math.floor(piece.shape[0].length / 2)
  piece.position.y = 0

  // Se acabo el juego
  if (checkCollision()) {
    window.alert('Game Over')
    BOARD.forEach((row, y) => {
      BOARD[y] = new Array(BOARD_WIDTH).fill(0)
    })
  }
}

// Revisamos si hay linea completa
function checkLine () {
  BOARD.forEach((row, y) => {
    if (row.every(value => value !== 0)) {
      BOARD.splice(y, 1)
      BOARD.unshift(new Array(BOARD_WIDTH).fill(0))
      score += 10
    }
  })
}

// Iniciamos audio
const $section = document.querySelector('section')
const $button = document.getElementById('idStart')
const $buttonMuted = document.getElementById('idMuted')

$button.addEventListener('click', () => {
  $section.remove()
  update()
  initAudio()
})

$buttonMuted.addEventListener('click', () => {
  muted()
})
