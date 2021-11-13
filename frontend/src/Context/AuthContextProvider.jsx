import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [event, setEvent] = useState({});
  const [createEventData, setCreateEventData] = useState({
    dateAndTime: "Saturday November 13 2021",
    hostedBy: "618c863f19da5468323f186b",
    eventImage:
      "https://secure-content.meetupstatic.com/images/classic-events/499462897/333x188.webp",
    eventType: "group",
    groupDetail: {
      groupName: "NYC/NJ Photo Walks Meetup Group",
      groupPrivate: "Public group",
    },
    eventLocationType: "In person",
    attendees: ["618c863f19da5468323f186b"],
  });
  const [purchased, setPurchased] = useState(false);

  const values = {
    user,
    token,
    purchased,
    setPurchased,
    setUser,
    setToken,
    event,
    setEvent,
    setCreateEventData,
    createEventData,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
