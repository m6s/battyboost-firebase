import {BattyboostUser} from "../entities/BattyboostUser";
import {Database} from "../Database";
import {BattyboostError} from "../entities/BattyboostError";

export interface UpdateUserInput {
    userId: string;
    user: BattyboostUser;
}

export class UpdateUserOutput {
    readonly output: boolean = true; // Hack because Firebase won't allow empty nodes
    error?: BattyboostError;
}

export async function updateUser(database: Database, input: UpdateUserInput): Promise<UpdateUserOutput> {
    const output = new UpdateUserOutput();
    try {
        await database.setUserById(input.userId, input.user);
    } catch (error) {
        output.error = BattyboostError.from(error);
    }
    return output;
}
