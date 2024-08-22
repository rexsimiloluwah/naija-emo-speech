import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { PostgrestError } from "@supabase/supabase-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomEnumValue<T>(enumObj: T): T[keyof T] {
  // @ts-ignore
  const enumValues = Object.values(enumObj) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}

export function getRandomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function isPostgrestError(error: any): error is PostgrestError {
  return error && typeof error.message === 'string' && typeof error.code === 'string';
}