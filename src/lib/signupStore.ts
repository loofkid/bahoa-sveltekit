import { writable, type Writable } from 'svelte/store';

export const signupStore: Writable<SignUpData> = writable({
    email: '',
    password: '',
    name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
} as SignUpData);