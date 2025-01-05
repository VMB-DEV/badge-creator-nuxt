import { defineStore } from 'pinia'
import { BadgeClass, IBadge } from '~/utils/badgeClass'
import {LogoType, ResultType, StyleType} from "~/utils/badgeType";

export const useBadgeStore = defineStore('badge', {
    state: (): IBadge => BadgeClass.DEFAULT_VALUES,
    actions: {
        updateClassicalLogo(logo: string) {
            // console.info(logo)
            this.classicLogo = logo
            // this.$patch(
            //     classicLogo: logo,
            // )
        }
    },
})