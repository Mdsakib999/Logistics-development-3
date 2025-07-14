export const HeadingInfo = ({ children, className = "" }) => {
  return (
    <div className={`relative px-6 py-2 bg-[#213E89] text-white ${className}`}>
      {/* Yellow accent bar on the left */}
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-yellow-400"></div>

      {/* Content */}
      <div className="text-2xl font-semibold">{children}</div>
    </div>
  );
};
