import { useEffect, useState } from "react"

const useInventorys = () => {
    const [inventorys, setInventorys] = useState([])
    useEffect(() => {
        const url = 'https://polar-brushlands-69402.herokuapp.com/product'
        fetch(url)
        .then(res => res.json())
        .then(data => setInventorys(data))
    }, [])
    return [inventorys, setInventorys]
}
export default useInventorys