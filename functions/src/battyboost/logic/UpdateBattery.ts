import {Battery} from "../entities/Battery";
import {Database} from "../Database";
import {BattyboostError} from "../entities/BattyboostError";

export interface UpdateBatteryInput {
    batteryId: string;
    battery: Battery;
}

export class UpdateBatteryOutput {
    readonly output: boolean = true; // Hack because Firebase won't allow empty nodes
    error?: BattyboostError;
}

export async function updateBattery(database: Database, input: UpdateBatteryInput): Promise<UpdateBatteryOutput> {
    const output = new UpdateBatteryOutput();
    try {
        await database.setBatteryById(input.batteryId, input.battery);
    } catch (error) {
        output.error = BattyboostError.from(error);
    }
    return output;
}
