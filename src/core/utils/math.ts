/**
 * core/utils/math
 * ----------------------------------------------------------------------
 * Core math utility functions.
 *
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */

/**
 * Shifts `current` towards `target` by `step`.
 *
 * Useful for simple acceleration and deceleration.
 *
 * @param current
 *     Current or initial value
 * @param target
 *     Target value
 * @param step
 *     Step value
 * @returns
 */
export function approach(
  current: number,
  target: number,
  step: number
): number {
  return current < target
    ? Math.min(current + step, target)
    : Math.max(current - step, target);
}

/**
 * Limits `value` between `min` and `max`.
 *
 * @param value
 *     Value to limit
 * @param min
 *     Minimum value
 * @param max
 *     Maximum value
 * @returns
 */
export function clamp(value: number, min: number, max: number): number {
  return value < min ? min : value > max ? max : value;
}
