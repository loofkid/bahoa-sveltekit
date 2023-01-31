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

type DocumentData = import("firebase/firestore").DocumentData;

declare interface BasicUserData extends DocumentData {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber?: string;
}

declare interface UserData extends BasicUserData {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber?: string;
    createdAt: import("firebase/firestore").Timestamp;
    updatedAt: import("firebase/firestore").Timestamp;
}

declare interface ProfileData extends BasicUserData {
    emailAddress: string;
    name: string;
    phoneNumber: string;
}