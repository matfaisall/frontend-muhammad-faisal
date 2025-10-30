import axios from "axios";

const API_BASE = "http://202.157.176.100:3001";

export const fetchCountries = async () => {
  const res = await axios.get(`${API_BASE}/negaras`);
  return res.data;
};

export const fetchPorts = async (countryId: number) => {
  const res = await axios.get(
    `http://202.157.176.100:3001/pelabuhans?filter={"where":{"id_negara":${countryId}}}`
  );
  return res.data;
};

export const fetchProducts = async (portId: string) => {
  const res = await axios.get(
    `http://202.157.176.100:3001/barangs?filter={"where" : {"id_pelabuhan":${portId}}}`
  );
  return res.data;
};
