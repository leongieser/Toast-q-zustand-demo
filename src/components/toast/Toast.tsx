"use client";

import * as ToastPrimitives from "@radix-ui/react-toast";
import { useToast } from "./useToast";
import { cn } from "@/app/lib/utils";
import { ToastVariant } from "./types";
import { Icons } from "../icons";
import { TOAST_DURATION } from "@/constants";

export default function Toast() {
    const { toasts, updateToasts } = useToast();

    return (
        <ToastPrimitives.Provider duration={TOAST_DURATION} swipeDirection="right">
            {toasts.map((toast, idx) => {
                let bgColor = "", fgColor = "", outlineColor = "";
               
                switch (toast.variant) {
                    case ToastVariant.POSITIVE:
                        bgColor = "bg-green-200";
                        fgColor = "text-green-600";
                        outlineColor = "outline-green-600"
                        break;
                    case ToastVariant.ERROR:
                        bgColor = "bg-red-200";
                        fgColor = "text-red-600";
                        outlineColor = "outline-red-600"
                        break;
                    case ToastVariant.WARNING:
                        bgColor = "bg-amber-200";
                        fgColor = "text-amber-600";
                        outlineColor = "outline-amber-600"
                        break;
                    default:
                        bgColor = "bg-zinc-50";
                        fgColor = "text-zinc-600";
                        outlineColor = "outline-zinc-600"
                }

                return (
                    <ToastPrimitives.Root
                        onOpenChange={() => updateToasts()}
                        className={cn("flex items-center justify-between px-5 py-2 gap-5 rounded-md border outline", bgColor, fgColor, outlineColor, "data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut")}
                        key={`${String(idx)}_t`}
                    >
                        <ToastPrimitives.Description className="flex-1 flex items-center">
                            <p className="text-xl">{toast.message}</p>
                        </ToastPrimitives.Description>
                        <ToastPrimitives.Action altText="close" asChild className="flex-shrink-0">
                            <button className="flex justify-center items-center">
                                <Icons.Close />
                            </button>
                        </ToastPrimitives.Action>
                    </ToastPrimitives.Root>
                );
            })}
            <ToastPrimitives.Viewport className="fixed bottom-0 right-[50%] translate-x-2/4 flex flex-col items-center gap-5 p-5 pt-0 z-[2147483647] m-0 min-w-[100vw] shadow-[0px 4px 24px 0px rgba(12, 12, 12, 0.25)]"></ToastPrimitives.Viewport>
        </ToastPrimitives.Provider>
    );
}
