/* eslint-disable @typescript-eslint/no-explicit-any */
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

interface Option {
  id_negara: number;
  kode_negara: string;
  nama_negara: string;
}

interface SelectInputCountryProps {
  label: string;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const SelectInputCountry = ({
  label,
  options,
  disabled = false,
  value,
  onChange,
  error,
}: SelectInputCountryProps) => {
  // console.log("value", value);
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-gray-500">{label}</Label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Negara" />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option, index) => (
            <React.Fragment key={index}>
              <SelectItem value={option.id_negara.toString()}>
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
