export class Database {
    readonly usersRef: admin.database.Reference;
    readonly partnersRef: admin.database.Reference;
    readonly posRef: admin.database.Reference;
    readonly batteriesRef: admin.database.Reference;
    readonly invitesRef: admin.database.Reference;
    readonly transactionsRef: admin.database.Reference;

    constructor(rootRef: admin.database.Reference) {
        this.usersRef = rootRef.child(('data/users'));
        this.partnersRef = rootRef.child(('data/partners'));
        this.posRef = rootRef.child(('data/pos'));
        this.batteriesRef = rootRef.child(('data/batteries'));
        this.invitesRef = rootRef.child(('data/invites'));
        this.transactionsRef = rootRef.child(('data/transactions'));
    }
}
