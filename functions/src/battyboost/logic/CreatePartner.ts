import {BattyboostError} from "../entities/BattyboostError";
import {Partner} from "../entities/Partner";
import {Database} from "../Database";

export interface CreatePartnerInput {
    partner: Partner;
}

export class CreatePartnerOutput {
    partnerId?: string;
    error?: BattyboostError;
}

export async function createPartner(database: Database, input: CreatePartnerInput) {
    const partner = input.partner;
    const output = new CreatePartnerOutput();
    try {
        const partnerRef = await database.pushPartner(partner);
        output.partnerId = partnerRef.key;
    } catch (error) {
        output.error = BattyboostError.from(error);
    }
    return output;
}
