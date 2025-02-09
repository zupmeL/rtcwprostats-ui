import { parse, parseISO, fromUnixTime } from "date-fns";

export const toList = <T>(obj: Record<string, T>) => {
  return Object.entries(obj).map(([_, value]) => value);
};

export const dateStringToDate = (input: string) => {
  const d = parse(input + '+00', "yyyy-MM-dd HH:mm:ssX", new Date());
  return d;
};

export const dateStringISOToDate = (input: string) => {
  const d = parseISO(input);
  return d;
};

export const unixToDate = (input: string) => {
  const input_int = parseInt(input);
  const d = fromUnixTime(input_int);
  return d;
};

export const unitsToMeters = (distance: number ) => {
  return (distance/48*1.8).toFixed(1);
};

export const getRandomColor = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}
