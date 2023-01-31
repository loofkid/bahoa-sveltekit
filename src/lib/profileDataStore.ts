import { writable, type Writable } from "svelte/store";

export const profileStore: Writable<ProfileData> = writable({
    emailAddress: "",
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phoneNumber: "",
} as ProfileData);