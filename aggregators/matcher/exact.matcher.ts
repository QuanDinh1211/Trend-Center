import { IMatcher } from "./matcher.interface";

export class ExactMatcher implements IMatcher<string> {
  match(a: string, b: string): number {
    return a.trim().toLowerCase() === b.trim().toLowerCase() ? 100 : 0;
  }
}
