import { X, Minimize, Square } from 'lucide-react';
import { useState } from 'react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
  onClose?: () => void;
  defaultPosition?: { x: number; y: number };
  zIndex?: number;
  onFocus?: () => void;
}

export function Window({ 
  title, 
  children, 
  icon = "📁", 
  onClose, 
  defaultPosition = { x: 100, y: 100 },
  zIndex = 1,
  onFocus
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) return null;

  return (
    <div
      className="absolute bg-[#c0c0c0] border-2 flex flex-col shadow-[inset_1px_1px_0_0_#ffffff,inset_-1px_-1px_0_0_#808080]"
      style={{
        left: isMaximized ? 0 : defaultPosition.x,
        top: isMaximized ? 0 : defaultPosition.y,
        width: isMaximized ? '100%' : 'auto',
        height: isMaximized ? 'calc(100% - 40px)' : 'auto',
        zIndex,
        minWidth: '300px',
        maxWidth: isMaximized ? '100%' : '800px',
      }}
      onClick={onFocus}
    >
      {/* Title Bar */}
      <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] px-1 py-0.5 flex items-center justify-between cursor-move">
        <div className="flex items-center gap-1">
          <span className="text-base">{icon}</span>
          <span className="text-white" style={{ fontFamily: 'VT323, monospace', fontSize: '18px' }}>
            {title}
          </span>
        </div>
        <div className="flex gap-0.5">
          <button
            onClick={() => setIsMinimized(true)}
            className="w-5 h-5 bg-[#c0c0c0] border flex items-center justify-center shadow-[inset_1px_1px_0_0_#ffffff,inset_-1px_-1px_0_0_#000000] hover:shadow-[inset_-1px_-1px_0_0_#ffffff,inset_1px_1px_0_0_#000000] active:shadow-[inset_-1px_-1px_0_0_#ffffff,inset_1px_1px_0_0_#808080]"
          >
            <Minimize className="w-3 h-3" />
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="w-5 h-5 bg-[#c0c0c0] border flex items-center justify-center shadow-[inset_1px_1px_0_0_#ffffff,inset_-1px_-1px_0_0_#000000] hover:shadow-[inset_-1px_-1px_0_0_#ffffff,inset_1px_1px_0_0_#000000] active:shadow-[inset_-1px_-1px_0_0_#ffffff,inset_1px_1px_0_0_#808080]"
          >
            <Square className="w-2.5 h-2.5" />
          </button>
          <button
            onClick={onClose}
            className="w-5 h-5 bg-[#c0c0c0] border flex items-center justify-center shadow-[inset_1px_1px_0_0_#ffffff,inset_-1px_-1px_0_0_#000000] hover:shadow-[inset_-1px_-1px_0_0_#ffffff,inset_1px_1px_0_0_#000000] active:shadow-[inset_-1px_-1px_0_0_#ffffff,inset_1px_1px_0_0_#808080]"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-white p-4 m-1">
        {children}
      </div>
    </div>
  );
}
