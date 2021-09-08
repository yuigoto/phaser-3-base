/**
 * game/states/boot
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { Scene, Types } from "phaser";
import LoaderInner from "assets/img/ui/loader.inner.png";
import LoaderOuter from "assets/img/ui/loader.outer.png";

const SceneConfig: Types.Scenes.SettingsConfig = {
  active: true,
  visible: false,
  key: "boot",
};

export class Boot extends Scene {
  constructor() {
    super(SceneConfig);
  }

  preload() {
    this.load.image("loader.inner", LoaderInner);
    this.load.image("loader.outer", LoaderOuter);
  }

  create() {
    // [TODO]: this.input.maxPointers?
    // [TODO]: this.stage.smoothed?
    // [TODO]: this.stage.disableVisibilityChange?

    if (this.game.device.os.desktop) {
      // DESKTOP
      // [TODO]: this.scale.pageAlignHorizontally?
    } else {
      // MOBILE
    }

    this.scene.start("preload");
  }
}
