import {Partner} from "../entities/Partner";
import {Database} from "../Database";

export interface CreatePartnerInput {
    partner: Partner;
}

export class CreatePartnerOutput {
    partnerId?: string;
    error?: string;
}

export async function createPartner(database: Database, input: CreatePartnerInput): Promise<CreatePartnerOutput> {
    const partner = input.partner;
    const partnerRef = await database.partnersRef.push(partner);
    const output = new CreatePartnerOutput();
    output.partnerId = partnerRef.key;
    return output;
}
