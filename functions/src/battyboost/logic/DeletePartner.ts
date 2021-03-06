import {Database} from "../Database";
import {BattyboostError} from "../entities/BattyboostError";

export interface DeletePartnerInput {
    partnerId: string;
}

export class DeletePartnerOutput {
    readonly output: boolean = true; // Hack because Firebase won't allow empty nodes
    error?: BattyboostError;
}

export async function deletePartner(database: Database, input: DeletePartnerInput) {
    const output = new DeletePartnerOutput();
    try {
        await database.removePartnerById(input.partnerId);
    } catch (error) {
        output.error = BattyboostError.from(error);
    }
    return output;
}
