/**
 * game/assets/sound
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { AssetSound } from '@/core/types/assets';

/**
 * Sound and music store.
 */
export const SoundList: Array<AssetSound> = [
  {
    key: 'sound.door',
    url: [
      require('@/assets/audio/sound.door.mp3'),
      require('@/assets/audio/sound.door.ogg'),
    ],
    ignore: false,
  },
  {
    key: 'sound.lock',
    url: [
      require('@/assets/audio/sound.lock.mp3'),
      require('@/assets/audio/sound.lock.ogg'),
    ],
    ignore: false,
  },
];
