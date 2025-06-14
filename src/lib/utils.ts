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