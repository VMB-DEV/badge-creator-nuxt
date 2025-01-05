import { defineStore } from 'pinia'
import { BadgeClass, IBadge } from '~/utils/badgeClass'
import {LogoType, ResultType, StyleType} from "~/utils/badgeType";

export const useBadgeStore = defineStore('badge', {
    state: (): IBadge => (BadgeClass.DEFAULT_VALUES),
    actions: {

    },
})