import {BattyboostError} from "../entities/BattyboostError";
import {Battery} from "../entities/Battery";
import {Database} from "../Database";

export interface CreateBatteryInput {
    battery: Battery;
}

export class CreateBatteryOutput {
    batteryId?: string;
    error?: BattyboostError;
}

export async function createBattery(database: Database, input: CreateBatteryInput) {
    const battery = input.battery;
    const output = new CreateBatteryOutput();
    try {
        const batteryRef = await database.pushBattery(battery);
        output.batteryId = batteryRef.key;
    } catch (error) {
        output.error = BattyboostError.from(error);
    }
    return output;
}
