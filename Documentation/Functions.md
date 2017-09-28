- [createPartner](../functions/src/battyboost/logic/CreatePartner.ts)

  **input**
  
  *partner* The partner data to use

  **output**
  
  *partnerId* Id of the created partner
  
  *error* Error if partner could not be created
    
- deletePartner

- updatePartner

- prepareRentBattery

  Prepare rental of a battery. The cashier id can be inferred from the user id, and in turn the partner id.

  **input**

  *batteryId*

  **output**
  
  *transaction*
  
  *error*

- commitTransaction

  Rent out a battery.

  **input**

  *transaction* A prepared transaction

  **output**
  
  *transactionId* The id of the created transaction if successful, or undefined if not  

  *transaction* Undefined if successful, or a new prepared transaction if not
  
  *error*
