import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { PrizesModel, SimplePrize, SimplePrizeData } from "./prizes.model";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: "root"
})
export class PrizesDemoService {

  private static readonly config = {
    getShortcutActionMappingUrl: "assets/demo/prize.json"
  };


  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  static forRoot(config: { [key: string]: string }) {
    Object.assign(PrizesDemoService.config, config);
  }

  getSimplePrizes(): Observable<SimplePrize[]> {
    return this.httpClient
      .get<PrizesModel>(PrizesDemoService.config.getShortcutActionMappingUrl)
      .pipe(
        map((value) => {
          const ret: SimplePrize[] = [];
          let idx = 0;
          for (const prize of value.prizes) {
            if (prize.laureates) {
              for (let i = 0; i < prize.laureates.length; i++) {
                const laureate = prize.laureates[i];
                if (!laureate.firstname) {
                  laureate.firstname = "";
                }
                if (!laureate.surname) {
                  laureate.surname = "";
                }
                const rowspan = i === 0 ? prize.laureates.length : 1;
                ret.push(new SimplePrizeData("id_" + idx++, prize.year, prize.category, laureate, rowspan));
              }
            }
          }
          return ret;
        })
      );
  }

}
