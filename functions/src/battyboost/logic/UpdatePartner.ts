import {Partner} from "../entities/Partner";
import {Database} from "../Database";
import {BattyboostError} from "../entities/BattyboostError";

export interface UpdatePartnerInput {
    partnerId: string;
    partner: Partner;
}

export class UpdatePartnerOutput {
    readonly output: boolean = true; // Hack because Firebase won't allow empty nodes
    error?: BattyboostError;
}

export async function updatePartner(database: Database, input: UpdatePartnerInput): Promise<UpdatePartnerOutput> {
    const output = new UpdatePartnerOutput();
    try {
        await database.setPartnerById(input.partnerId, input.partner);
    } catch (error) {
        output.error = BattyboostError.from(error);
    }
    return output;
}
