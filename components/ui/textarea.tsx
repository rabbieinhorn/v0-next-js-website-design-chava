import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] placeholder:text-[rgba(242,244,247,0.45)] focus-visible:border-[rgba(255,255,255,0.18)] focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-lg border text-foreground px-3 py-2 text-base shadow-none transition-[color,box-shadow,border-color] outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
