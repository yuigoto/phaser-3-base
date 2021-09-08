/**
 * game/assets/fonts
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { AssetBitmapFont } from "core/types/assets";

/**
 * Holds data for all bitmap fonts.
 */
export const BitmapFontList: Array<AssetBitmapFont> = [
  {
    key: "yx_ui",
    url: require("assets/fonts/yx.ui.png"),
    fontDataURL: require("assets/fonts/yx.ui.fnt"),
    ignore: false,
  },
];
