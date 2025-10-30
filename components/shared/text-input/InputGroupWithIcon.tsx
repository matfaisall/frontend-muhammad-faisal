import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

interface InputGroupWithIconProps {
  label: string;
  value: string | number;
  placeholder?: string;
  align?: "inline-start" | "inline-end";
}

const InputGroupWithIcon: React.FC<InputGroupWithIconProps> = ({
  label,
  value,
  placeholder = "0",
  align = "inline-start",
}) => {
  return (
    <div className="w-full space-y-2">
      <Label className="text-sm font-light text-gray-500">{label}</Label>

      <InputGroup>
        {align === "inline-start" && (
          <InputGroupAddon>
            <InputGroupText>Rp</InputGroupText>
          </InputGroupAddon>
        )}
        <InputGroupInput
          value={value}
          placeholder={placeholder}
          readOnly
          disabled
        />
        {align === "inline-end" && (
          <InputGroupAddon align="inline-end">
            <InputGroupText>%</InputGroupText>
          </InputGroupAddon>
        )}
      </InputGroup>
    </div>
  );
};

export default InputGroupWithIcon;
