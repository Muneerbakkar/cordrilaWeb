// src/VerticalBar.js


const VerticalBar = () => {
  return (
    <div className="transform -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="w-28 h-6 rounded-full bg-zinc-500 animate-moveLeftRight opacity-50"></div>
    </div>
  );
};

export default VerticalBar;
