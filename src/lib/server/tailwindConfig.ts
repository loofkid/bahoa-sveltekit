import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigFile from '../../../tailwind.config.mjs';

export const tailwindConfig = resolveConfig(tailwindConfigFile);