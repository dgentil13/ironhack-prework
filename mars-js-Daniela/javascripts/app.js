/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-continue */
/* eslint-disable no-cond-assign */
// Rover Object Goes Here
// ======================
const rover1 = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};

const rover2 = {
  direction: 'N',
  x: 0,
  y: 1,
  travelLog: [],
};

const rover3 = {
  direction: 'N',
  x: 9,
  y: 9,
  travelLog: [],
};
// ======================

const obstacles = [
  [null, null, null, 'o', null, null, null, null, null, null],
  [null, null, null, null, null, null, null, 'o', null, null],
  [null, null, 'o', null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, 'o', null],
  ['o', null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, 'o', null, null, null],
  [null, null, 'o', null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, 'o'],
  [null, null, null, null, null, 'o', null, null, null, null],
  [null, null, 'o', null, null, null, null, null, null, null],
];

const rover = [rover1, rover2, rover3];
let n = 0;
let x = 0;

// função virar esquerda e imprimir que lado está olhando
function turnLeft() {
  // eslint-disable-next-line default-case
  switch (rover.direction) {
    case 'N':
      rover[n].direction = 'W';
      break;
    case 'E':
      rover[n].direction = 'N';
      break;
    case 'S':
      rover[n].direction = 'E';
      break;
    case 'W':
      rover[n].direction = 'S';
      break;
  }
  console.log(`You moved left! You're facing the direction: ${rover[n].direction}!`);
}

// função virar esquerda e imprimir que lado está olhando
function turnRight() {
  // eslint-disable-next-line default-case
  switch (rover[n].direction) {
    case 'N':
      rover[n].direction = 'E';
      break;
    case 'E':
      rover[n].direction = 'S';
      break;
    case 'S':
      rover[n].direction = 'W';
      break;
    case 'W':
      rover[n].direction = 'N';
      break;
  }
  console.log(`You moved right! You're now facing the direction: ${rover[n].direction}!`);
}

// Função colisão com outros Rovers. Caso a lista de rover i seja diferente da lista de rover n,
// faça a comparação de posições.
function otherRovers() {
  for (i = 0; i < rover.length; i += 1) {
    if (i !== n) {
      if ((rover[n].x === rover[i].x) && (rover[i].y === rover[n].y)) {
        return true;
      }
    }
  }
  return false;
}

// Função andar pra frente.

function moveForward() {
  console.log('You moved foward');

  // eslint-disable-next-line default-case
  switch (rover[n].direction) {
    case 'N':
      rover[n].x -= 1;
      locationRover = otherRovers();
      // Evitar que você saia da grid 10x10, caso a posição do rover seja menor que 0 ou maior que 10
      // diminui um da posição e solta aviso.
      if (rover[n].x < 0) {
        rover[n].x += 1;
        console.log("You can't go that way, the grid ends here.");
      // caso a função retorne verdadeira lá em cima,volte um espaço e solta aviso.
      } else if (locationRover === true) {
        rover[n].x += 1;
        console.log("You can't go this way, there's another Rover!");
        // obstáculo
      } else if (obstacles[rover[n].y][rover[n].x] !== null) {
        rover[n].x += 1;
        console.log("You can't go that way,There's an obstacle!");
      }
      break;
    case 'E':
      rover[n].y += 1;
      locationRover = otherRovers();
      if (rover[n].y > 9) {
        rover[n].y -= 1;
        console.log("You can't go that way, the grid ends here.");
      } else if (locationRover === true) {
        rover[n].y -= 1;
        console.log("You can't go this way, there's another Rover!");
      } else if (obstacles[rover[n].y][rover[n].x] !== null) {
        rover[n].y -= 1;
        console.log("You can't go that way, there's an obstacle!");
      }
      break;
    case 'S':
      rover[n].x += 1;
      locationRover = otherRovers();
      if (rover[n].x > 9) {
        rover[n].x -= 1;
        console.log("You can't go that way, the grid ends here.");
      } else if (locationRover === true) {
        rover[n].x -= 1;
        console.log("You can't go this way, there's another Rover!");
      } else if (obstacles[rover[n].y][rover[n].x] !== null) {
        rover[n].x -= 1;
        console.log("You can't go that way, there's an obstacle!");
      }
      break;
    case 'W':
      rover[n].y -= 1;
      locationRover = otherRovers();
      if (rover[n].y < 0) {
        rover[n].y += 1;
        console.log("You can't go that way, the grid ends here.");
      } else if (locationRover === true) {
        rover[n].y += 1;
        console.log("You can't go this way, there's another Rover!");
      } else if (obstacles[rover[n].y][rover[n].x] !== null) {
        rover[n].y += 1;
        console.log("You can't go that way, there's an obstacle!");
      }
      break;
  }
  if (x !== 1) {
    if (n === 2) {
      n = 0;
      x = 0;
    } else {
      n += 1;
      x = 0;
    }
  }
}

