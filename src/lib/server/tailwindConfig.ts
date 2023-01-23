import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigFile from '$lib/assets/tailwind.config.mjs';

export const tailwindConfig = resolveConfig(tailwindConfigFile);