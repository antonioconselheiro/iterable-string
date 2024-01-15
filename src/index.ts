/**
 * Iterate a string using regular expressions.
 * Allows you to customize string data formats, allows you to
 * customize ways of reading data saved in a unconventional format.
 */
export class IterableString {

  private cursor = 0;

  constructor(
    private str: string
  ) { }

  /**
   * Show the cursor position
   */
  get currenPosition(): number {
    return this.cursor;
  }

  /**
   * Return the substring in it current cursor position
   */
  toString(): string {
    return this.str.substring(this.cursor);
  }

  valueOf(): string {
    return this.str.substring(this.cursor);
  }

  /**
   * Return the original string
   */
  getOriginalString(): string {
    return this.str;
  }

  /**
   * Move the cursor and return the result.
   * 
   * A numeric argument will return the piece between current position and the number.
   * A regex argument will match the content after the cursor position.
   * A string argument will me cast into a regex argument.
   * 
   * All regex must start with ^, matching the regular expression only if the content
   * is starting from the current cursor position. 
   */
  addCursor(param?: number | string | RegExp, autoTrimResult = true): string {
    let result = '';
    if (typeof param === 'number') {
      result = this.addCursorNumeric(param);
    } else if (typeof param === 'string') {
      result = this.addCursorRegExp(new RegExp(param));
    } else if (param instanceof RegExp) {
      result = this.addCursorRegExp(param);
    } else {
      result = this.addCursorNumeric();
    }

    if (autoTrimResult) {
      return result.trim();
    } else {
      return result;
    }
  }

  /**
   * Return match result without move cursor
   */
  spy(param?: number | string | RegExp, autoTrimResult = true): string {
    let result = '';
    if (typeof param === 'number') {
      result = this.spyNumeric(param);
    } else if (typeof param === 'string') {
      result = this.spyRegExp(new RegExp(param));
    } else if (param instanceof RegExp) {
      result = this.spyRegExp(param);
    } else {
      result = this.spyNumeric();
    }

    if (autoTrimResult) {
      return result.trim();
    } else {
      return result;
    }
  }

  private spyNumeric(howMuchMore = 1): string {
    return this.str.substring(this.cursor, this.cursor + howMuchMore);
  }

  private spyRegExp(pattern: RegExp): string {
    const matches = String(this).match(pattern);
    return matches && matches.length && matches[0] || '';
  }

  /**
   * Move the cursor that's iterating the string.
   * All regex must start with ^, matching the regular
   * expression only if the content is starting from
   * the current cursor position.
   */
  private addCursorRegExp(pattern: RegExp): string {
    if (!String(pattern).match(/^\/\^/)) {
      throw new Error(
        `all regexp used to move the cursor in the iterable string must start with ^. Entry regex: "${String(pattern)}"`
      );
    }

    const match = this.spyRegExp(pattern);

    return this.addCursorNumeric(match.length || 0);
  }

  /**
   * If find an match with the regexp argument, it return the match and move the cursor
   */
  private addCursorNumeric(howMuchMore = 1): string {
    const piece = this.spyNumeric(howMuchMore);
    this.cursor += howMuchMore;

    return piece;
  }

  /**
   * @returns string
   * returns all the content from the cursor to the end
   */
  toTheEnd(): string {
    const content = this.str.substring(this.cursor);
    this.cursor += content.length;
    return content;
  }

  /**
   * @returns boolean
   * Returns true if reached to the string length
   * or if there is nothing more but spaces and lines breaks
   */
  endContent(): boolean {
    return this.end() || !!this.spy(/^\s*$/, false);
  }

  /**
   * @returns boolean
   * Returns true if reached to the string length
   */
  end(): boolean {
    return this.str.length <= this.cursor;
  }
}
