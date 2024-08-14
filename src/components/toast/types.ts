
export type Toast = {
    message: string,
    variant?: ToastVariant,
}

export enum ToastVariant {
    POSITIVE = "positive",
    WARNING = "warning",
    ERROR = "error",
    NEUTRAL = "neutral"
}