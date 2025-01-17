export enum LogoType {
    none =  "no",
    normal = "normal",
    custom = "custom",
}
export enum ResultType {url, markdown, rSt, AsciiDoc, HTML}
export enum StyleType {
    flat = "flat",
    flatSquare = "flat-square",
    plastic = "plastic",
    forTheBadge = "for-the-badge",
    social = "social",
}

export interface IBadge {
    b64Logo: string
    classicLogo: string
    labels: string[]
    labelsNumber: number
    leftPartBGColor: string
    logoFGColor: string
    logoType: LogoType
    resultType: ResultType
    rightPartBGColor: string
    style: StyleType
    url: string
    result: string
}

// export interface String {
//     matchHexColor(): boolean;
// }
//
// String.prototype.matchHexColor = function(): boolean {
//     return this.match(/^[0-9a-fA-F]{3,6}$/)
//     // return /^#[0-9A-F]{6}$/i.test(this.toString());
// };
