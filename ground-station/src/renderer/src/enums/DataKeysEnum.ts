export enum DataKeysEnum {
  AccelX,
  AccelY,
  AccelZ,
  MagnetometerX,
  MagnetometerY,
  MagnetometerZ,
  Latitude,
  Longitude,
  Checksum = 'CKS' // TODO - add checksum checker
}

export function dataKeysToName(key: DataKeysEnum): string {
  switch (key) {
    case DataKeysEnum.AccelX:
      return 'Acceleration X'
    case DataKeysEnum.AccelY:
      return 'Acceleration Y'
    case DataKeysEnum.AccelZ:
      return 'Acceleration Z'
    case DataKeysEnum.MagnetometerX:
      return 'Magnetometer X'
    case DataKeysEnum.MagnetometerY:
      return 'Magnetometer Y'
    case DataKeysEnum.MagnetometerZ:
      return 'Magnetometer Z'
    case DataKeysEnum.Latitude:
      return 'Latitude'
    case DataKeysEnum.Longitude:
      return 'Longitude'
    case DataKeysEnum.Checksum:
      return 'Checksum'
    default:
      return 'Unknown Key'
  }
}
