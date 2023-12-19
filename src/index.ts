type ExtractMiddleWord<TWord extends string> =
  TWord extends `hello${infer R}1234` ? R : never;

const myListWords = ["hellonepal1234", "hellosagar1234"] as const;
export type ExtractedListWords = ExtractMiddleWord<
  (typeof myListWords)[number]
>;

export const createClosure = (
  val: number,
  word: ExtractMiddleWord<(typeof myListWords)[number]>
) => {
  return () => {
    const checkingWord = "sagar";

    if (checkingWord === word) {
      return val * 18;
    }

    return val * 8;
  };
};

// Example usage
export const applyClosureCreation = () => {
  const value = createClosure(2, "nepal");
  const value2 = createClosure(4, "sagar");

  const obtainedValue = value();
  const obtainedValue2 = value2();

  return obtainedValue + obtainedValue2;
};
