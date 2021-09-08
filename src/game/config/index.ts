/**
 * game/config
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { Scale, Types, AUTO } from "phaser";
import Info from "info.json";
import { Boot } from "game/states/boot";
import { Preload } from "game/states/preload";
import { Title } from "game/states/title";

export const config: Types.Core.GameConfig = {};

config.title = Info.name;

config.type = AUTO;

config.pixelArt = true;

config.scale = {
  width: GAME_CANVAS_WIDTH,
  height: GAME_CANVAS_HEIGHT,
  autoCenter: Scale.CENTER_HORIZONTALLY,
  mode: Scale.FIT,
};

config.physics = {
  default: "arcade",
  arcade: {
    debug: true,
  },
};

config.parent = "game";

config.backgroundColor = "#6d6d6d";

config.scene = [Boot, Preload, Title];
