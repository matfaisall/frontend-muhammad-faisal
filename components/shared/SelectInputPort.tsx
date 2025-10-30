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
  id_negara: string;
  id_pelabuhan: string;
  nama_pelabuhan: string;
}

interface SelectInputPortProps {
  label: string;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  onSelect?: (value: string) => void;
}

const SelectInputPort = ({
  label,
  options,
  disabled = false,
  value,
  onChange,
  error,
}: SelectInputPortProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-light text-gray-500">{label}</Label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Pelabuhan" />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
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
