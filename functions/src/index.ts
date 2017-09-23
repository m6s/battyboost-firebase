import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as battyboost from "./battyboost";

admin.initializeApp(functions.config().firebase);

export const publishUserDataTrigger = functions.auth.user().onCreate(async event => {
    const database = new battyboost.Database(admin.database().ref('default'));
    return battyboost.publishUserData(database, event.data);
});

export const createPartnerTrigger = logicTrigger('createPartner', battyboost.createPartner);

export const updatePartnerTrigger = logicTrigger('updatePartner', battyboost.updatePartner);

export const deletePartnerTrigger = logicTrigger('deletePartner', battyboost.deletePartner);

export const createPosTrigger = logicTrigger('createPos', battyboost.createPos);

export const updatePosTrigger = logicTrigger('updatePos', battyboost.updatePos);

export const deletePosTrigger = logicTrigger('deletePos', battyboost.deletePos);

export const createBatteryTrigger = logicTrigger('createBattery', battyboost.createBattery);

export const updateBatteryTrigger = logicTrigger('updateBattery', battyboost.updateBattery);

export const deleteBatteryTrigger = logicTrigger('deleteBattery', battyboost.deleteBattery);

function logicTrigger(name: string, f: (Database, any) => Promise<any>) {
    return functions.database.ref(`{prefix}/logic/{userId}/${ name }/{execId}/input`)
        .onCreate(async event => {
            const database = new battyboost.Database(admin.database().ref(event.params.prefix));
            const output = await f(database, event.data.val());
            return event.data.ref.parent.child('output').set(output);
        });
}
