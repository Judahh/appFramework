export class Maker {
  static set(element: string, value: string) {
    // tslint:disable-next-line: no-eval
    eval(element + '=' + value);
  }

  static run(element: string, functionToRun?: string) {
    if (functionToRun)
      // tslint:disable-next-line: no-eval
      return eval(element + '.' + functionToRun);
    // tslint:disable-next-line: no-eval
    return eval(element);
  }
}
