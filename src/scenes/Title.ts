import { Scene, Types, GameObjects, Sound } from "phaser";

const SceneConfig: Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Title"
};

export default class extends Scene {
  constructor () {
    super (SceneConfig);
  }

  create () {
    this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      640,
      360,
      0x000000,
      1
    );

    const sprite: GameObjects.Sprite = this.add.sprite(
      128,
      128,
      "sprite-dial"
    );
    sprite.rotation = 35;

    const corridor: GameObjects.Sprite = this.add.sprite(
      64, 64,
      "bg-corridor-sprite"
    );
    corridor.anims.create({
      key: "move",
      frames: this.anims.generateFrameNumbers(
        "bg-corridor-sprite",
        {
          start: 0
        }
      ),
      frameRate: 30,
      repeat: -1,
      duration: 1000
    });
    corridor.anims.play({
      key: "move",
      duration: 500
    });

    this.sound.add("sound-door").play();
  }
}
