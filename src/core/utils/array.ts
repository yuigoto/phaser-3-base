/**
 * core/utils/array
 * ----------------------------------------------------------------------
 * Core array utility functions.
 *
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */

/**
 * Guarantees that every element in the array is unique.
 *
 * @param array
 *     Array to check
 * @returns
 */
export function arrayUnique<T>(array: Array<T>): Array<T> {
  return Array.from(new Set(array));
}
