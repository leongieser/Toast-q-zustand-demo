import {create} from "zustand"
import { MAX_TOAST_COUNT } from "@/constants"
import type { Toast } from "./types"

interface ToastState {
    toasts: Toast[]
    queuedToasts: Toast[]
    activeToastCount: number
    addToast: (toast: Toast) => void
    updateToasts: () => void
}

export const useToast = create<ToastState>()((set) => ({
    toasts: [],
    queuedToasts: [],
    activeToastCount: 0,

    addToast: (newToast: Toast) => {
        set((state) => {
            if(state.activeToastCount < MAX_TOAST_COUNT) {
                return {
                    ...state,
                    toasts: [...state.toasts, newToast],
                    activeToastCount: state.activeToastCount + 1
                }
            }
            return {...state, queuedToasts: [...state.queuedToasts, newToast]}
        })
    },
    updateToasts: () =>{
        set((state) => {
            let toasts = [...state.toasts]
            const queuedToasts = [...state.queuedToasts]
            let activeToastCount = state.activeToastCount

            if(queuedToasts.length) {
                const nextToast = queuedToasts.shift()
                if(nextToast) {
                    toasts.push(nextToast)
                }
            } else {
                activeToastCount -= 1
                if(activeToastCount === 0){
                    toasts = []
                }
                
            }
            return {toasts, queuedToasts, activeToastCount}
        })
    }
}))