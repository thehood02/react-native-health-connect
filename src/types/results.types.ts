import type {
  ActiveCaloriesBurnedRecord,
  BasalBodyTemperatureRecord,
  BasalMetabolicRateRecord,
  BloodGlucoseRecord,
  BloodPressureRecord,
  RecordType,
} from './records.types';

interface ActiveCaloriesBurnedRecordResult
  extends Omit<ActiveCaloriesBurnedRecord, 'energy'> {
  energy: {
    inCalories: number;
    inJoules: number;
    inKilocalories: number;
    inKilojoules: number;
  };
}

interface BasalBodyTemperatureRecordResult
  extends Omit<BasalBodyTemperatureRecord, 'temperature'> {
  temperature: {
    inFahrenheit: number;
    inCelsius: number;
  };
}

interface BasalMetabolicRateRecordResult
  extends Omit<BasalMetabolicRateRecord, 'basalMetabolicRate'> {
  basalMetabolicRate: {
    inKilocaloriesPerDay: number;
    inWatts: number;
  };
}

interface BloodGlucoseRecordResult extends Omit<BloodGlucoseRecord, 'level'> {
  level: {
    inMillimolesPerLiter: number;
    inMilligramsPerDeciliter: number;
  };
}

interface BloodPressureRecordResult
  extends Omit<BloodPressureRecord, 'systolic' | 'diastolic'> {
  systolic: {
    inMillimetersOfMercury: number;
  };
  diastolic: {
    inMillimetersOfMercury: number;
  };
}

type HealthConnectRecordResult =
  | ActiveCaloriesBurnedRecordResult
  | BasalBodyTemperatureRecordResult
  | BasalMetabolicRateRecordResult
  | BloodGlucoseRecordResult
  | BloodPressureRecordResult;

export type RecordResult<T extends RecordType> = Omit<
  Extract<HealthConnectRecordResult, { recordType: T }>,
  'recordType'
>;