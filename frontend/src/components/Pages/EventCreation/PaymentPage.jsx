import React, { useContext } from "react";
import styles from "./PaymentPage.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContextProvider";
import { Redirect } from "react-router";
import { postData } from "../../../utils/fetchData";

export default function PaymentPage() {
  const { createEventData } = useContext(AuthContext);

  const hanlePostGroup = async () => {
    let data = await postData(createEventData);
    console.log(data);
  };
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionBox}>
          <div className={styles.paymentHeading}>
            <h2>Payment options</h2>
            <p>
              You're just one step away from starting Soumyashree Bibhudutta
              Behera!
            </p>
          </div>
          <div className={styles.planDiv}>
            <h3>Pick a plan</h3>
            <div className={styles.planDivBox}>
              <i className="ion-ios7-circle-outline" />
              <div className={styles.planDivDetail}>
                <h3>Pay monthly</h3>
                <p>
                  <span className={styles.previousPrice}>$23.99</span>
                  <span>$16.79 per month</span>
                </p>
              </div>
            </div>
            <div className={styles.planDivBox}>
              <i className="ion-ios7-circle-filled" />
              <div className={styles.planDivDetail}>
                <h3>
                  Pay every 6 months{" "}
                  <span
                    style={{
                      padding: "2px 5px",
                      background: "#008294",
                      borderRadius: "4px",
                      color: "white",
                    }}
                  >
                    BEST VALUE
                  </span>
                </h3>
                <p>
                  <span className={styles.previousPrice}>$23.99</span>
                  <span>$11.54 per month for 6 months</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.discountDetails}>
            <h3>Special discount: 30% off today’s order.</h3>
            <p>
              Your discount has been automatically applied to today’s payment.
            </p>
          </div>
          <div className={styles.promocodeBox}>
            <h3>Promo code</h3>
            <div className={styles.promocodeInputBox}>
              <div>
                <input type="text" />
              </div>
              <button className={styles.promocodeInputButton}>Apply</button>
            </div>
          </div>
          <div className={styles.subdcriptionDetails}>
            <h3>Your Meetup subscription includes:</h3>
            <div className={styles.subdcriptionDetailsPoint}>
              <i className="ion-ios7-checkmark" />
              <p>Promotion of your new group to potential members</p>
            </div>
            <div className={styles.subdcriptionDetailsPoint}>
              <i className="ion-ios7-checkmark" />
              <p>Promotion of your new group to potential members</p>
            </div>
            <div className={styles.subdcriptionDetailsPoint}>
              <i className="ion-ios7-checkmark" />
              <p>Promotion of your new group to potential members</p>
            </div>
          </div>
          <div className={styles.paymentInformationBox}>
            <h3>Payment information</h3>
            <div>* Indicates required field</div>
            <div className={styles.paymentInformationEachInput}>
              <label>
                Country*
                <div className={styles.promocodeInputBox}>
                  <div className={styles.reduceMarginInput}>
                    <input type="text" />
                  </div>
                </div>
              </label>
            </div>
            <div className={styles.regionBox}>
              <label>
                Region*
                <div className={styles.promocodeInputBox}>
                  <div>
                    <input type="text" />
                  </div>
                </div>
              </label>
              <label>
                Zip / Postal code*
                <div className={styles.promocodeInputBox}>
                  <div className={styles.reduceMarginInput}>
                    <input type="text" />
                  </div>
                </div>
              </label>
            </div>
            <div className={styles.paymentInformationEachInput}>
              <label>
                GST number
                <div className={styles.promocodeInputBox}>
                  <div className={styles.reduceMarginInput}>
                    <input type="text" />
                  </div>
                </div>
                <h5 style={{ margin: "5px 0px" }}>
                  By inputting your GST number you confirm that you are going to
                  account for the GST
                </h5>
              </label>
            </div>
            <div className={styles.paymentInformationEachInput}>
              <label>
                Name on card*
                <div className={styles.promocodeInputBox}>
                  <div className={styles.reduceMarginInput}>
                    <input type="text" />
                  </div>
                </div>
              </label>
            </div>
            <div className={styles.paymentInformationEachInput}>
              <label>
                Card number*
                <div className={styles.promocodeInputBox}>
                  <div className={styles.reduceMarginInput}>
                    <input type="text" placeholder="1234 1234 1234 1234" />
                  </div>
                </div>
              </label>
            </div>
            <div className={styles.regionBox}>
              <label>
                CVC*
                <div className={styles.promocodeInputBox}>
                  <div>
                    <input type="text" placeholder="CVC" />
                  </div>
                </div>
              </label>
              <label>
                Expiration date*
                <div className={styles.promocodeInputBox}>
                  <div className={styles.reduceMarginInput}>
                    <input type="text" placeholder="MM / YY" />
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className={styles.paymentPriceDetailsBox}>
            <h3>Order Summary</h3>
            <div className={styles.paymentPriceDetailsPrice}>
              <div>Meetup subscription: monthly</div>
              <div>$23.99</div>
            </div>
            <div
              className={styles.paymentPriceDetailsPrice}
              style={{ color: "#008294" }}
            >
              <div>Discount: 30% off today</div>
              <div>$23.99</div>
            </div>
            <div className={styles.paymentPriceDetailsPrice}>
              <div>GST (18.00%)</div>
              <div>$23.99</div>
            </div>
            <div className={styles.paymentPriceDetailsPrice}>
              <h3>Due today:</h3>
              <h3>$23.99</h3>
            </div>
          </div>
          <Link to="/login">
            <button
              onClick={() => hanlePostGroup()}
              className={styles.checkoutButton}
            >
              Confirm subscription
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
