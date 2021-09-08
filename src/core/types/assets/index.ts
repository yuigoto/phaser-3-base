/**
 * core/types/assets
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { HashMap } from "core/types";

/**
 * Basic asset properties.
 */
export type Asset = HashMap<any> & {
  key: string;
  url: string;
  ignore: boolean;
};

/**
 * Defines basic asset properties without the file.
 */
export type AssetNoFile<T = Asset> = T extends Asset ? Omit<T, "url"> : never;

/**
 * Defines properties for assets of type "bitmap font".
 */
export type AssetBitmapFont = Asset & {
  /**
   * Path to the file containing the texture atlas for the bitmap font, in
   * XML/JSON formats.
   */
  fontDataURL?: string | undefined;
};

/**
 * Defines properties for assets of type "image".
 */
export type AssetImage = Asset & {
  /**
   * Defines if this sprite should overwrite an unloaded file with the same
   * name/key.
   */
  overwrite: boolean;
};

/**
 * Defines properties for assets of type "sound".
 */
export type AssetSound = AssetNoFile & {
  /**
   * Path to the file, or array of paths, for the current sound.
   *
   * Overwrites the parent `file`, since sounds can be loaded on multiple
   * formats (mp3, ogg, wav).
   */
  url: string | Array<string>;
};

/**
 * Defines properties for assets of type "sprite sheet".
 */
export type AssetSpriteSheet = Asset & {
  /**
   * Fixed frame width.
   */
  frameWidth: number;

  /**
   * Fixed frame height.
   */
  frameHeight: number;

  /**
   * Frame to start parsing at.
   */
  startFrame?: number;

  /**
   * Frame to stop parsing at.
   */
  endFrame?: number;

  /**
   * Margin around each frame, in pixels, optional.
   */
  margin?: number;

  /**
   * Spacing around each frame, in pixels, optional.
   */
  spacing?: number;
};

/**
 * Asset list store type.
 *
 * Defines what you need to have a centralized asset store.
 */
export type AssetList = HashMap<any> & {
  image?: Array<AssetImage>;
  sound?: Array<AssetSound>;
  spriteSheet?: Array<AssetSpriteSheet>;
  bitmapFont?: Array<AssetBitmapFont>;
};
