"use client";

import { useToast, ToastVariant } from "@/components/toast";
import Button from "@/components/button";

export const ToastDemo = () => {
  const { addToast, queuedToasts } = useToast();

  const handleClick = (variant?: string) => {
    let toastVariant: ToastVariant | undefined;

    switch (variant) {
      case "positive":
        toastVariant = ToastVariant.POSITIVE;
        break;
      case "warning":
        toastVariant = ToastVariant.WARNING;
        break;
      case "error":
        toastVariant = ToastVariant.ERROR;
        break;
      case "neutral":
        toastVariant = ToastVariant.NEUTRAL;
        break;
      default:
        toastVariant = undefined;
    }

    addToast({
      message: `${
        variant ? variant.charAt(0).toUpperCase() + variant.slice(1) : "Default"
      } Message`,
      variant: toastVariant,
    });
  };

  return (
    <section className="flex flex-col gap-6 items-center">
      <div className="flex gap-5">
        <Button color="positive" onClick={() => handleClick("positive")}>
          Positive
        </Button>
        <Button color="warning" onClick={() => handleClick("warning")}>
          Warning
        </Button>
        <Button color="error" onClick={() => handleClick("error")}>
          Error
        </Button>
        <Button color="neutral" onClick={() => handleClick("neutral")}>
          Neutral
        </Button>
        <Button onClick={() => handleClick()}>Default</Button>
      </div>
      <p className="text-2xl">Toasts in queue: {queuedToasts.length}</p>
    </section>
  );
};
