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
import { OptionProduct, SelectInputProductProps } from "./SelectInput.type";

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
      <Label className="text-sm font-light text-gray-500">{label}</Label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Pelabuhan" />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option: OptionProduct) => (
            <React.Fragment key={option?.id_barang}>
              <SelectItem value={option?.id_barang.toString()}>
                {option?.id_barang} - {option?.nama_barang}
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
