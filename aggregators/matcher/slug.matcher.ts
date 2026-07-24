import slugify from "slugify";

import { IMatcher } from "./matcher.interface";

export class SlugMatcher implements IMatcher<string> {
  match(a: string, b: string): number {
    const x = slugify(a, {
      lower: true,

      strict: true,
    });

    const y = slugify(b, {
      lower: true,

      strict: true,
    });

    return x === y ? 95 : 0;
  }
}
