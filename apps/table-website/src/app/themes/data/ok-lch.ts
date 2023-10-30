export class OkLch {

  constructor(
    public l: number,
    public c: number,
    public h: number,
    public a: number = 100
  ) {
  }

  toCssString(): string {
    if (this.a === 100) {
      return `oklch(${this.l}% ${this.c} ${this.h})`; // oklch(35% 0.25 51)
    }
    return `oklch(${this.l}% ${this.c} ${this.h} / ${this.a}%)`; // oklch(35% 0.25 51 / 45.5%)
  }

}

