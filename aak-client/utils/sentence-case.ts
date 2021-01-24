export const sentenceCase = (str: string): string => {
  const setenceCasedString = str
    .toLowerCase()
    .replace(
      /([^\W_]+[^\s-]*) */g,
      (s: string) => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()
    )
    .replace(/[_-]/g, ' ');

  return setenceCasedString;
};
