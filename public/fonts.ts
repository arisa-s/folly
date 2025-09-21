// Font configurations for the Folly project
export const fonts = {
  primary: "font-primary", // Sneaky Times
  secondary: "font-secondary", // Satoshi Bold
  accent: "font-accent", // Folly Satoshi
} as const;

// Font family names for direct CSS usage
export const fontFamilies = {
  primary: "Sneaky Times, serif",
  secondary: "Satoshi Bold, sans-serif",
  accent: "Folly Satoshi, sans-serif",
} as const;

// Tailwind CSS classes
export const fontClasses = {
  primary: "font-primary",
  secondary: "font-secondary",
  accent: "font-accent",
} as const;

// Color configurations for the Folly project
export const colors = {
  white: "folly-white",
  red: "folly-red",
  blue: "folly-blue",
  yellow: "folly-yellow",
} as const;

// Color hex values for direct CSS usage
export const colorValues = {
  white: "#fefaf2",
  red: "#60202e",
  blue: "#69acc2",
  yellow: "#cab63c",
} as const;

// Tailwind CSS color classes
export const colorClasses = {
  white: "text-folly-white",
  red: "text-folly-red",
  blue: "text-folly-blue",
  yellow: "text-folly-yellow",
} as const;

// Background color classes
export const bgColorClasses = {
  white: "bg-folly-white",
  red: "bg-folly-red",
  blue: "bg-folly-blue",
  yellow: "bg-folly-yellow",
} as const;
