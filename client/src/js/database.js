import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic for a method that gets all the content from the database
export const getDb = async (value) => {
  console.log('Getting data from the jateDB');
  // creates connection to database
  const jateDb = await openDB('jate', 1);
  // transaction that specifies what we put into our databases and the data priileges
  const tx = jateDb.transaction('jate', 'readwrite');
  // opens object store
  const objStore = tx.objectStore('jate');
  // using the .getall() method to get all data from our databases
  const req = objStore.getAll()
  // confirmation of the request.
  const res = await req;
  console.log('Data saved into our database...', res);
};

// PUT function
export const putDb = async (id, value) => {
  console.log('PUT request to update the jateDB');
  // creates connection to database
  const jateDb = await openDB('jate', 1);
  // transaction that specifies what we put into our databases and the data priileges
  const tx = jateDb.transaction('jate', 'readwrite');
  // opens object store
  const objStore = tx.objectStore('jate');
  // using the /add() method to sore and pass content
  const req = objStore.put({ id: id, value: value })
  // confirmation of the request.
  const res = await req;
  console.log('Data saved into our database...', res);
};


initdb();