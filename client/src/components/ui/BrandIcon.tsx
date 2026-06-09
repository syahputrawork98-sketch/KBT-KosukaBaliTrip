import * as React from "react"

export interface BrandIconProps extends React.SVGProps<SVGSVGElement> {
  name: string
  size?: number | string
}

export function BrandIcon({ name, size = 24, className, ...props }: BrandIconProps) {
  const iconName = name.toLowerCase()

  // Clean, outline, minimal line icons with rounded strokes.
  // Stroke width is set to 2 by default, strokeLinecap="round" and strokeLinejoin="round".
  // Colors default to stroke="currentColor" and fill="none".
  const baseSvgProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    ...props,
  }

  switch (iconName) {
    case "map-pin":
    case "pin":
      return (
        <svg {...baseSvgProps}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    case "compass":
      return (
        <svg {...baseSvgProps}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      )
    case "route":
    case "route-line":
      return (
        <svg {...baseSvgProps}>
          <circle cx="6" cy="19" r="3" />
          <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
          <circle cx="18" cy="5" r="3" />
        </svg>
      )
    case "car":
      return (
        <svg {...baseSvgProps}>
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M5 17h10" />
        </svg>
      )
    case "van":
      return (
        <svg {...baseSvgProps}>
          <path d="M14 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v6h-2" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
          <path d="M9 18h6" />
          <path d="M19 14h3v-2.5a2.5 2.5 0 0 0-1.5-2.3L17 8" />
          <line x1="14" x2="14" y1="6" y2="13" />
          <line x1="4" x2="14" y1="11" y2="11" />
        </svg>
      )
    case "suitcase":
    case "luggage":
      return (
        <svg {...baseSvgProps}>
          <rect width="16" height="12" x="4" y="7" rx="2" />
          <path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" />
          <path d="M12 11v4" />
          <path d="M8 11v4" />
          <path d="M16 11v4" />
        </svg>
      )
    case "plane":
      return (
        <svg {...baseSvgProps}>
          <path d="M17.8 20.2a2.9 2.9 0 0 0 4-4L14.7 9.1a2 2 0 0 0-2.8 0L9.8 11a1 1 0 0 0-.2.4L7.5 16l-3.3.8a1 1 0 0 0-.6 1.4l1.2 2a1 1 0 0 0 1.3.4l3-.8 4.2 4.2c.4.4 1 .4 1.4 0l2.6-2.6a1 1 0 0 0 .5-1.2Z" />
          <path d="M20 4v2" />
          <path d="M22 6h-2" />
          <path d="M12 3v1" />
          <path d="M18 10h-1" />
        </svg>
      )
    case "users":
      return (
        <svg {...baseSvgProps}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case "heart":
      return (
        <svg {...baseSvgProps}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    case "message":
    case "chat":
      return (
        <svg {...baseSvgProps}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    case "phone":
      return (
        <svg {...baseSvgProps}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    case "send":
      return (
        <svg {...baseSvgProps}>
          <line x1="22" x2="11" y1="2" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      )
    case "sun":
      return (
        <svg {...baseSvgProps}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
      )
    case "wave":
    case "waves":
      return (
        <svg {...baseSvgProps}>
          <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.6 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        </svg>
      )
    case "leaf":
      return (
        <svg {...baseSvgProps}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.58 1 9.3A7 7 0 0 1 11 20z" />
          <path d="M19 2c-2.26 4.33-5.27 7.14-8 10" />
        </svg>
      )
    case "mountain":
      return (
        <svg {...baseSvgProps}>
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
      )
    case "camera":
      return (
        <svg {...baseSvgProps}>
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      )
    case "image":
      return (
        <svg {...baseSvgProps}>
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      )
    case "check":
    case "checklist":
      return (
        <svg {...baseSvgProps}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )
    case "sliders":
    case "settings":
      return (
        <svg {...baseSvgProps}>
          <line x1="4" x2="4" y1="21" y2="14" />
          <line x1="4" x2="4" y1="10" y2="3" />
          <line x1="12" x2="12" y1="21" y2="12" />
          <line x1="12" x2="12" y1="8" y2="3" />
          <line x1="20" x2="20" y1="21" y2="16" />
          <line x1="20" x2="20" y1="12" y2="3" />
          <line x1="2" x2="6" y1="14" y2="14" />
          <line x1="10" x2="14" y1="8" y2="8" />
          <line x1="18" x2="22" y1="16" y2="16" />
        </svg>
      )
    case "calendar":
      return (
        <svg {...baseSvgProps}>
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      )
    case "shield":
    case "shield-check":
      return (
        <svg {...baseSvgProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 11 2 2 4-4" />
        </svg>
      )
    case "clock":
      return (
        <svg {...baseSvgProps}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    case "flag":
      return (
        <svg {...baseSvgProps}>
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
      )
    case "temple":
      return (
        <svg {...baseSvgProps}>
          {/* A simple clean layered temple/pagoda roof line icon */}
          <path d="M12 2v3M6 5h12M4 9h16M2 13h20M5 13v8M19 13v8M8 21h8" />
          <path d="M7 9l1-4h8l1 4" />
          <path d="M5 13l1-4h12l1 4" />
          <path d="M10 13v4h4v-4" />
        </svg>
      )
    case "wave-sun":
    case "sun-wave":
      return (
        <svg {...baseSvgProps}>
          <path d="M12 2a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Z" />
          <path d="M12 2v1" />
          <path d="M6 7H5" />
          <path d="M19 7h-1" />
          <path d="M7.75 3.75l.5.5" />
          <path d="M16.25 3.75l-.5.5" />
          <path d="M2 13c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        </svg>
      )
    case "sparkle-pin":
      return (
        <svg {...baseSvgProps}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <path d="m12 6 .5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5Z" />
        </svg>
      )
    default:
      // Fallback to simple compass/map-pin style
      return (
        <svg {...baseSvgProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="16" />
          <line x1="8" x2="16" y1="12" y2="12" />
        </svg>
      )
  }
}
