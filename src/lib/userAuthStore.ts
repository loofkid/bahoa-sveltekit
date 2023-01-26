import {writable, type Writable} from 'svelte/store';
import type {User} from 'firebase/auth';
import { browser } from '$app/environment';

let localData: string = null;
if (browser) {
    localData = localStorage.getItem('userAuthStore');
}
export const userAuthStore: Writable<User | null> = writable(localData ? JSON.parse(localData) as User : null);