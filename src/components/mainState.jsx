import { useContext, useState } from "react"
import mainContext from "./mainContext"

const mainState = (props) => {
    const [user,setUser] = useState(0)
    return (
        <mainContext.Provider value={{user}}>
            {props.children}
        </mainContext.Provider>
    )

}


{/* <mainState>
    <App />
</mainState> */}
// in index.js
