import { defineStore } from 'pinia'
import { BadgeClass, IBadge } from '~/utils/badgeClass'
import {LogoType, ResultType, StyleType} from "~/utils/badgeType";

export const useBadgeStore = defineStore('badge', {
    state: (): IBadge => BadgeClass.DEFAULT_VALUES,
    actions: {
        updateClassicalLogo(logo: string) {
            this.classicLogo = logo ;
            this.updateBadge();
        },
        updateLogoColor(color: string) {
            this.logoFGColor = color;
            this.updateBadge();
        },
        updateLeftPartColor(color: string) {
            this.leftPartBGColor = color;
            this.updateBadge();
        },
        updateRightPartColor(color: string) {
            this.rightPartBGColor = color;
            this.updateBadge();
        },
        updateB64Logo(b64Logo: string) {
            this.b64Logo = b64Logo;
            this.updateBadge();
        },
        updateBadge() {
            this.updateUrl();
            this.updateResult();
        },
        updateUrl() {
            const stylePart: string = "style=" + this.style;
            const logoBGColorPart: string = "&labelColor=" + this.leftPartBGColor;
            const logoColorPart: string = "&logoColor=" + this.logoFGColor;
            let logoPart: string = "&logo=";
            switch(this.logoType) {
                case LogoType.normal: logoPart += this.classicLogo; break;
                case LogoType.none: logoPart = ""; break;
                case LogoType.custom: logoPart += "data:image/svg%2bxml;base64," + this.b64Logo; break;
            }
            let text: string = "";
            if (this.labelsNumber > 0) {text += this.labels.slice(0, this.labelsNumber).join('-')}
            const baseUrl: string = "https://img.shields.io/badge/";
            this.url = `${baseUrl}${text}-${this.rightPartBGColor}.svg?${stylePart}${logoBGColorPart}${logoColorPart}${logoPart}`
        },
        updateResult() {
            // this.updateUrl();
            switch (this.resultType) {
                case ResultType.url:
                    this.result = this.url; break
                case ResultType.markdown:
                    this.result = `![Static Badge](${this.url})`; break;
                case ResultType.rSt:
                    this.result = `image:: ${this.url}\n:alt: Static Badge\nCommunity`; break;
                case ResultType.AsciiDoc:
                    this.result = `image:${this.url}[Static Badge]`; break;
                case ResultType.HTML:
                    this.result = '<img src=\"' + this.url + '\" alt=\"' + this.labels.join(" ") + "\"/>"; break;
            }
        }
    },

})