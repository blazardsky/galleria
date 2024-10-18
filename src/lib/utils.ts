import type { ImageProps } from "@/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getPlaceholderBlurData(image:ImageProps) {
  const response = await fetch(`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_thumb,w_8,q_70,f_jpg/v1729203103/${image.public_id}.${image.format}`);
  const arrayBuffer = await response.arrayBuffer();

  return `data:image/jpeg;base64,${Buffer.from(arrayBuffer).toString("base64")}`
}