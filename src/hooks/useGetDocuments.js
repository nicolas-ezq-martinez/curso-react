import { useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";

function useGetDocuments(collectionName) {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const db = getFirestore();

    const documentRef = collection(db, collectionName);
    getDocs(documentRef).then((snapshot) => {
      if (snapshot.size > 0) {
        const items = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        });
        console.log(items);
        setDocument(items);
      }
    }).catch((err) => console.error(err));

  }, []);

  return { document };
}

export default useGetDocuments;
