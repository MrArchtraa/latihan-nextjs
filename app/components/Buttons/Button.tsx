import React from 'react'

const Button = ({ children, variant }: { children: React.ReactNode, variant?: 'default' | 'outlined' | 'ghost' | 'soft' }) => {
  let buttonClass = "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg";
  let textColorClass = "text-white";
  let bgColorClass = "bg-sky-600";
  let borderColorClass = "border-transparent";
  let hoverBgColorClass = "hover:bg-sky-700";
  let hoverTextColorClass = "hover:text-white";

  switch (variant) {
    case 'outlined':
      textColorClass = "text-sky-600";
      bgColorClass = "bg-transparent";
      borderColorClass = "border-sky-600";
      hoverBgColorClass = "hover:bg-sky-100";
      hoverTextColorClass = "hover:text-sky-600";
      break;
    case 'ghost':
      textColorClass = "text-sky-600";
      bgColorClass = "bg-transparent";
      hoverBgColorClass = "hover:bg-sky-100";
      borderColorClass = "border-0";
      hoverTextColorClass = "hover:text-sky-800";
      break;
    case 'soft':
      bgColorClass = "bg-sky-100";
      textColorClass = "text-sky-800";
      hoverBgColorClass = "hover:bg-sky-200";
      borderColorClass = "border-0";
      hoverTextColorClass = "dark:hover:bg-sky-900 dark:text-sky-400";
      break;
    default:
      break;
  }

  return (
    <button type="button" className={`${buttonClass} ${borderColorClass} ${bgColorClass} ${textColorClass} ${hoverBgColorClass} ${hoverTextColorClass} rounded-lg border hover:border-sky-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-sky-500 dark:hover:border-sky-600`}>
      {children}
    </button>
  )
}

export default Button
