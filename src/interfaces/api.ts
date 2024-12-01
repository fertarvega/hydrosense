export enum DeviceType {
  TEMPERATURE = "temperature",
  HUMIDITY = "humidity",
  PRESSURE_VALVE = "pressure_valve",
  PRESSURE_SENSOR = "pressure_sensor",
  STEPPER_MOTOR = "stepper_motor",
}

export enum DeviceStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  ERROR = "error",
}
export interface IStatisticClient {
  value: number;
  timestamp: string;
}

export interface IDeviceClient {
  model_serie: string;
  type: DeviceType;
  status: DeviceStatus;
  statistics: IStatisticClient[];
}
