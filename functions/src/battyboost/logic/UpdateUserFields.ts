import {Database} from "../Database";
import {BattyboostError} from "../entities/BattyboostError";

export interface UpdateUserFieldsInput {
    userId: string;
    bankAccountOwner?: string;
    updateBankAccountOwner: boolean;
    iban?: string;
    updateIban: boolean;
    photoUrl?: string;
    updatePhotoUrl: boolean;
    email?: string;
    updateEmail: boolean;
    displayName?: string;
    updateDisplayName: boolean;
}

export class UpdateUserFieldsOutput {
    readonly output: boolean = true; // Hack because Firebase won't allow empty nodes
    error?: BattyboostError;
}

export async function updateUserFields(database: Database,
                                       input: UpdateUserFieldsInput): Promise<UpdateUserFieldsOutput> {
    const output = new UpdateUserFieldsOutput();
    try {
        if (input.updateBankAccountOwner) {
            await database.setUserBankAccountOwnerById(input.userId, input.bankAccountOwner);
        }
        if (input.updateIban) {
            await database.setUserIbanById(input.userId, input.iban);
        }
        if (input.updatePhotoUrl) {
            await database.setUserPhotoUrlById(input.userId, input.photoUrl);
        }
        if (input.updateEmail) {
            await database.setUserEmailById(input.userId, input.email);
        }
        if (input.updateDisplayName) {
            await database.setUserDisplayNameById(input.userId, input.displayName);
        }
    } catch (error) {
        output.error = BattyboostError.from(error);
    }
    return output;
}
