// aircraftId.d.ts

export interface AircraftId {
  country_code: string;
  reg_n_number: string;
}

export function aircraftId2Tailnumber(aircraftId: AircraftId): string;
export function isValidAircraftId(aircraftId: AircraftId): boolean;
export function newAircraftId(country_code: string, reg_n_number: string): AircraftId;
