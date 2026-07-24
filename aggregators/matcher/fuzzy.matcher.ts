import { IMatcher } from "./matcher.interface";

export class FuzzyMatcher implements IMatcher<string> {
  match(a: string, b: string): number {
    const x = a.toLowerCase();

    const y = b.toLowerCase();

    if (x.includes(y) || y.includes(x)) {
      return 80;
    }

    return 0;
  }
}
