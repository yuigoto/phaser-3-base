/**
 * game/states/preload
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { Assets } from "game/assets";
import { Scene, Types, GameObjects } from "phaser";

const SceneConfig: Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "preload",
};

export class Preload extends Scene {
  /**
   * Preloader inner bar.
   */
  preloadInner: GameObjects.Sprite | null = null;

  /**
   * Outer frame of the preloader.
   */
  preloadOuter: GameObjects.Sprite | null = null;

  constructor() {
    super(SceneConfig);
  }

  preload() {
    this.setLoaderSprites();

    this.load.on("progress", (value: number) => {
      if (this.preloadInner) this.preloadInner.setScale(value, 1);
    });

    if (Assets?.image) {
      for (let image of Assets.image) {
        if (!image.ignore) {
          this.load.image(image.key, image.url);
        }
      }
    }

    if (Assets?.sound) {
      for (let sound of Assets.sound) {
        if (!sound.ignore) {
          this.load.audio(sound.key, sound.url);
        }
      }
    }

    if (Assets.spriteSheet) {
      for (let spriteSheet of Assets.spriteSheet) {
        if (!spriteSheet.ignore) {
          this.load.spritesheet(spriteSheet.key, spriteSheet.url, {
            frameWidth: spriteSheet.frameWidth,
            frameHeight: spriteSheet.frameHeight,
            startFrame: spriteSheet.startFrame,
            endFrame: spriteSheet.endFrame,
            margin: spriteSheet.margin,
            spacing: spriteSheet.spacing,
          });
        }
      }
    }

    if (Assets.bitmapFont) {
      for (let bitmapFont of Assets.bitmapFont) {
        if (!bitmapFont.ignore) {
          this.load.bitmapFont(
            bitmapFont.key,
            bitmapFont.url,
            bitmapFont.fontDataURL
          );
        }
      }
    }

    // All your @font-face fonts should be loaded in here
  }

  create() {
    this.game.scene.start("title");
  }

  protected setLoaderSprites() {
    this.preloadOuter = this.add.sprite(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "loader.outer"
    );
    this.preloadOuter.setOrigin(0, 0);
    this.preloadOuter.x -= this.preloadOuter.width / 2;
    this.preloadOuter.y -= this.preloadOuter.height / 2;

    this.preloadInner = this.add.sprite(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "loader.inner"
    );
    this.preloadInner.setOrigin(0, 0);
    this.preloadInner.x -= this.preloadInner.width / 2;
    this.preloadInner.y -= this.preloadInner.height / 2;
  }
}
