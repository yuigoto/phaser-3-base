/**
 * game/assets
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { AssetList } from "core/types/assets";
import { AtlasList } from "game/assets/atlas";
import { BitmapFontList } from "game/assets/fonts";
import { ImageList } from "game/assets/images";
import { SoundList } from "game/assets/sounds";
import { SpriteSheetList } from "game/assets/spritesheets";
import { TileMapList } from "game/assets/tilemap";

/**
 * Centralizes all asset lists for the game.
 */
export const Assets: AssetList = {
  atlas: AtlasList,
  bitmapFont: BitmapFontList,
  image: ImageList,
  sound: SoundList,
  spriteSheet: SpriteSheetList,
  tileMap: TileMapList,
};
