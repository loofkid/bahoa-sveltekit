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

declare type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 
    'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 
    'tel' | 'text' | 'time' | 'url' | 'week' | 'select';

declare type InputMode = 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

declare type InputAutocomplete = 'off' | 'on' | 'name' | 'honorific-prefix' | 'given-name' | 
    'additional-name' | 'family-name' | 'honorific-suffix' | 'nickname' | 
    'email' | 'username' | 'new-password' | 'current-password' | 'one-time-code' | 
    'organization-title' | 'organization' | 'street-address' | 'address-line1' | 
    'address-line2' | 'address-line3' | 'address-level4' | 'address-level3' | 
    'address-level2' | 'address-level1' | 'country' | 'country-name' | 'postal-code' | 
    'cc-name' | 'cc-additional-name' | 'cc-family-name' | 'cc-number' | 'cc-exp' | 'cc-exp-month' | 
    'cc-exp-year' | 'cc-csc' | 'cc-type' | 'transaction-currency' | 'transaction-amount' | 
    'language' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'sex' | 'tel' | 'tel-country-code' | 
    'tel-national' | 'tel-area-code' | 'tel-local' | 'tel-local-prefix' | 'tel-local-suffix' | 
    'tel-extension' | 'impp' | 'url' | 'photo';

declare type InputAutocorrect = 'on' | 'off';

declare type InputAutocapitalize = 'on' | 'off' | 'none' | 'sentences' | 'words' | 'characters';