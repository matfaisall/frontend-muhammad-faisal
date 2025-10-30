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

import { OptionPort, SelectInputPortProps } from "./SelectInput.type";

const SelectInputPort = ({
  label,
  placeholder,
  value,
  options,
  onChange,
  error,
  disabled = false,
}: SelectInputPortProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-light text-gray-500">{label}</Label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder || ""} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option: OptionPort) => (
            <React.Fragment key={option?.id_pelabuhan}>
              <SelectItem value={option?.id_pelabuhan}>
                {option?.nama_pelabuhan}
              </SelectItem>
            </React.Fragment>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default SelectInputPort;
