import React, { useState, useEffect } from "react";
import { loadData, postData } from "../../utils/fetchData";
import styles from "./GroupAndEvent.module.css";

let dummy = {
  catagory: "",
  day: "",
  type: "",
  distance: "",
  relevance: "",
};

let dummyGroup = {
  catagory: "",
  distance: "",
};

export default function GroupAndEvent() {
  const [color, setColor] = useState(dummy);
  const [colorGroup, setColorGroup] = useState(dummyGroup);
  const [showDay, setShowDay] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showDistance, setShowDistance] = useState(false);
  const [showCatagory, setShowCatagory] = useState(false);
  const [showRelevance, setShowRelevance] = useState(false);
  const [showEvent, setShowEvent] = useState("event");
  const [getData, setGetData] = useState({ eventType: showEvent });
  const [data, setData] = useState([]);

  function changeEToG(ev) {
    setShowEvent(ev);
    setGetData({ eventType: ev });
    setColor(dummy);
    setColorGroup(dummyGroup);
  }

  function changeDayColor(e) {
    setColor({ ...color, day: e });
  }

  function changeTypeColor(e) {
    setColor({ ...color, type: e });
  }

  function changeDistanceColor(e) {
    setColor({ ...color, distance: e });
  }

  function changeCatagoryColor(e) {
    setColor({ ...color, catagory: e });
  }

  function changeRelevanceColor(e) {
    setColor({ ...color, relevance: e });
  }

  function changeGroupCatagoryColor(e) {
    setColorGroup({ ...colorGroup, catagory: e });
  }
  function changeGroupDistanceColor(e) {
    setColorGroup({ ...colorGroup, distance: e });
  }
  useEffect(() => {
    let fun = async () => {
      let res = await loadData(getData);
      console.log(res);
      setData(res);
    };
    fun();
  }, [getData]);

  return (
    <div>
      <div className={styles.groundandevents_container}>
        <div className={styles.button_container}>
          <div
            className={`${showEvent === "event" && styles.makeItFocus}`}
            onClick={() => changeEToG("event")}
          >
            Events
          </div>
          <div
            className={`${showEvent === "group" && styles.makeItFocus}`}
            onClick={() => changeEToG("group")}
          >
            Groups
          </div>
        </div>
        <div className={styles.filterBoxes}>
          {showEvent === "event" ? (
            <>
              <div
                onClick={() => setShowDay(!showDay)}
                className={styles.boxsec}
              >
                <div
                  className={`${styles.boxsecHeading} ${
                    color.day !== "" && styles.dayColor
                  }`}
                >
                  <div>{`${color.day === "" ? "Any day" : color.day}`}</div>
                  <i
                    className={`${
                      showDay ? "ion-ios7-arrow-up" : "ion-ios7-arrow-down"
                    }`}
                  />
                </div>

                <div
                  className={`${styles.dropdown} ${
                    showDay && styles.displayDropDown
                  }`}
                >
                  <div onClick={() => changeDayColor("")}>Any day</div>
                  <div onClick={() => changeDayColor("Starting soon")}>
                    Starting soon
                  </div>
                  <div onClick={() => changeDayColor("Today")}>Today</div>
                  <div onClick={() => changeDayColor("Tomorrow")}>Tomorrow</div>
                  <div onClick={() => changeDayColor("This week")}>
                    This week
                  </div>
                </div>
              </div>
              <div
                onClick={() => setShowType(!showType)}
                className={styles.boxsec}
              >
                <div
                  className={`${styles.boxsecHeading}  ${
                    color.type !== "" && styles.typeColor
                  }`}
                >
                  <div>{`${color.type === "" ? "Any type" : color.type}`}</div>
                  <i
                    className={`${
                      showType ? "ion-ios7-arrow-up" : "ion-ios7-arrow-down"
                    }`}
                  />
                </div>
                <div
                  className={`${styles.dropdown} ${
                    showType && styles.displayDropDown
                  }`}
                >
                  <div onClick={() => changeTypeColor("")}>Any type</div>
                  <div
                    onClick={() => {
                      setGetData({ ...getData, eventLocationType: "Online" });
                      changeTypeColor("Online");
                    }}
                  >
                    Online
                  </div>
                  <div
                    onClick={() => {
                      setGetData({
                        ...getData,
                        eventLocationType: "In person",
                      });
                      changeTypeColor("In person");
                    }}
                  >
                    In person
                  </div>
                </div>
              </div>
              {/* ///////////distance dropdown/////////////// */}
              {/* ///////////distance dropdown/////////////// */}
              {/* ///////////distance dropdown/////////////// */}

              <div
                onClick={() => setShowDistance(!showDistance)}
                className={styles.boxsec}
              >
                <div
                  className={`${styles.boxsecHeading}  ${
                    color.distance !== "" && styles.typeColor
                  }`}
                >
                  <div>{`${
                    color.distance === "" ? "Any distance" : color.distance
                  }`}</div>
                  <i
                    className={`${
                      showDistance ? "ion-ios7-arrow-up" : "ion-ios7-arrow-down"
                    }`}
                  />
                </div>

                <div
                  className={`${styles.dropdown} ${
                    showDistance && styles.displayDropDown
                  }`}
                >
                  <div onClick={() => changeDistanceColor("")}>
                    Any distance
                  </div>
                  <div onClick={() => changeDistanceColor("2 miles")}>
                    2 miles
                  </div>
                  <div onClick={() => changeDistanceColor("5 miles")}>
                    5 miles
                  </div>
                  <div onClick={() => changeDistanceColor("10 miles")}>
                    10 miles
                  </div>
                  <div onClick={() => changeDistanceColor("25 miles")}>
                    25 miles
                  </div>
                  <div onClick={() => changeDistanceColor("50 miles")}>
                    50 miles
                  </div>
                </div>
              </div>
              {/* ///////////catagory dropdown/////////////// */}
              {/* ///////////catagory dropdown/////////////// */}
              {/* ///////////catagory dropdown/////////////// */}
              <div
                onClick={() => setShowCatagory(!showCatagory)}
                className={styles.boxsec}
              >
                <div
                  className={`${styles.boxsecHeading}  ${
                    color.catagory !== "" && styles.typeColor
                  }`}
                >
                  <div>{`${
                    color.catagory === "" ? "Any catagory" : color.catagory
                  }`}</div>
                  <i
                    className={`${
                      showCatagory ? "ion-ios7-arrow-up" : "ion-ios7-arrow-down"
                    }`}
                  />
                </div>

                <div
                  className={`${styles.dropdown} ${
                    showCatagory && styles.displayDropDown
                  }`}
                >
                  <div
                    onClick={() => {
                      setGetData({ ...getData, eventCatagory: "" });
                      changeCatagoryColor("");
                    }}
                  >
                    Any catagory
                  </div>
                  <div
                    onClick={() => {
                      setGetData({
                        ...getData,
                        eventCatagory: "Art & Culture",
                      });
                      changeCatagoryColor("Art & Culture");
                    }}
                  >
                    Art & Culture
                  </div>
                  <div
                    onClick={() => {
                      setGetData({
                        ...getData,
                        eventCatagory: "Health & Wellbeing",
                      });
                      changeCatagoryColor("Health & Wellbeing");
                    }}
                  >
                    Health & Wellbeing
                  </div>
                  <div onClick={() => changeCatagoryColor("Carrer & Business")}>
                    Carrer & Business
                  </div>
                  <div
                    onClick={() =>
                      changeCatagoryColor("Community & Environment")
                    }
                  >
                    Community & Environment
                  </div>
                  <div onClick={() => changeCatagoryColor("Dancing")}>
                    Dancing
                  </div>
                  <div onClick={() => changeCatagoryColor("Games")}>Games</div>
                </div>
              </div>
              {/* ///////////releveance dropdown/////////////// */}
              {/* ///////////releveance dropdown/////////////// */}
              {/* ///////////releveance dropdown/////////////// */}
              <div
                onClick={() => setShowRelevance(!showRelevance)}
                className={styles.boxsec}
              >
                <div
                  className={`${styles.boxsecHeading} ${
                    color.catagory !== "" && styles.typeColor
                  } ${color.relevance !== "" && styles.typeColor}`}
                >
                  <div>
                    <span>sort by:</span>
                    <span>{`${
                      color.relevance === "" ? "Relevance" : color.relevance
                    }`}</span>
                  </div>
                  <i
                    className={`${
                      showRelevance
                        ? "ion-ios7-arrow-up"
                        : "ion-ios7-arrow-down"
                    }`}
                  />
                </div>

                <div
                  className={`${styles.dropdown} ${
                    showRelevance && styles.displayDropDown
                  }`}
                >
                  <div onClick={() => changeRelevanceColor("Date")}>Date</div>
                  <div onClick={() => changeRelevanceColor("Relevance")}>
                    Relevance
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => setShowDistance(!showDistance)}
                className={styles.boxsec}
              >
                <div
                  className={`${styles.boxsecHeading} ${
                    colorGroup.distance !== "" && styles.typeColor
                  }`}
                >
                  <div>{`${
                    colorGroup.distance === ""
                      ? "Any distance"
                      : colorGroup.distance
                  }`}</div>
                  <i
                    className={`${
                      showDistance ? "ion-ios7-arrow-up" : "ion-ios7-arrow-down"
                    }`}
                  />
                </div>

                <div
                  className={`${styles.dropdown} ${
                    showDistance && styles.displayDropDown
                  }`}
                >
                  <div onClick={() => changeGroupDistanceColor("")}>
                    Any distance
                  </div>
                  <div onClick={() => changeGroupDistanceColor("2 miles")}>
                    2 miles
                  </div>
                  <div onClick={() => changeGroupDistanceColor("5 miles")}>
                    5 miles
                  </div>
                  <div onClick={() => changeGroupDistanceColor("10 miles")}>
                    10 miles
                  </div>
                  <div onClick={() => changeGroupDistanceColor("25 miles")}>
                    25 miles
                  </div>
                  <div onClick={() => changeGroupDistanceColor("50 miles")}>
                    50 miles
                  </div>
                </div>
              </div>
              <div
                onClick={() => setShowCatagory(!showCatagory)}
                className={styles.boxsec}
              >
                <div
                  className={`${styles.boxsecHeading} ${
                    colorGroup.catagory !== "" && styles.typeColor
                  }`}
                >
                  <div>{`${
                    colorGroup.catagory === ""
                      ? "Any catagory"
                      : colorGroup.catagory
                  }`}</div>
                  <i
                    className={`${
                      showCatagory ? "ion-ios7-arrow-up" : "ion-ios7-arrow-down"
                    }`}
                  />
                </div>

                <div
                  className={`${styles.dropdown} ${
                    showCatagory && styles.displayDropDown
                  }`}
                >
                  <div onClick={() => changeGroupCatagoryColor("")}>
                    Any catagory
                  </div>
                  <div
                    onClick={() => {
                      setGetData({
                        ...getData,
                        eventCatagory: "Art & Culture",
                      });
                      changeGroupCatagoryColor("Art & Culture");
                    }}
                  >
                    Art & Culture
                  </div>
                  <div
                    onClick={() => {
                      setGetData({
                        ...getData,
                        eventCatagory: "Health & Wellbeing",
                      });
                      changeGroupCatagoryColor("Health & Wellbeing");
                    }}
                  >
                    Health & Wellbeing
                  </div>
                  <div
                    onClick={() =>
                      changeGroupCatagoryColor("Carrer & Business")
                    }
                  >
                    Carrer & Business
                  </div>
                  <div
                    onClick={() =>
                      changeGroupCatagoryColor("Community & Environment")
                    }
                  >
                    Community & Environment
                  </div>
                  <div onClick={() => changeGroupCatagoryColor("Dancing")}>
                    Dancing
                  </div>
                  <div onClick={() => changeGroupCatagoryColor("Games")}>
                    Games
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.contentSectionBox}>
        <div className={styles.contentSection}>
          {data.map((el) => (
            <div className={styles.eachContentBox}>
              <div className={styles.eachContentBoxDetailSection}>
                <div className={styles.eachContentBoxImage}>
                  <img src={el.eventImage} alt="eventImage" />
                </div>
                <div className={styles.eachContentBoxDetailDiv}>
                  <div className={styles.dateAndTime}>{el.dateAndTime}</div>
                  <h3 className={styles.clubName}>
                    {el.groupDetail.groupName}
                  </h3>
                  <div className={styles.clubPlace}>
                    {el.groupDetail.groupName}
                  </div>
                  <div className={styles.attendiesDIv}>Number of attendies</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
