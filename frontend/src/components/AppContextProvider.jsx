import React from "react"
/* import axios from "axios" */
export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {

    const [category, setCategory] = React.useState("")
    const [header, setHeader] = React.useState("")
    const [subHeader, setSubHeader] = React.useState("")
    /* const [yourEvents, setYourEvents] = React.useState(false) */
    const [events, setEvents] = React.useState([])
    const createEvent = () => {

        const payload = {
            date: `Fri, Feb ${new Date().toLocaleDateString()[2]}, ${new Date().toLocaleTimeString()[0]}:${new Date().toLocaleTimeString()[2]}${new Date().toLocaleTimeString()[3]} PM GMT+5:30`,
            header: header,
            sub_heading: subHeader,
            img: "https://secure-content.meetupstatic.com/images/classic-events/484169677/220x124.jpg",
            is_online_event: false,
            category: category,
            date_range: "next_week",
            attendees: [],
            comments: [],
            isStar: false,
            isYourEvent: true
        }
        if (category !== "" && header !== "" && subHeader !== "") {
          
            setEvents([...events, payload])
            
        } else {
            console.log("error")
        }
    }

    const value = { category, setCategory, header, setHeader, createEvent, subHeader, setSubHeader, events }
    return <AppContext.Provider value={value} >{children}</AppContext.Provider>
}