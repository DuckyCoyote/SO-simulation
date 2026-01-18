interface TaskBarProps {
  onStartClick: () => void;
  openWindows: Array<{ id: string; title: string; icon: string }>;
  activeWindow: string | null;
  onWindowClick: (id: string) => void;
}

export function TaskBar({ onStartClick, openWindows, activeWindow, onWindowClick }: TaskBarProps) {
  const now = new Date();
  const timeString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] border-t-2 border-t-white flex items-center px-1 gap-1">
      {/* Start Button */}
      <button
        onClick={onStartClick}
        className="h-8 px-3 bg-[#c0c0c0] border-2 flex items-center gap-2 shadow-[inset_1px_1px_0_0_#ffffff,inset_-1px_-1px_0_0_#808080] hover:shadow-[inset_1px_1px_0_0_#dfdfdf] active:shadow-[inset_-1px_-1px_0_0_#ffffff,inset_1px_1px_0_0_#000000]"
      >
        <span className="text-xl">🪟</span>
        <span style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}>Inicio</span>
      </button>

      {/* Open Windows */}
      <div className="flex-1 flex gap-1">
        {openWindows.map((window) => (
          <button
            key={window.id}
            onClick={() => onWindowClick(window.id)}
            className={`h-8 px-3 bg-[#c0c0c0] border-2 flex items-center gap-1 max-w-[200px] ${
              activeWindow === window.id
                ? 'shadow-[inset_-1px_-1px_0_0_#ffffff,inset_1px_1px_0_0_#808080]'
                : 'shadow-[inset_1px_1px_0_0_#ffffff,inset_-1px_-1px_0_0_#808080]'
            }`}
          >
            <span>{window.icon}</span>
            <span className="truncate" style={{ fontFamily: 'VT323, monospace', fontSize: '18px' }}>
              {window.title}
            </span>
          </button>
        ))}
      </div>

      {/* Clock */}
      <div className="h-8 px-3 border border-[#808080] shadow-[inset_-1px_-1px_0_0_#ffffff,inset_1px_1px_0_0_#808080] flex items-center">
        <span style={{ fontFamily: 'VT323, monospace', fontSize: '18px' }}>{timeString}</span>
      </div>
    </div>
  );
}
