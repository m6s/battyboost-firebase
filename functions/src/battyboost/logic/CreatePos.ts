import {BattyboostError} from "../entities/BattyboostError";
import {Pos} from "../entities/Pos";
import {Database} from "../Database";

export interface CreatePosInput {
    pos: Pos;
}

export class CreatePosOutput {
    posId?: string;
    error?: BattyboostError;
}

export async function createPos(database: Database, input: CreatePosInput) {
    const pos = input.pos;
    const output = new CreatePosOutput();
    try {
        const posRef = await database.pushPos(pos);
        output.posId = posRef.key;
    } catch (error) {
        output.error = BattyboostError.from(error);
    }
    return output;
}
