import { createContext } from "react"

export const DataContext = createContext()

const UserContext = ({ children }) => {

    const data = {
        username: "Yash",
        age: 20,
        marks: 100
    }

    return (
        <>
            <DataContext.Provider value={data}>
                {children}
            </DataContext.Provider>
        </>
    )
}

export default UserContext
