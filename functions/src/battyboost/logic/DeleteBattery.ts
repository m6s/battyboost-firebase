import {Database} from "../Database";
import {BattyboostError} from "../entities/BattyboostError";

export interface DeleteBatteryInput {
    batteryId: string;
}

export class DeleteBatteryOutput {
    readonly output: boolean = true; // Hack because Firebase won't allow empty nodes
    error?: BattyboostError;
}

export async function deleteBattery(database: Database, input: DeleteBatteryInput) {
    const output = new DeleteBatteryOutput();
    try {
        await database.removeBatteryById(input.batteryId);
    } catch (error) {
        output.error = BattyboostError.from(error);
    }
    return output;
}
