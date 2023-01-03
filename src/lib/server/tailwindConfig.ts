import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigFile from '../../../static/tailwind.config.mjs';

export const tailwindConfig = resolveConfig(tailwindConfigFile);