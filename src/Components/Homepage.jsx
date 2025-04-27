import React from "react";
import { FireStoreDB } from "../firebase/Cloud_firestore_db";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function Homepage() {
  const writeData = async () => {
    const result = await addDoc(collection(FireStoreDB, "Users"), {
      name: "Kapil Nath",
      image: "https:img.com",
      age: 24,
      isAdmin: false,
      followers: [],
      following: [],
      saved: [],
      liked: [],
      Birthday: Date.now(),
    });

    console.log("My Data is ", result);
  };

  // const getDocuments = async () => {
  //   // const ref =  doc(FireStoreDB, "Users","7VOIgxCf5PpCAqFz1Ua8");
  //   // const snap = await getDoc(ref);
  //   // console.log(snap.data());

  //   const collectionRef = collection(FireStoreDB, "Users");
  //   const q = query(collectionRef, where("isAdmin", "==", true));
  //   const snapshot = await getDocs(q);

  //   snapshot.forEach((ele) => {
  //     console.log(ele.data());
  //   });
  // };

  return (
    <>
      <h1>Welcome to HOMEPAGE</h1>

      {/* <button onClick={writeData} className="btn btn-primary">
        Add Data to FireStore
      </button>
      <button onClick={getDocuments} className="btn btn-primary">
        View Data
      </button> */}
    </>
  );
}
