interface AvniLogoSVGProps {
  size?: number;
  className?: string;
}

export default function AvniLogoSVG({ size = 200, className = '' }: AvniLogoSVGProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top Left */}
      <rect 
        x="10" 
        y="10" 
        width="35" 
        height="35" 
        rx="17.5" 
        fill="#14B8A6" 
        opacity="0.9"
      />
      {/* Top Right */}
      <rect 
        x="55" 
        y="10" 
        width="35" 
        height="35" 
        rx="17.5" 
        fill="#14B8A6" 
        opacity="0.7"
      />
      {/* Bottom Left */}
      <rect 
        x="10" 
        y="55" 
        width="35" 
        height="35" 
        rx="17.5" 
        fill="#14B8A6" 
        opacity="0.7"
      />
      {/* Bottom Right */}
      <rect 
        x="55" 
        y="55" 
        width="35" 
        height="35" 
        rx="17.5" 
        fill="#14B8A6" 
        opacity="0.9"
      />
    </svg>
  );
}

// Banner version with gradient background
export function AvniBanner({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-video bg-gradient-to-br from-primary-100 via-primary-50 to-secondary-100 flex items-center justify-center ${className}`}>
      <AvniLogoSVG size={150} className="opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
    </div>
  );
}
