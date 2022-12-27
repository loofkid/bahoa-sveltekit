declare interface ServiceFeatures {
    title: string;
    text: string;
    icon: import("@fortawesome/fontawesome-svg-core").IconName;
    toJson(): string;
}