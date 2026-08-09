import './Divider.css'

interface DividerProps {
  iconUrl?: string;
  iconAlt?: string;
  lineWidth?: string;
  thickness?: string;
  className?: string;
}

export default function Divider({ iconUrl, iconAlt="", lineWidth, thickness, className}:DividerProps) {
  return(
    <div
      className={`divider ${className}`}
      style={{
        ["--divider-line-width" as any]: lineWidth,
        ["--divider-thickness" as any]: thickness,
      }}
    >
      <span className="divider__line" />
      {iconUrl && (
        <>
          <img className='divider__icon' src={iconUrl} alt={iconAlt} />
          <span className='divider__line'/>
        </>
      )}
    </div>
  );
}