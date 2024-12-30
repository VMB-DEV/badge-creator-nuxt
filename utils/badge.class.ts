interface IBadge {
    rightPartBGColor: string;
    leftPartBGColor: string;
    logoFGColor: string;
    labelsNumber: number;
    b64Logo: string;
    classicLogo: string;
    style: StyleType;
    resultType: ResultType;
    logoType: LogoType;
    labels: String[];
    url: string;
}

export class BadgeClass implements IBadge {
    public b64Logo: string;
    public classicLogo: string;
    public labels: String[];
    public labelsNumber: number;
    public logoFGColor: string;
    public leftPartBGColor: string;
    public rightPartBGColor: string;
    public logoType: LogoType;
    public resultType: ResultType;
    public style: StyleType;
    public url: string;

    static readonly DEFAULT_VALUES: IBadge = {
        rightPartBGColor: "A81D33",
        leftPartBGColor: "101010",
        logoFGColor: "A81D33",
        labelsNumber: 2,
        b64Logo: "PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU",
        classicLogo: "debian",
        style: StyleType.flat,
        logoType: LogoType.custom,
        resultType: ResultType.HTML,
        labels: ["debian", "expert"],
        url: "",
    };

    constructor(params: Partial<IBadge> = {}) {
        const config = { ...BadgeClass.DEFAULT_VALUES, ...params };
        this.validateConfig(config);

        this.rightPartBGColor = config.rightPartBGColor;
        this.leftPartBGColor = config.leftPartBGColor;
        this.logoFGColor = config.logoFGColor;
        this.labelsNumber = config.labelsNumber;
        this.classicLogo = config.classicLogo;
        this.labels = config.labels;
        this.style = config.style;
        this.logoType = config.logoType;
        this.updateUrl();
    }

    private validateConfig(config: IBadge): void {
        if (config.labelsNumber < 0 || 2 < config.labelsNumber) {
            throw new Error("Labels number must between 0 and 2");
        }
        [config.rightPartBGColor, config.leftPartBGColor, config.logoFGColor].forEach((value) => {
            if (!value.matchHexColor()) {
                throw new Error(`Invalid color format : ${value}`);
            }
        })
    }

    public updateConfig(params: Partial<IBadge>): void {
        const newConfig = { ...this, ...params };
        this.validateConfig(newConfig);
        Object.assign(this, newConfig);
        this.updateUrl();
    }

    private updateUrl() {
        const stylePart: string = "style=" + this.style;
        const logoBGColorPart: string = "&labelColor=" + this.leftPartBGColor;
        const logoColorPart: string = "&logoColor=" + this.logoFGColor;
        const logoPart: string = this.getUrlLogoPart();
        let text: string = "";
        if (this.labelsNumber > 0) {text += this.labels.slice(0, this.labelsNumber).join('-')}
        const baseUrl: string = "https://img.shields.io/badge/";
        this.url = `${baseUrl}${text}-${this.rightPartBGColor}.svg?${stylePart}${logoBGColorPart}${logoColorPart}${logoPart}`
    }

    private getUrlLogoPart(): string {
        let logoPart: string = "&logo=";
        switch(this.logoType) {
            case LogoType.normal:
                logoPart += this.classicLogo;
                break;
            case LogoType.custom:
                const b64Prefix: string = "data:image/svg%2bxml;base64,";
                logoPart += b64Prefix + this.b64Logo ;
                break;
            case LogoType.none:
                logoPart = "";
                break;
        }
        return logoPart;
    }

    getResult(): string {
        this.updateUrl();
        switch (this.resultType) {
            case ResultType.url:
                return this.url
            case ResultType.markdown:
                return `![Static Badge](${this.url})`;
            case ResultType.rSt:
                return `image:: ${this.url}\n:alt: Static Badge\nCommunity`;
            case ResultType.AsciiDoc:
                return `image:${this.url}[Static Badge]`;
            case ResultType.HTML:
                return `<img src=${this.url} alt={labels.join(" ")} />`;
        }
    }
}
