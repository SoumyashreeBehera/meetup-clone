import React, { useState } from "react";
import styles from './EventCreation.module.css';
import { CommonTop } from "./CommonTop";
 import { Link } from "react-router-dom";


export default function EventC6() {
    const [status, setStatus] = useState(true);
    return (
        <div>
        <CommonTop />
            <div style={{ width: '100%', display: 'flex' }}>
                <div
                    style={{
                        backgroundColor: 'rgb(0, 130, 148) ',
                        width: '85%',
                        height: '15px',
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: 'lightgrey ',
                        width: '15%',
                        height: '15px',
                    }}
                ></div>
            </div>
            <div className={styles.eve1} >
                <h5 style={{ marginLeft: "280px", fontSize: "15px" }}>Step 6 of 7</h5>
            </div>
        <div className={styles.section}>
            <div className={styles.flexBox}>
                <div>
                    <h1 className={styles.firstBoxHeading}>
                        Choose the best plan for you
                    </h1>
                    <div className={styles.toggleBox}>
                        <div style={{ color: "#A2A9C0" }}>1 month</div>
                        <label className={styles.switch}>
                            <input type="checkbox" checked={status ? true : false} />
                            <span
                                onClick={() => setStatus(!status)}
                                className={styles.slider}
                            ></span>
                        </label>
                        <div style={{ color: "#8498AB" }}>6 month</div>
                    </div>
                    <div className={styles.options}>Groups</div>
                    <div className={styles.options}>Unlimited events & attendees</div>
                    <div className={styles.options}>
                        Group & event promotion to interested members
                    </div>
                    <div className={styles.options}>
                        Simple online and in person event organizing
                    </div>
                    <div className={styles.options}>Assign unlimited co-hosts</div>
                    <div className={styles.options}>Ticket fees and group dues</div>
                    <div className={styles.options}>
                        Platform to manage a network of groups
                    </div>
                    <div className={styles.options}>Access to attendee emails</div>
                    <div className={styles.options}>Advanced network analytics</div>
                    <div className={styles.options}>Custom attendance forms</div>
                    <div className={styles.options}>
                        SEO-friendly branded network page
                    </div>
                    <div className={styles.options}>Easy Mailchimp integration</div>
                    <div className={styles.options}>Network-wide messaging tools</div>
                    <div className={styles.options}>API access</div>
                    <div className={styles.options}>
                        Premium support from community experts
                    </div>
                </div>
                <div className={styles.optionBox}>
                    <div className={styles.optionTag}>COMMUNITY ESSENTIALS</div>
                    <h2 className={styles.optionHeading}>Standard</h2>
                    <div className={styles.priceTag}>
                        $11.54<span style={{ color: "#C5C4C4" }}> / month</span>
                    </div>
                    <div className={styles.discountTag}>
                        <span className={styles.discountTagStrike}>$16.49</span>
                        <span className={styles.discountTagdiffer}>30% off</span>
                    </div>
                    <Link to="/start/payment"><button className={styles.checkoutButton}>Create my group</button></Link>
                    <div className={styles.options}>3</div>
                    <div className={styles.options} style={{ color: "#f65e5e" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div style={{ color: "#f65e5e" }} className={styles.options}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={styles.options} style={{ color: "#f65e5e" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={styles.options} style={{ color: "#f65e5e" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={styles.options} style={{ color: "#f65e5e" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={styles.options} style={{ color: "#C5C4C4" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20 12H4"
                            />
                        </svg>
                    </div>
                    <div className={styles.options} style={{ color: "#C5C4C4" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20 12H4"
                            />
                        </svg>
                    </div>
                    <div className={styles.options} style={{ color: "#C5C4C4" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20 12H4"
                            />
                        </svg>
                    </div>
                    <div className={styles.options} style={{ color: "#C5C4C4" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20 12H4"
                            />
                        </svg>
                    </div>
                    <div className={styles.options} style={{ color: "#C5C4C4" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20 12H4"
                            />
                        </svg>
                    </div>
                    <div className={styles.options} style={{ color: "#C5C4C4" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20 12H4"
                            />
                        </svg>
                    </div>
                    <div className={styles.options} style={{ color: "#C5C4C4" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20 12H4"
                            />
                        </svg>
                    </div>
                    <div className={styles.options} style={{ color: "#C5C4C4" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20 12H4"
                            />
                        </svg>
                    </div>
                    <div className={styles.options} style={{ color: "#C5C4C4" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20 12H4"
                            />
                        </svg>
                    </div>
                </div>
                <div className={`${styles.optionBox} ${styles.optionBox2}`}>
                    <div className={styles.optionTag}>COMMUNITY THAT SCALES</div>
                    <h2 className={styles.optionHeading}>Pro</h2>
                    <div className={styles.priceTag}>
                        $21.00<span style={{ color: "#C5C4C4" }}> / group </span>
                        <span style={{ color: "#C5C4C4" }}> / month</span>
                    </div>
                    <div className={styles.discountTag}>
                        <span className={styles.discountTagStrike}>$30.00</span>
                        <span className={styles.discountTagdiffer}>30% off</span>
                    </div>
                    <button className={styles.checkoutButton}>Create my group</button>
                    <div className={`${styles.options} ${styles.options1}`}>
                        Unlimited
                    </div>

                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${styles.options1}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.eve6_button}>
                    <Link to="/start/guidelines" ><button>Back</button></Link>
               </div>
            </div>
        </div>
    );
}

