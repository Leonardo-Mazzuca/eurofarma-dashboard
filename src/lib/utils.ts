import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const homeFilterItems = [
  {
    value: "",
    label: "Todas"
  },
  {
    label: "Status: On",
    value: "online"
  },
  {
    label: "Status: Off",
    value: "offline"
  }
]

export const homeLineChartFilter = [
  {
    value: "now",
    label: "Hoje"
  },
  {
    value: "last-10-days",
    label: "Ultimos 10 dias"
  },
  {
    value: "last-15-days",
    label: "Ultimos 15 dias"
  },
  {
    value: "last-30-days",
    label: "Ultimos 30 dias"
  },
]

export const dataLineTimeFilter = [
  {
    value: "all",
    label: "Todas"
  },
  {
    value: "last-10-days",
    label: "Ultimos 10 dias"
  },
  {
    value: "last-15-days",
    label: "Ultimos 15 dias"
  },
  {
    value: "last-30-days",
    label: "Ultimos 30 dias"
  }
]

export const dataTopicFilters = [
  {
    value: "all",
    label: "Todas"
  },
  {
    value: "engajement",
    label: "Engajamento"
  }
]