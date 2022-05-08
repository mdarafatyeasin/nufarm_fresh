import { useEffect, useState } from "react"

const useInventorys = () => {
    const [inventorys, setInventorys] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/product'
        fetch(url)
        .then(res => res.json())
        .then(data => setInventorys(data))
    }, [])
    return [inventorys, setInventorys]
}
export default useInventorys