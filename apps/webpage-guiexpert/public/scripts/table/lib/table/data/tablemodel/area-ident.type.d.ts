/**
 * The AreaIdent is an identifier for the three areas : header, body, and footer.
 */
export type AreaIdent = "header" | "body" | "footer";
/**
 * Converts a string to the identifier of type AreaIdent.
 * @param s should be "header"|"body"|"footer". The fallback return value is 'body'
 */
export declare const getAreaIdentByString: (s: string | null) => AreaIdent;
