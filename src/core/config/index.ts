import { Scale, Types, AUTO } from "phaser";
import Boot from "scenes/Boot";
import Preload from "scenes/Preload";
import Title from "scenes/Title";
import Info from "info.json";

/**
 * core/config
 * ----------------------------------------------------------------------
 * Game configuration files.
 * 
 * @since 0.0.1
 */
const config: Types.Core.GameConfig = {};

/**
 * Game title.
 */
config.title = Info.name;

/**
 * Renderer type.
 */
config.type = AUTO;

/**
 * Interpolation for pixelart.
 */
config.pixelArt = true;

/**
 * Canvas width and scaling.
 */
config.scale = {
  width: GAME_CANVAS_WIDTH,
  height: GAME_CANVAS_HEIGHT,
  autoCenter: Scale.CENTER_HORIZONTALLY,
  mode: Scale.FIT
};

/**
 * Game world physics.
 */
config.physics = {
  default: "arcade",
  arcade: {
    debug: true
  }
};

/**
 * Parent element ID.
 */
config.parent = "game";

/**
 * Game background color.
 */
config.backgroundColor = "#222";

/**
 * Preloaded scenes.
 */
config.scene = [
  Boot,
  Preload, 
  Title
];

export default config;
