import { getDownloadURL, listAll, ref } from "firebase/storage";
import { app, storage } from "./firebase";
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
  const types = ["Arabica", "Robusta", "Liberica", "Excelsa"];
  const origins = ["Son La", "Kona", "Ethiopian", "Colombian"];
  const roast = ["light", "medium", "dark"];

  await setDoc(doc(productsRef), {
    name: types[Math.floor(Math.random() * types.length)],
    description: "A delicious coffee product with a rich flavor and aroma.",
    displayName: origins[Math.floor(Math.random() * origins.length)],
    roast: roast[Math.floor(Math.random() * origins.length)],
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

const imagesRef = ref(storage, "products-images");
export const getAllImages = () => {
  // Find all the prefixes and items.
  listAll(imagesRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        getDownloadURL(ref(storage, itemRef.fullPath)).then((url) => {
          console.log(url);
        });
      });
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
    });
};
