"use client";

import { SelectOption } from "@/types";

type Props = {
  selectLabel: string;
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  groupLabel: string;
  placeholder: string;
};

export default function SelectControl({
  selectLabel,
  value,
  onValueChange,
  options,
  groupLabel,
  placeholder,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <label className="text-lg font-semibold">{selectLabel}</label>

      <select
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="h-12 px-4 rounded-md border bg-white text-lg"
      >
        <option value="">{placeholder}</option>
        <optgroup label={groupLabel}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
}
