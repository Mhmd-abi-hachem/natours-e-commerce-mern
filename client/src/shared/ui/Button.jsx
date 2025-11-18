import React from "react";

const VARIATION_CLASSES = {
  primary: "hover:shadow-2xl bg-[#55c57a] text-[#f7f7f7]",
  alert: "bg-[#e74c3c] text-[#f7f7f7]  whitespace-nowrap w-full md:w-auto",
  cancel: "bg-[#f2f2f2] text-[#777] w-full md:w-auto",
  none: "text-[#f7f7f7]",
};

function Button({
  children,
  onClick,
  size = "medium",
  variation = "primary",
  disabled = false,
  type,
  classes,
}) {
  const sizeClass =
    size === "small"
      ? "py-3 px-8 text-[1.65rem] md:text-[1.75rem]"
      : size === "medium"
      ? "text-[1.75rem] py-4 px-8"
      : "text-3xl py-7 px-14";
  const variationClass =
    VARIATION_CLASSES[variation] || VARIATION_CLASSES.primary;

  return (
    <button
      className={`${sizeClass} ${variationClass} ${classes} rounded-full border-none uppercase relative transition-transform duration-300 cursor-pointer hover:-translate-y-2 `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
