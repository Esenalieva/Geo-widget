import { useCallback } from "react"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const useSuccess = () => {
    return useCallback((text) => {
        if (text){
            toast.success(text)
        }
    }, [])
}