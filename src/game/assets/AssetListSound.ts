import { AssetSound } from "core/types/assets";

/**
 * game/assets/AssetListSound
 * ----------------------------------------------------------------------
 * @since 0.0.1
 */
export const AssetListSound: Array<AssetSound> = [
  {
    key: "sound-door",
    url: [
      require("assets/audio/sound-door.mp3"),
      require("assets/audio/sound-door.ogg")
    ],
    ignore: false
  },
  {
    key: "sound-lock",
    url: [
      require("assets/audio/sound-lock.mp3"),
      require("assets/audio/sound-lock.ogg")
    ],
    ignore: false
  },
];
