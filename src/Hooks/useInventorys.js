import { useEffect, useState } from "react"

const useInventorys = () => {
    const [inventorys, setInventorys] = useState([])
    useEffect(() => {
        const url = 'data.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setInventorys(data))
    }, [])
    return [inventorys, setInventorys]
}
export default useInventorys