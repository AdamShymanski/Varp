import 'phaser';
import { GameScene } from './scenes/game-scene';

const config: GameConfig = {
  width: 390,
  height: 600,
  parent: 'game',
  scene: [GameScene],
  input: {
    keyboard: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 350 },
    },
  },
  render: { pixelArt: true },
};

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.addEventListener('load', () => {
  let game = new Game(config);
});
