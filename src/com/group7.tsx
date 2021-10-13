import { css } from '@emotion/css';
import React from 'react';

export default function group7() {
  return (
    <div>
      <h1>look at our Summer classes</h1>
      <div
        className={
          'grid grid-cols-3 ' +
          css`
            div {
              h1 {
                /* Style for "Anusara" */

                color: #745a82;
                font-family: 'Open Sans';
                font-size: 33px;
                font-weight: 700;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                text-align: left;
                /* Text style for "Anusara" */
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
              }

              p {
                /* Style for "Lorem ipsu" */

                color: #745a82;
                font-family: 'Open Sans';
                font-size: 25px;
                font-weight: 300;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                text-align: left;
                /* Text style for "L, o, r, e" */
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
              }
              div {
                /* Style for "Line" */
                width: 290px;
                height: 2px;
                border: 1px solid #745a82;
              }

              h2 {
                /* Style for "Friday 20:" */

                color: #745a82;
                font-family: 'Open Sans';
                font-size: 28px;
                font-weight: 300;
                font-style: normal;
                letter-spacing: normal;
                line-height: 65.89px;
                text-align: left;
                /* Text style for "Friday" */
                font-family: 'Open Sans - Bold';
                font-weight: 700;
                font-style: normal;
                letter-spacing: 1.05px;
                line-height: normal;
                /* Text style for "20:00 hs." */
                font-family: 'Open Sans - Light';
                font-weight: 300;
                font-style: normal;
                letter-spacing: 1.05px;
                line-height: normal;
              }
            }
          `
        }
      >
        <div>
          <img src='' alt='' />
          <h1>Anusara</h1>
          <p>Lorem ipsum sit amet, consectetur adipisicing...</p>
          <div></div>
          <h2>Friday 20:00 hs.</h2>
        </div>
        <div>
          <img src='' alt='' />
          <h1>Anusara</h1>
          <p>Lorem ipsum sit amet, consectetur adipisicing...</p>
          <div></div>
          <h2>Friday 20:00 hs.</h2>
        </div>
        <div>
          <img src='' alt='' />
          <h1>Anusara</h1>
          <p>Lorem ipsum sit amet, consectetur adipisicing...</p>
          <div></div>
          <h2>Friday 20:00 hs.</h2>
        </div>
      </div>

      <button
        className={css`
          /* Style for "Show More" */
          /* Style for "Shape" */
          width: 334px;
          height: 75px;
          box-shadow: 0 -5px 43px rgba(2, 4, 0, 0.2);
          border-radius: 38px;
          background-color: #745a82;

          color: #ffffff;
          font-family: 'Open Sans';
          font-size: 23px;
          font-weight: 700;
          font-style: normal;
          letter-spacing: normal;
          line-height: 21.01px;

          text-transform: uppercase;
          /* Text style for "S, h, o, w" */
          font-style: normal;
          letter-spacing: 11.58px;
          line-height: normal;
        `}
      >
        Show More
      </button>
    </div>
  );
}