function moveBackward() {
  console.log('moveBackward was called');

  // eslint-disable-next-line default-case
  switch (rover[n].direction) {
    case 'N':
      rover[n].x += 1;
      if (rover[n].x < 0) {
        rover[n].x -= 1;
        console.log("You can't go that way, the grid ends here.");
      } else if (locationRover === true) {
        rover[n].y += 1;
        console.log("You can't go this way, there's another Rover!");
      } else if (obstacles[rover[n].y][rover[n].x] != null) {
        rover[n].x -= 1;
        console.log("You can't go that way, there's an obstacle!");
      }
      break;
    case 'E':
      rover[n].y -= 1;
      if (rover[n].y < 0) {
        rover[n].y += 1;
        console.log("You can't go that way, the grid ends here.");
      } else if (locationRover === true) {
        rover[n].y += 1;
        console.log("You can't go this way, there's another Rover!");
      } else if (obstacles[rover[n].y][rover[n].x] != null) {
        rover[n].y += 1;
        console.log("You can't go that way, there's an obstacle!");
      }
      break;
    case 'S':
      rover[n].x -= 1;
      if (rover[n].x < 0) {
        rover[n].x += 1;
        console.log("You can't go that way, the grid ends here.");
      } else if (locationRover === true) {
        rover[n].y += 1;
        console.log("You can't go this way, there's another Rover!");
      } else if (obstacles[rover[n].y][rover[n].x] != null) {
        rover[n].x += 1;
        console.log("You can't go that way, there's an obstacle!");
      }
      break;
    case 'W':
      rover[n].y += 1;
      if (rover[n].y < 0) {
        rover[n].y -= 1;
        console.log("You're out of the grid");
      } else if (locationRover === true) {
        rover[n].y += 1;
        console.log("You can't go this way, there's another Rover!");
      } else if (obstacles[rover[n].y][rover[n].x] != null) {
        rover[n].y -= 1;
        console.log("You can't go that way, there's an obstacle!");
      }
      break;
  }
}


function listCommands(list) {
  console.log(`Rover number ${n}`);
  for (let i = 0; i < list.length; i += 1) {
    const commands = list[i];
    if (commands === 'f' && x === 0) {
      x += 1;
      moveForward();
      rover[n].travelLog.push(`[${rover[n].x}|${rover[n].y}]`);
    } else if (commands === 'b' && x === 0) {
      x += 1;
      moveBackward();
      rover[n].travelLog.push(`[${rover[n].x}|${rover[n].y}]`);
    } else if (commands === 'r') {
      turnRight();
    } else if (commands === 'l') {
      turnLeft();
    } else {
      console.log(`${commands} is not a valid letter. Please enter only the letters f, b, r or l. (You also can't move twice)`);
    }
  }
  console.log(`You've been at positions: ${rover[n].travelLog}`);
  console.log(`Next turn: Rover number ${n + 1}`);
  // Só andar foward uma vez.
  if (x === 1) {
    if (n === 2) {
      n = 0;
      x = 0;
    } else {
      n += 1;
      x = 0;
    }
  }
}
