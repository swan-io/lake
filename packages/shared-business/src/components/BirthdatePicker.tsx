import { StyleProp, ViewStyle } from "react-native";
import { validateBirthdate } from "../utils/validation";
import { InlineDatePicker } from "./InlineDatePicker";

export type BirthdatePickerProps = {
  label: string;
  value: string | undefined;
  error?: string;
  onValueChange?: (value: string | undefined) => void;
  style?: StyleProp<ViewStyle>;
  readOnly?: boolean;
  responsive?: boolean;
};

export const BirthdatePicker = ({
  value,
  label,
  readOnly = false,
  onValueChange,
  error: externalError,
  style,
  responsive = true,
}: BirthdatePickerProps) => {
  return (
    <InlineDatePicker
      value={value}
      label={label}
      readOnly={readOnly}
      onValueChange={onValueChange}
      error={externalError}
      style={style}
      validate={validateBirthdate}
      responsive={responsive}
    />
  );
};
