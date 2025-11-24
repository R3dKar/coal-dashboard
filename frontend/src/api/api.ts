export interface StoragesResponse {
  storages: number[]
};

export const getStorages = async (): Promise<StoragesResponse> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/storages`);
  return response.json();
};

export interface PileData {
  number: number,
  temperature: number,
  temperature_rate: -2 | -1 | 0 | 1 | 2,
  days: number,
  coal_type: string,
  inflamation_prediction: number
};

export interface PilesResponse {
  piles: PileData[]
};

export const getPiles = async (storageId: number): Promise<PilesResponse> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/storages/${storageId}/piles`);
  return response.json();
};

export interface TemperatureResponse {
  temperature: number[],
  timestamp: number[],
  shift: number[]
};

export const getTemperature = async (storageId: number, pileNumber: number): Promise<TemperatureResponse> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/storages/${storageId}/piles/${pileNumber}/temperature`);
  return response.json();
};

export interface MassResponse {
  mass: number[],
  timestamp: number[]
}

export const getMass = async (storageId: number, pileNumber: number): Promise<MassResponse> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/storages/${storageId}/piles/${pileNumber}/mass`);
  return response.json();
};

export interface TransportationData {
  load_timestamp: number,
  load_mass: number,
  offload_timestamp: number,
  offload_mass: number
};

export interface TransportationResponse {
  transportations: TransportationData[]
};

export const getTransportation = async (storageId: number, pileNumber: number): Promise<TransportationResponse> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/storages/${storageId}/piles/${pileNumber}/transportation`);
  return response.json();
};

export const uploadPileData = async (transportationData: File, temperatureData: File): Promise<void> => {
  const formData = new FormData();
  formData.append('temperature', temperatureData);
  formData.append('transportation', transportationData);

  await fetch(`${import.meta.env.VITE_API_URL}/api/v1/data`, {
    method: 'POST',
    body: formData
  });
};

export const uploadFireData = async (fireData: File): Promise<void> => {
  const formData = new FormData();
  formData.append('fires', fireData);

  await fetch(`${import.meta.env.VITE_API_URL}/api/v1/fires`, {
    method: 'POST',
    body: formData
  });
};
