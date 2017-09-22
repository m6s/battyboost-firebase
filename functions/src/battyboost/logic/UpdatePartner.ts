import {Partner} from "../entities/Partner";
import {Database} from "../Database";

export interface UpdatePartnerInput {
    partnerId: string;
    partner: Partner;
}

export class UpdatePartnerOutput {
    readonly updated: boolean = true; // Hack because Firebase won't allow empty nodes
    error?: string;
}

export async function updatePartner(database: Database, input: UpdatePartnerInput): Promise<UpdatePartnerOutput> {
    await database.partnersRef.child(input.partnerId).set(input.partner);
    return new UpdatePartnerOutput();
}
