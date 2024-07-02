import React, {useMemo} from "react";

interface Props {
  type: "Solid" | "Outline" | "Ghost" | "Soft" | "White" | "Link";
  size: "Small" | "Default" | "Large";
  color: string | "black" | "gray" | "green" | "blue" | "red" | "yellow" | "white";
  block: "block" | "not-block"
  shape: "round" | "not-round";
  icon: string;
  disabled: boolean;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
};

function Button({type, size, color, block, shape, icon, disabled, text, onClick}: Props) {
  const btnRound = useMemo(() => {
    switch (shape) {
      case "round":
        return "rounded-full"
      default:
        return "rounded-lg"
    }
  }, [])
  const btnBlock = useMemo(() => {
    switch (block) {
      case "block":
        return "w-full"
      default:
        return ""
    }
  }, [])
  const btnSize = useMemo(() => {
    switch (size) {
      case "Small":
        return 'py-2 px-3'
      case "Default":
        return 'py-3 px-4'
      case "Large":
        return 'p-4 sm:p-5'
      default:
        return 'py-3 px-4'
    }
  }, [])
  const btnType = useMemo(() => {
    if (type === "Solid") {
      switch (color) {
        case "black":
          return "border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800"
        case "gray":
          return "border border-transparent bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none"
        case "green":
          return "border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
        case "blue":
          return "border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        case "red":
          return "border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
        case "yellow":
          return "border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
        case "white":
          return "border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800"
        default:
          return "border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800"
      }
    } else if (type === "Outline") {
      switch (color) {
        case "black":
          return "border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300"
        case "gray":
          return "border border-gray-500 text-gray-500 hover:border-gray-800 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:border-neutral-300"
        case "green":
          return "border border-teal-500 text-teal-500 hover:border-teal-400 hover:text-teal-400 disabled:opacity-50 disabled:pointer-events-none"
        case "blue":
          return "border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400"
        case "red":
          return "border border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 disabled:opacity-50 disabled:pointer-events-none"
        case "yellow":
          return "border border-yellow-500 text-yellow-500 hover:border-yellow-400 hover:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none"
        case "white":
          return "border border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none"
        default:
          return "border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300"
      }
    } else if (type === "Ghost") {
      switch (color) {
        case "black":
          return "border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
        case "gray":
          return "border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800"
        case "green":
          return "border border-transparent text-teal-500 hover:bg-teal-100 hover:text-teal-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-teal-800/30 dark:hover:text-teal-400"
        case "blue":
          return "border border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400"
        case "red":
          return "border border-transparent text-red-500 hover:bg-red-100 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-800/30 dark:hover:text-red-400"
        case "yellow":
          return "border border-transparent text-yellow-500 hover:bg-yellow-100 hover:text-yellow-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-800/30 dark:hover:text-yellow-400"
        case "white":
          return "border border-transparent text-white hover:bg-gray-100 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-white/10 dark:hover:text-white"
        default:
          return "black"
      }
    } else if (type === "Soft") {
      switch (color) {
        case "black":
          return "border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white"
        case "gray":
          return "border border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-neutral-400 dark:hover:text-neutral-300"
        case "green":
          return "border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-teal-900 dark:text-teal-500 dark:hover:text-teal-400"
        case "blue":
          return "border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
        case "red":
          return "border border-transparent bg-red-100 text-red-800 hover:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-900 dark:text-red-500 dark:hover:text-red-400"
        case "yellow":
          return "border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400"
        case "white":
          return "border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none"
        default:
          return "black"
      }
    } else if (type === "White") {
      switch (color) {
        case "black":
          return "border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        case "gray":
          return "border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800"
        case "green":
          return "border border-gray-200 bg-white text-teal-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-800"
        case "blue":
          return "border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800"
        case "red":
          return "border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-800"
        case "yellow":
          return "border border-gray-200 bg-white text-yellow-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-800"
        default:
          return "border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
      }
    }
  }, []);
  const className = useMemo(() => `${btnBlock} ${btnSize} inline-flex ${block === 'block' ? 'justify-center' : ''} items-center gap-x-2 text-sm font-semibold ${btnRound} ${btnType}`, [btnSize, btnBlock, btnRound, btnType, block])
  return (
    <>
      <button
        type="button"
        className={className}
        disabled={disabled}
        onClick={onClick || (() => alert('click button'))}
        >
          {text}
      </button>
    </>
  )
}

export default Button
