import axios from "axios";

// ini sebenarnya lebih bagus di taruh di .env
const API_BASE = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchCountries = async () => {
  const res = await axios.get(`${API_BASE}/negaras`);
  return res.data;
};

export const fetchPorts = async (countryId: number) => {
  const res = await axios.get(
    `${API_BASE}/pelabuhans?filter={"where":{"id_negara":${countryId}}}`
  );
  return res.data;
};

export const fetchProducts = async (portId: string) => {
  const res = await axios.get(
    `${API_BASE}/barangs?filter={"where":{"id_pelabuhan":${portId}}}`
  );
  return res.data;
};
