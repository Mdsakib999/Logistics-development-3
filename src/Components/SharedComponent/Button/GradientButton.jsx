export const GradientButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative overflow-hidden px-10 py-4 font-semibold text-lg text-white
        bg-gradient-to-r from-[#133FAE] to-[#172A5B]
        transition-all duration-300 ease-in-out
        hover:shadow-[0_0_25px_#1f3db7]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {/* Shiny shimmer overlay */}
      <span
        className="
          absolute inset-0 w-full h-full
          bg-gradient-to-r from-white/20 via-white/10 to-transparent
          translate-x-[-100%] rotate-12
          group-hover:animate-[shimmer_1.5s_linear_forwards]
          pointer-events-none
        "
      ></span>

      {/* Quarter circle glow */}
      <div className="absolute -right-12 -bottom-15 w-24 h-24 bg-white rounded-l-full group-hover:opacity-70 z-0"></div>

      {/* Button text */}
      <span className="relative z-10">{children}</span>

      {/* Subtle glow layer */}
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 z-0" />
    </button>
  );
};
