import React from 'react';
import { CommonTop } from './CommonTop';
import styles from './EventCreation.module.css';
import { Link } from 'react-router-dom';

const EventC4 = () => {
   
  return (
    <div>
      <CommonTop />
      <div style={{ width: '100%', display: 'flex' }}>
        <div
          style={{
            backgroundColor: 'rgb(0, 130, 148) ',
            width: '50%',
            height: '15px',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'lightgrey ',
            width: '50%',
            height: '15px',
          }}
        ></div>
      </div>
      <div className={styles.eve1}>
        <h5 style={{ marginLeft: "280px", fontSize: "15px" }}>Step 4 of 7</h5>
        <h1>
          Now describe what your group <br />
          will be about
        </h1>
        <h4>
          People will see this when we promote your group but you’ll be able to
          add to it later, too.
        </h4>
        <br />
        <div className={styles.eve3_list}>
          <p>1. What's the purpose of the group?</p><br/>
          <p>2. Who should join?</p><br/>
          <p>3. What will you do at your events?</p>
        </div>

        <textarea
          style={{ textAlign: 'center', padding: '30px' }}
          cols='90'
          rows='8'
          placeholder='Please write at least 50 characters'
        ></textarea>

        <div
          style={{
            textAlign: 'left',
            marginTop: '30px',
            width: '650px',
            height: '150px',
          }}
        >
          <h3>Here's an example:</h3>
          <h4>
            “Welcome tech lovers far and wide! We’re an online and in-person
            tech-enthusiast <br />
            group hosting live speaking events on a range of tech topics. You
            can join us in person <br />
            if possible or on one of our live streams. Look out for our virtual
            happy hours and other <br />
            networking events.”
          </h4>
        </div>
      </div>

      <div className={styles.eve2_button}>
        <Link to="/start/name" ><button className={ styles.eve2_back}>Back</button></Link>
        <Link to='/start/guidelines'>
          <button className={ styles.eve2_next}>Next</button>
        </Link>
      </div>
      
    </div>
  );
};

export { EventC4 };
