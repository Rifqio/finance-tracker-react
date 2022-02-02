import { useReducer, useEffect, useState } from "react"
import { projectFirestore, timestamp } from "../firebase/Config"

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null  }
    case "ADDED_DOCS":
      return { isPending: false, document: action.payload, success: true, error: null }
    case "DELETED_DOCS":
      return { isPending: false, document: action.payload, success: true, error: null }
    case "ERROR":
      return { isPending: false, document: null, error: action.payload, success: false }
    default:
      return state
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancel, setIsCancel] = useState(false)

  //Collection Ref
  const ref = projectFirestore.collection(collection)

  // Only dispatch if not cancel
  const dispatchIfNotCancel = (action) => {
    if (!isCancel) {
      dispatch(action)
    }
  }

  //Add docs
  const addDocs = async (doc) => {
    dispatch({ type: "IS_PENDING" })

    try {
      const createdAt = timestamp.fromDate(new Date())
      const addedDocs = await ref.add({ ...doc, createdAt })
      dispatchIfNotCancel({ type: "ADDED_DOCS", payload: addedDocs })
      
    } 
    catch (err) {
      dispatchIfNotCancel({ type: "ERROR", payload: err.message })  
    }
  }

  //Delete docs
  const deleteDocs = async (id) => {
    dispatch({ type: 'IS_PENDING' })
    try {
      const deletedDocs = await ref.doc(id).delete()
      dispatchIfNotCancel({ type:'DELETED_DOCS', payload: deletedDocs })
    } 
    catch (err) {
      dispatchIfNotCancel({ type: 'ERROR', payload: 'Could not delete' })
    }
  }

  //Cleanup
  useEffect(() => {
    return () => setIsCancel(true)
  }, [])

  //Return all values
  return { addDocs, deleteDocs, response }
}
