export class GeFilterService {


  filterPredict<T>(
    item: T,
    filterString: string,
    toString: (t: T) => string = this.objectToString.bind(this)
  ): boolean {

    if (!item) {
      return false;
    }
    if (!filterString) {
      return true;
    }
    filterString = filterString.toLowerCase();

    const prefixMust = "+";
    const prefixNot = "-";
    const arr = filterString.toLowerCase().split(" ").filter(s => s !== prefixMust && s !== prefixNot && s !== "");

    const ors: string[] = arr
      .filter(f => !f.startsWith(prefixMust) && !f.startsWith(prefixNot));

    const musts: string[] = arr
      .filter(f => f.startsWith(prefixMust))
      .map(s => s.replace(/\+/g, ""));

    const nots: string[] = arr
      .filter(f => f.startsWith(prefixNot))
      .map(s => s.replace(/-/g, ""));

    let or = !ors.length;
    for (let i = 0; i < ors.length; i++) {
      if (or || toString(item).includes(ors[i])) {
        or = true;
      }
    }
    if (!or) {
      return false;
    }
    for (let i = 0; i < musts.length; i++) {
      if (!toString(item).includes(musts[i])) {
        return false;
      }
    }
    for (let i = 0; i < nots.length; i++) {
      if (toString(item).includes(nots[i])) {
        return false;
      }
    }
    return true;
  }


  filterRows<T>(
    rows: T[],
    filterString: string,
    toString: (t: T) => string = (t: T) => JSON.stringify(t).toLowerCase()
  ): T[] {

    if (!rows) {
      return [];
    }
    if (!filterString) {
      return [...rows];
    }
    filterString = filterString.toLowerCase();

    const prefixMust = "+";
    const prefixNot = "-";
    const arr = filterString.toLowerCase().split(" ").filter(s => s !== prefixMust && s !== prefixNot && s !== "");

    const ors: string[] = arr
      .filter(f => !f.startsWith(prefixMust) && !f.startsWith(prefixNot));

    const musts: string[] = arr
      .filter(f => f.startsWith(prefixMust))
      .map(s => s.replace(/\+/g, ""));

    const nots: string[] = arr
      .filter(f => f.startsWith(prefixNot))
      .map(s => s.replace(/-/g, ""));

    return rows?.filter(f => {
      let or = !ors.length;
      for (let i = 0; i < ors.length; i++) {
        if (or || toString(f).includes(ors[i])) {
          or = true;
        }
      }
      if (!or) {
        return false;
      }
      for (let i = 0; i < musts.length; i++) {
        if (!toString(f).includes(musts[i])) {
          return false;
        }
      }
      for (let i = 0; i < nots.length; i++) {
        if (toString(f).includes(nots[i])) {
          return false;
        }
      }
      return true;
    });
  }

  objectToString<T>(o: T): string {
    if (!o) {
      return "";
    }
    const buf: unknown[] = [];
    const keys = Object.keys(o);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      // @ts-ignore
      buf.push(o[key]);
    }
    return buf.join(" ").toLowerCase();
  }

}
