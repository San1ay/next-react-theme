import { twMerge } from "tailwind-merge";

const Toggler = ({ text, value, setValue, className = "" }: { text: string; value: boolean; setValue: (value: boolean) => void; className?: string }) => {
  return (
    <div className={twMerge(`flex items-center justify-between`, className)}>
      <span className="text-sm font-semibold">{text}:</span>
      <button
        role="switch"
        aria-checked={value}
        onClick={() => setValue(!value)}
        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          value ? "bg-blue-600" : "bg-zinc-400 dark:bg-zinc-700"
        }`}
      >
        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition-transform duration-300 ease-in-out ${value ? "translate-x-6" : "translate-x-1"}`} />
      </button>
    </div>
  );
};

export default Toggler;
