// ScrollNavigator.tsx
import { useRef } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function ScrollNavigator() {
  const scrollInterval = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startScroll = (direction: "up" | "down") => {
    stopScroll();
    scrollInterval.current = setInterval(() => {
      window.scrollBy({
        top: direction === "up" ? -5 : 5,
        behavior: "auto",
      });
    }, 16);
  };

  const stopScroll = () => {
    if (scrollInterval.current) clearInterval(scrollInterval.current);
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center gap-1">
      <button
        onMouseDown={() => startScroll("up")}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
        onTouchStart={() => startScroll("up")}
        onTouchEnd={stopScroll}
        className="w-5 h-5 rounded-full text-white flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
      >
        <KeyboardArrowUpIcon sx={{ fontSize: 35 }}/>
      </button>

      <div className="w-2 h-2 flex items-center justify-center font-bold animate-pulse">
        <RadioButtonUncheckedIcon sx={{ fontSize: 16 }}/>
      </div>

      <button
        onMouseDown={() => startScroll("down")}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
        onTouchStart={() => startScroll("down")}
        onTouchEnd={stopScroll}
        className="w-5 h-5 rounded-full text-white flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
      >
        <KeyboardArrowDownIcon sx={{ fontSize: 35 }}/>
      </button>
    </div>
  );
}