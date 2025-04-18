import { EventAdapter } from './event-adapter';


export class EventCheckboxChangedHandler extends EventAdapter {

  constructor(
    private readonly onCheckboxChangedCallback: (evt: any[]) => void
  ) {
    super();
    super.onCheckboxChanged = (evt: any[]) => {
      this.onCheckboxChangedCallback(evt);
    };
  }


}