import type { ParamMatcher } from '@sveltejs/kit';
 
export const match = ((param) => {
  return /^[12]$/.test(param);
}) satisfies ParamMatcher;