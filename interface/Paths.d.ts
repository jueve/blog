type Params = Record<string, Record<string, string>>;

export interface Paths {
  paths: Array<Params>;
  fallback: boolean;
}
