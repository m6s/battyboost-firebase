import {Partner} from "./entities/Partner";
import {BattyboostUser} from "./entities/BattyboostUser";
import {Pos} from "./entities/Pos";
import {Battery} from "./entities/Battery";

export class Database {
    private readonly usersRef: admin.database.Reference;
    private readonly partnersRef: admin.database.Reference;
    private readonly posRef: admin.database.Reference;
    private readonly batteriesRef: admin.database.Reference;
    private readonly invitesRef: admin.database.Reference;
    private readonly transactionsRef: admin.database.Reference;

    constructor(prefixRef: admin.database.Reference) {
        this.usersRef = prefixRef.child(('data/users'));
        this.partnersRef = prefixRef.child(('data/partners'));
        this.posRef = prefixRef.child(('data/pos'));
        this.batteriesRef = prefixRef.child(('data/batteries'));
        this.invitesRef = prefixRef.child(('data/invites'));
        this.transactionsRef = prefixRef.child(('data/transactions'));
    }

    setUserById(userId: string, user: BattyboostUser) {
        return this.usersRef.child(userId).set(user)
    }

    pushPartner(partner: Partner) {
        return this.partnersRef.push(partner);
    }

    removePartnerById(partnerId: string) {
        return this.partnersRef.child(partnerId).remove();
    }

    setPartnerById(partnerId: string, partner: Partner) {
        return this.partnersRef.child(partnerId).set(partner);
    }

    pushPos(pos: Pos) {
        return this.posRef.push(pos);
    }

    removePosById(posId: string) {
        return this.posRef.child(posId).remove();
    }

    setPosById(posId: string, pos: Pos) {
        return this.posRef.child(posId).set(pos);
    }

    pushBattery(battery: Battery) {
        return this.batteriesRef.push(battery);
    }

    removeBatteryById(batteryId: string) {
        return this.batteriesRef.child(batteryId).remove();
    }

    setBatteryById(batteryId: string, battery: Battery) {
        return this.batteriesRef.child(batteryId).set(battery);
    }
}
