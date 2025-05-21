"use client";

const FormInput = ({
  label,
  name,
  placeholder = "",
  paste,
}: {
  label?: string;
  name: string;
  placeholder?: string;
  paste?: boolean;
}) => {
  if (placeholder === "" && paste) placeholder = "paste link here";

  const handlePaste = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.readText().then((text) => {
      const input = document.getElementById(name) as HTMLInputElement;
      if (input) {
        input.value = text;
      }
    });
  };

  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="pl-4 text-lg" htmlFor={name}>
        {label}
      </label>
      <div className="flex justify-between border border-foreground rounded-md pl-4 w-full">
        <input
          className="flex-1 outline-none py-2"
          type="text"
          placeholder={placeholder}
          id={name}
        />
        {paste && (
          <button
            onClick={handlePaste}
            className="bg-foreground  text-white m-1 rounded-md px-4 text-md"
          >
            Paste
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;
