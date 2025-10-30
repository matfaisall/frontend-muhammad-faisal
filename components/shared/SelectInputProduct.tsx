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
  description: string;
  diskon: number;
  harga: number;
  id_barang: number;
  id_pelabuhan: number;

  nama_barang: string;
}

interface SelectInputProductProps {
  label: string;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  onSelect?: (value: string) => void;
}

const SelectInputProduct = ({
  label,
  options,
  disabled = false,
  value,
  onChange,
  error,
}: SelectInputProductProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-gray-500">{label}</Label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Pelabuhan" />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
            <React.Fragment key={option?.id_barang}>
              <SelectItem value={option?.id_barang.toString()}>
                {option?.nama_barang}
              </SelectItem>
            </React.Fragment>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default SelectInputProduct;
