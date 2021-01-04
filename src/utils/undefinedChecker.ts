export function ensure<T>(
  argument: T | undefined | null,
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  message: string = 'This value was promised to be there.'
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }
  return argument;
}
