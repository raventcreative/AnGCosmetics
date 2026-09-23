import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  error?: string;
  hint?: string;
  id: string;
} & ComponentProps<"input">;

/** Tinggi 44px, background white, border line 1px, radius-sm. */
export function Input({ label, error, hint, id, className, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-[13px] font-semibold text-cocoa">
          {label}
        </label>
      )}
      <input
        id={id}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(
          "h-11 w-full border bg-paper px-4 text-body text-cocoa placeholder:text-cocoa-soft",
          "focus:border-[1.5px] focus:border-blossom-deep focus:outline-none",
          error ? "border-error" : "border-hairline",
          className,
        )}
        {...rest}
      />
      {error ? (
        <p id={`${id}-error`} className="text-caption text-error">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-caption text-cocoa-soft">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function Textarea({
  label,
  id,
  className,
  ...rest
}: { label?: string; id: string } & ComponentProps<"textarea">) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-[13px] font-semibold text-cocoa">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "min-h-[110px] w-full border border-hairline bg-paper px-4 py-3 text-body text-cocoa placeholder:text-cocoa-soft",
          "focus:border-[1.5px] focus:border-blossom-deep focus:outline-none",
          className,
        )}
        {...rest}
      />
    </div>
  );
}
