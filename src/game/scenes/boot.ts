/**
 * game/scenes/boot
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { Scene, Types } from 'phaser';

/**
 * Boot scene configuration.
 */
const SceneConfig: Types.Scenes.SettingsConfig = {
  active: true,
  visible: false,
  key: 'boot',
};

/**
 * Boot scene.
 */
export class Boot extends Scene {
  /**
   * Boot scene constructor.
   */
  constructor() {
    super(SceneConfig);
  }

  /**
   * Preloads all assets.
   */
  preload() {
    this.load.image(
      'loader.inner',
      require('@/assets/img/ui/loader.inner.png')
    );
    this.load.image(
      'loader.outer',
      require('@/assets/img/ui/loader.outer.png')
    );
  }

  /**
   * Creates the scene.
   */
  create() {
    // [TODO]: this.input.maxPointers?
    // [TODO]: this.input.smoothed?
    // [TODO]: this.input.disableVisibilityChange?

    if (this.game.device.os.desktop) {
      // DESKTOP
      // [TODO]: this.scale.pageAlignHorizontally?
    } else {
      // MOBILE
    }

    this.scene.start('preload');
  }
}
