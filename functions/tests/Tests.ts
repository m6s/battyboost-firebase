// import * as firebase from 'firebase';
// import {createPartner, CreatePartnerInput} from "../main/battyboost/logic/AddPartner";
// import {Database} from "../main/battyboost/Database";
// import {Partner} from "../main/battyboost/entities/Partner";
//
// const config: firebase.AppOptions = {
//     apiKey: "<API_KEY>",
//     authDomain: "<PROJECT_ID>.firebaseapp.com",
//     databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
//     storageBucket: "<BUCKET>.appspot.com",
// };
//
// firebase.initializeApp(config);
// const database = new Database(firebase.database().ref());
//
// const partner = new Partner();
// partner.name = "A Name"
// const input: CreatePartnerInput = {
//     partner: partner
// };
// createPartner(database, input).then(value => console.log(value)); // TODO