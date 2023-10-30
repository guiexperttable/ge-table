export interface PrizesModel {
  prizes: Prize[];
}

export interface Prize {
  year: string;
  category: string;
  laureates: Laureate[];
}

export interface Laureate {
  id: string;
  firstname?: string;
  surname?: string;
  motivation: string;
  share: string;
}

export interface SimplePrize {
  id: string,
  year: string
  category: string
  laureate: Laureate,
  rowspan: number
}

export class SimplePrizeData implements SimplePrize {
  constructor(
    public id: string,
    public year: string,
    public category: string,
    public laureate: Laureate,
    public rowspan: number = 1
  ) {
  }
}
