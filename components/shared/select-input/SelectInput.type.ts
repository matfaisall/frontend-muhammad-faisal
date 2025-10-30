// Base option type dengan generic
export interface BaseOption {
  [key: string]: string | number;
}

// type option country
export interface OptionCountry extends BaseOption {
  id_negara: number;
  kode_negara: string;
  nama_negara: string;
}

// type option port
export interface OptionPort extends BaseOption {
  id_pelabuhan: string;
  nama_pelabuhan: string;
  id_negara: string;
}

// type option product
export interface OptionProduct extends BaseOption {
  id_barang: number;
  nama_barang: string;
  id_pelabuhan: number;
  description: string;
  diskon: number;
  harga: number;
}

// type select input skuyy
export interface SelectInputProps<T extends BaseOption> {
  label: string;
  placeholder: string;
  value: string;
  options: T[];
  onChange: (value: string | number) => void;
  error?: string;
  disabled?: boolean;
}

export type SelectInputCountryProps = SelectInputProps<OptionCountry>;
export type SelectInputPortProps = SelectInputProps<OptionPort>;
export type SelectInputProductProps = SelectInputProps<OptionProduct>;
