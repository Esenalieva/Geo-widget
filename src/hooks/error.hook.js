import { useCallback } from "react"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const useError = () => {
    return useCallback((text) => {
        if (text){
            toast.error(text)
        }
    }, [])
}