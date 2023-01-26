/// <reference types="svelte-motion" />

declare interface ServiceFeatures {
    title: string;
    text: string;
    icon: import("@fortawesome/fontawesome-svg-core").IconName;
    toJson(): string;
}

declare interface SignUpData {
    email: string;
    password: string;
    name: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
}