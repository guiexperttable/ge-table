export interface CryptoTopIf {
  id?: number,
  name: string,
  symbol: string,
  priceInUsd: number,
  change1h: number,
  change24h: number,
  change7d: number,
  change30d: number,
  change60d: number,
  change90d: number,
  marketCapUsd: number,
  volUsd: number,
  volBtc: number,
  circulatingSupply: number,
  maxSupply: number,
  tags: string[],

}
