import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function formatCurrency(amount: number) {
//   const finalValue = convertAmountFromMilliunits(amount);
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
//   }).format(finalValue);
// }

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

export function convertAmountFromMilliunits(amount: number) {
  return amount / 1000;
}

export function convertAmountToMilliunits(amount: number) {
  return Math.round(amount * 1000)
}
