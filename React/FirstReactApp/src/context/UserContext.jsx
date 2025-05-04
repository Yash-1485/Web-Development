import { createContext } from "react"

export const DataContext = createContext();

const UserContext = ({ children }) => {
    const username = "Yash";
    return (
        <>
            <DataContext.Provider value={username}>
                {children}
                {/* Hello from UserContext */}
            </DataContext.Provider>
        </>
    )
}

export default UserContext;