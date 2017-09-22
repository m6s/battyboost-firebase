import {Database} from "../Database";

export interface DeletePartnerInput {
    partnerId: string;
}

export class DeletePartnerOutput {
    readonly deleted: boolean = true; // Hack because Firebase won't allow empty nodes
    error?: string;
}

export async function deletePartner(database: Database, input: DeletePartnerInput): Promise<DeletePartnerOutput> {
    await database.partnersRef.child(input.partnerId).remove();
    return new DeletePartnerOutput();
}
