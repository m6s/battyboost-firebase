import {Pos} from "../entities/Pos";
import {Database} from "../Database";
import {BattyboostError} from "../entities/BattyboostError";

export interface UpdatePosInput {
    posId: string;
    pos: Pos;
}

export class UpdatePosOutput {
    readonly output: boolean = true; // Hack because Firebase won't allow empty nodes
    error?: BattyboostError;
}

export async function updatePos(database: Database, input: UpdatePosInput): Promise<UpdatePosOutput> {
    const output = new UpdatePosOutput();
    try {
        await database.setPosById(input.posId, input.pos);
    } catch (error) {
        output.error = BattyboostError.from(error);
    }
    return output;
}
