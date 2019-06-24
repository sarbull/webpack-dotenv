export const a: number = 1;

export const sum: any = (a: number, b: number): number => a + b;

export const manual: any = () => {
  return parseInt(process.env.LOCAL_VALUE) + 1;
}
