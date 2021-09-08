/**
 * game/assets/images
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { AssetImage } from "core/types/assets";

/**
 * Holds data for all bitmap files in the game.
 */
export const ImageList: Array<AssetImage> = [
  {
    key: "sprite.dial",
    url: require("assets/img/sprite.dial.png"),
    overwrite: false,
    ignore: false,
  },
];
