/// <reference types="w3c-css-typed-object-model-level-1" />

declare interface ServiceFeatures {
    title: string;
    text: string;
    icon: import("@fortawesome/fontawesome-svg-core").IconName;
    toJson(): string;
}


