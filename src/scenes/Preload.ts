import { Assets } from "game/assets";
import { Scene, Types, GameObjects } from "phaser";

const SceneConfig: Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Preload"
};

export default class extends Scene {
  preloadInner: GameObjects.Sprite;
  preloadOuter: GameObjects.Sprite;

  constructor () {
    super (SceneConfig);
  }

  public create () {
    this.game.scene.start("Title");
  }

  public preload () {
    this.setLoaderImages();

    this.load.on("progress", (value: number) => {
      this.preloadInner.setScale(value, 1);
    });

    if (Assets.image) {
      for (let image of Assets.image) {
        if (!image.ignore) {
          this.load.image(image.key, image.url);
        }
      }
    }

    if (Assets.sound) {
      for (let sound of Assets.sound) {
        if (!sound.ignore) {
          this.load.audio(
            sound.key,
            sound.url
          );
        }
      }
    }

    if (Assets.spriteSheet) {
      for (let spriteSheet of Assets.spriteSheet) {
        if (!spriteSheet.ignore) {
          this.load.spritesheet(
            spriteSheet.key,
            spriteSheet.url,
            {
              frameWidth: spriteSheet.frameWidth,
              frameHeight: spriteSheet.frameHeight,
              startFrame: spriteSheet.startFrame,
              endFrame: spriteSheet.endFrame,
              margin: spriteSheet.margin,
              spacing: spriteSheet.spacing
            }
          );
        }
      }
    }

    if (Assets.bitmapFont) {
      for (let bitmapFont of Assets.bitmapFont) {
        this.load.bitmapFont(
          bitmapFont.key, 
          bitmapFont.url, 
          bitmapFont.fontDataURL
        );
      }
    }
    
    // Load your @font-face fonts (i.e.: Google Fonts, etc.) dynamically here.
  }

  protected setLoaderImages () {
    this.preloadOuter = this.add.sprite(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "loader-outer"
    );
    this.preloadOuter.setOrigin(0, 0);
    this.preloadOuter.x -= this.preloadOuter.width / 2;
    this.preloadOuter.y -= this.preloadOuter.height / 2;
    
    this.preloadInner = this.add.sprite(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "loader-inner"
    );
    this.preloadInner.setOrigin(0, 0);
    this.preloadInner.x -= this.preloadInner.width / 2;
    this.preloadInner.y -= this.preloadInner.height / 2;
  }
}
