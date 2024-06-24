import { app } from "./firebase";
import {
  getFirestore,
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";
const db = getFirestore(app);
const productsRef = collection(db, "products");
const ordersRef = collection(db, "orders");
// add data
export const setData = async () => {
  await setDoc(doc(productsRef), {
    name: "Robusta",
    description: "A delicious coffee product with a rich flavor and aroma.",
    displayName: "Coffee 2 Robusta Son la",
    roast: "dark",
    stock: Math.floor(Math.random() * 100) + 1,
    price: Math.floor(Math.random() * 10) + 5,
    sale: Math.floor(Math.random() * 5),
  });
};

// get data by id
export const getData = async (id) => {
  const docSnap = await getDoc(doc(productsRef, id));
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
};

// get all data
const q = query(ordersRef, where("customer", "==", "diep anh"));
export const getAllData = async () => {
  const querySnapshot = await getDocs(productsRef);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

//delete a doc
export const deleteData = async (id) => {
  await deleteDoc(doc(productsRef, id));
};

// update a doc
export const updateData = async () => {
  await setDoc(doc(productsRef, "cf3EZpB0Cu3UJiWOGDK6"), {
    name: "Robusta",
    description: "A delicious coffee product with a rich flavor and aroma.",
    displayName: "Coffee 2",
    roast: "dark",
    stock: Math.floor(Math.random() * 100) + 1,
    price: Math.floor(Math.random() * 10) + 5,
    sale: Math.floor(Math.random() * 5),
  });
};
