/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { tailwindConfig } from "$lib/server/tailwindConfig";
import type { LayoutServerLoad } from "./$types";

const tailwindBreakpointsRaw = tailwindConfig!.theme!.screens!;
const tailwindBreakpoints = Object.keys(tailwindBreakpointsRaw).reduce((acc, key) => {
    acc[key] = parseInt((tailwindBreakpointsRaw[key]).replace('px', ''));
    return acc;
}, {} as {[key: string]: number});

const tailwindSizingRaw = tailwindConfig!.theme!.spacing!;
const tailwindSizing = Object.keys(tailwindSizingRaw).reduce((acc, key) => {
    acc[key] = tailwindSizingRaw[key];
    return acc;
}, {} as {[key: number|string]: `${number}rem`});

export const load: LayoutServerLoad = () => {
    return {
        tailwindConfig: tailwindConfig,
        tailwindBreakpoints: tailwindBreakpoints,
        tailwindSizing: tailwindSizing,
    };
};