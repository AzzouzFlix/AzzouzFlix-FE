import { TranslocoService } from '@ngneat/transloco';
import { GeneralInteractions } from '../general-interactions/general-interactions';

export abstract class formInteractions extends GeneralInteractions {
  constructor(transloco: TranslocoService) {
    super(transloco);
  }


}
