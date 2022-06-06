import { TranslocoService } from '@ngneat/transloco';

export abstract class GeneralInteractions {
  constructor(
    private transloco: TranslocoService
  ) {}

  /**
   * add values to a transloco message
   * @param translocoPath
   * @param values
   * @returns
   */
  customTranslocoMessage(
    translocoPath: string,
    values: Array<number | string>
  ): string {
    let translatedMessage = this.transloco.translateObject(translocoPath);
    values.forEach((value: string | number) => {
      translatedMessage = translatedMessage.replace('VALUE', value);
    });
    return translatedMessage;
  }

  /**
   * check if an element is defined
   * @param element
   * @returns
   */
  isEmpty(element: any): boolean {
    return (
      element === null ||
      element === undefined ||
      (typeof element === 'string' && element === '')
    );
  }


}
