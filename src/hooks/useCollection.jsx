import { useState, useEffect, useRef } from "react"
import { projectFirestore } from "../firebase/Config"

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)
  
  //UseRef to prevent infinite loop in useEffect
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = projectFirestore.collection(collection)
    
    if(query) {
        ref = ref.where(...query)
    }
    
    if(orderBy) {
      ref = ref.orderBy(...orderBy)
    }

    const unsub = ref.onSnapshot((snap) => {
      let results = []
      snap.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id })
      })

      setDocuments(results)
      setError(null)
    }, (error) => {
        console.log(error)
        setError(error.message)
    })

    //Unsub on unmount
    return () => unsub()

  }, [collection, query, orderBy])

  return { documents, error }
}
