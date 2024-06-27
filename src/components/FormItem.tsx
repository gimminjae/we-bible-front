import React from "react";

type Props = {
  htmlFor?: string;
  labelText?: string;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  errorId?: string;
  errorMessage?: string;
  placeholder?: string;
  clickText?: string;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
};

function FormItem({
  htmlFor,
  labelText,
  type,
  id,
  name,
  value,
  onChange,
  errorId,
  errorMessage,
  placeholder,
  clickText,
  onClick,
}: Props) {
  return (
    <>
      <div>
        {(clickText && (
          <div className="flex justify-between items-center">
            <label
              htmlFor={htmlFor}
              className="block text-sm mb-2 dark:text-white"
            >
              {labelText}
            </label>
            <p
              className="text-sm text-blue-600 decoration-2 hover:underline cursor-pointer font-medium"
              onClick={onClick}
            >
              {clickText}
            </p>
          </div>
        )) || (
          <label
            htmlFor={htmlFor}
            className="block text-sm mb-2 dark:text-white"
          >
            {labelText}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            required
            aria-describedby={errorId}
            placeholder={placeholder}
            onChange={onChange}
          />
          <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
            <svg
              className="size-5 text-red-500"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </div>
        </div>
        <p className="hidden text-xs text-red-600 mt-2" id={errorId}>
          {errorMessage}
        </p>
      </div>
    </>
  );
}

export default FormItem;
