import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {createPartner} from "./battyboost/logic/CreatePartner";
import {publishUserData} from "./battyboost/PublishUserData";
import {Database} from "./battyboost/Database";
import {updatePartner} from "./battyboost/logic/UpdatePartner";
import {deletePartner} from "./battyboost/logic/DeletePartner";

admin.initializeApp(functions.config().firebase);

export const publishUserDataTrigger = functions.auth.user().onCreate(async event => {
    const database = new Database(admin.database().ref('default'));
    return publishUserData(database, event.data);
});

export const createPartnerTrigger = functions.database.ref('{prefix}/logic/{userId}/createPartner/{execId}/input')
    .onCreate(async event => {
        const database = new Database(admin.database().ref(event.params.prefix));
        const output = await createPartner(database, event.data.val());
        return event.data.ref.parent.child('output').set(output);
    });

export const updatePartnerTrigger = functions.database.ref('{prefix}/logic/{userId}/updatePartner/{execId}/input')
    .onCreate(async event => {
        const database = new Database(admin.database().ref(event.params.prefix));
        const output = await updatePartner(database, event.data.val());
        return event.data.ref.parent.child('output').set(output);
    });

export const deletePartnerTrigger = functions.database.ref('{prefix}/logic/{userId}/deletePartner/{execId}/input')
    .onCreate(async event => {
        const database = new Database(admin.database().ref(event.params.prefix));
        const output = await deletePartner(database, event.data.val());
        return event.data.ref.parent.child('output').set(output);
    });
