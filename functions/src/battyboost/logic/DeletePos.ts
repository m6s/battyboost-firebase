import {Database} from "../Database";
import {BattyboostError} from "../entities/BattyboostError";

export interface DeletePosInput {
    posId: string;
}

export class DeletePosOutput {
    readonly output: boolean = true; // Hack because Firebase won't allow empty nodes
    error?: BattyboostError;
}

export async function deletePos(database: Database, input: DeletePosInput) {
    const output = new DeletePosOutput();
    try {
        await database.removePosById(input.posId);
    } catch (error) {
        output.error = BattyboostError.from(error);
    }
    return output;
}
