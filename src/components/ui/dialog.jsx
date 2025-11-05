import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export function Dialog({ open, onOpenChange, children }) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DialogPrimitive.Root>
  );
}

export const DialogTrigger = DialogPrimitive.Trigger;

export function DialogContent({ className = "", children }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-sm" />
      <DialogPrimitive.Content
        className={
          "fixed inset-0 z-[100] m-auto max-w-5xl w-[92%] bg-hotline-floor border-4 border-neon-pink p-6 pixel-card " +
          "shadow-[0_0_25px_rgba(255,77,166,0.3)] transition-transform duration-200 ease-out " +
          className
        }
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export const DialogClose = DialogPrimitive.Close;