export const formatNewline = (text: string | undefined): string => {
  if (!text) return "";
  return text.replace(/\\n/g, "\n");
};
