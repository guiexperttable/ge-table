import { SyncDataService } from "./sync-data.service";
import { takeWhile } from "rxjs/operators";
import { TableApi } from "@guiexpert/table";


export class SyncCssService extends SyncDataService<Array<[string, string]>> {

  constructor(hash: string) {
    super(hash);
  }

  sync(nativeElement: any, gettableApi: () => TableApi | undefined, predicate: () => boolean) {
    this.received$
      .pipe(
        takeWhile(predicate)
      )
      .subscribe(arr => {
        arr.forEach(k => {
          nativeElement.style.setProperty(k[0], k[1]);
        });
        gettableApi()?.repaint();
      });
  }

}
