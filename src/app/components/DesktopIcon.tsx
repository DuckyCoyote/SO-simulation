interface DesktopIconProps {
  icon: string;
  label: string;
  onClick: () => void;
}

export function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
      onDoubleClick={onClick}
      className="flex flex-col items-center gap-1 p-2 w-24 hover:bg-[#000080]/20 focus:bg-[#000080] focus:text-white rounded group"
    >
      <div className="text-5xl">{icon}</div>
      <span
        className="text-center text-white text-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] group-focus:text-shadow-none"
        style={{ fontFamily: 'VT323, monospace', fontSize: '18px' }}
      >
        {label}
      </span>
    </button>
  );
}
