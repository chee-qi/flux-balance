"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export interface ChartConfig {
  [key: string]: {
    label: string
    color?: string
  }
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

export function ChartContainer({
  config,
  className,
  children,
  ...props
}: ChartContainerProps) {
  return (
    <div
      className={cn("chart-container relative", className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface ChartTooltipProps {
  content: React.ReactNode
}

export function ChartTooltip({ content }: ChartTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {/* Tooltip trigger */}
        </TooltipTrigger>
        <TooltipContent>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  nameKey?: string
  labelFormatter?: (value: any) => string
}

export function ChartTooltipContent({
  nameKey,
  labelFormatter,
  className,
  ...props
}: ChartTooltipContentProps) {
  return (
    <div className={cn("chart-tooltip-content", className)} {...props} />
  )
} 