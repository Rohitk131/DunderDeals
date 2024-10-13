import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractPrice(...elements: any){
  for(const element of elements){
    const priceText = element.text().trim(); 
    if(priceText) return priceText.replace(/\D/g, '');
  }
  return ''; 
}