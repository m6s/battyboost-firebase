import {UserRecord} from "firebase-functions/lib/providers/auth";
import {BattyboostUser} from "./entities/BattyboostUser";
import {Database} from "./Database";

export async function publishUserData(database: Database, userRecord: UserRecord): Promise<void> {
    const battyboostUser: BattyboostUser = new BattyboostUser();
    battyboostUser.displayName = userRecord.displayName || null;
    battyboostUser.email = userRecord.email || null;
    battyboostUser.photoUrl = userRecord.photoURL || null;
    return database.usersRef.child(userRecord.uid).set(battyboostUser)
}
