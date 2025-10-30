"use client";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { OptionCountry, SelectInputCountryProps } from "./SelectInput.type";

const SelectInputCountry = ({
  label,
  placeholder,
  value,
  options,
  disabled = false,
  onChange,
  error,
}: SelectInputCountryProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-gray-500">{label}</Label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder || ""} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option: OptionCountry) => (
            <React.Fragment key={option.id_negara}>
              <SelectItem value={String(option.id_negara)}>
                {option.nama_negara}
              </SelectItem>
            </React.Fragment>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default SelectInputCountry;
