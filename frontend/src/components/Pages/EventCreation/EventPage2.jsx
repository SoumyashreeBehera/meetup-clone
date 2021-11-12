import React from "react"
import { CommonTop } from "./CommonTop"
import styles from "./EventCreation.module.css"
/* import { AppContext } from "../../AppContextProvider" */
import { Link } from "react-router-dom"

const EventC2 = () => {
    
/* const { header, setHeader, setCategory } = React.useContext(AppContext)
    const handleInput = (e) => {
        setCategory(e.target.value)
    } */
    return (

        <div>
            <CommonTop />
            <div style={{ width: "100%", display: "flex" }}>
                <div style={{ backgroundColor: "rgb(0, 130, 148) ", width: "30%", height: "15px" }} ></div>
                <div style={{ backgroundColor: "lightgrey ", width: "100%", height: "15px" }} ></div>
            </div>
            <div className={styles.eve1} >
                <h5 style={{ marginLeft: "280px", fontSize: "15px" }}>Step 2 of 7</h5>
                <h1 style={{ fontSize: "40px", width: "80%"}}>Choose a few topics that describe your group's interests</h1>
                <h4>Be specific! This will help us promote your group to the right people.  You can choose up to 15 topics.</h4>
                <h1><input style={{ width: "65%", height: "55px",padding:"15px",fontSize: "16px" }} /* value={header} */ placeholder="Search For Topics"
                    /* onChange={(e) => setHeader(e.target.value)} */ /></h1>
            </div>
            <div className={styles.eve2} >
                <div>
                    <button value={"Sci-Fi/Fantasy"} /* onClick={(e) => handleInput(e, 'value')} */>Sci-Fi/Fantasy</button>
                    <button value={"Permaculture"} /* onClick={(e) => handleInput(e, 'value')} */ >Permaculture</button>
                    <button value={"Digital Photography"} /* onClick={(e) => handleInput(e, 'value')} */ >Digital Photography</button>

                </div>
                <div>
                    <button value={"Crafts"} /* onClick={(e) => handleInput(e, 'value')} */ >Crafts</button>
                    <button value={"Seperation of Church and State"} /* onClick={(e) => handleInput(e, 'value')} */ >Separation of Church and State</button>
                    <button value={"Outdoor Adventures"} /* onClick={(e) => handleInput(e, 'value')} */ >Outdoor Adventures</button>

                </div>
                <div>
                    <button value={"Collabaration Between Creative Minds"} /* onClick={(e) => handleInput(e, 'value')} */ >Collaboration Between Creative Minds</button>
                    <button value={"ScreenWriting"} /* onClick={(e) => handleInput(e, 'value')} */ >ScreenWriting</button>
                    <button value={"Tech"} /* onClick={(e) => handleInput(e, 'value')} */ >Tech</button>
                </div>
            </div>
            <div className={styles.eve2_button}>
                <Link to="/" ><button className={styles.eve2_back}>Back</button></Link>
                <Link to="/start/name" ><button className={ styles.eve2_next}>Next</button></Link>
            </div>
        </div>
    )
}

export { EventC2 }