import { css } from '@emotion/css';
import React from 'react';

export default function group5() {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div></div>
        <div>
          <h1
            className={css`
              /* Style for "Positions" */

              color: #745a82;
              font-family: 'Open Sans';
              font-size: 12px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 58.33px;
              text-align: left;
              text-transform: uppercase;
              /* Text style for "Positions" */
              font-family: 'Open Sans - Bold';
              font-weight: 700;
              font-style: normal;
              letter-spacing: 0.9px;
              line-height: normal;
              /* Text style for "dynamics" */
              font-family: 'Open Sans - Light';
              font-weight: 300;
              font-style: normal;
              letter-spacing: 0.9px;
              line-height: normal;
            `}
          >
            Positions dynamics
          </h1>

          <h2
            className={css`
              /* Style for "2. Kundali" */

              color: #745a82;
              font-family: 'Open Sans';
              font-size: 33px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 58.33px;
              text-align: left;
              text-transform: uppercase;
              /* Text style for "2, . ,  YO" */
              font-family: 'Open Sans';
              font-weight: undefined;
              font-style: normal;
              letter-spacing: 2.5px;
              line-height: normal;
              /* Text style for "Kundalini" */
              font-family: 'Open Sans - Bold';
              font-weight: 700;
              font-style: normal;
              letter-spacing: 2.5px;
              line-height: normal;
            `}
          >
            2. Kundalini YOGA
          </h2>
          <p
            className={css`
              /* Style for "Kundalini" */

              color: #745a82;
              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 45.83px;
              text-align: left;
              /* Text style for "K, undalin" */
              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
            `}
          >
            Kundalini is the most classic yoga. Its origin is in the Raya Yoga
            of Patanjali and other classical texts such as Bhagavad Gita and
            Hatha Yoga Pradipika.
          </p>
          <div
            className={css`
              /* Style for "Line" */
              width: 531px;
              height: 2px;
              border: 1px solid #745a82;
            `}
          ></div>

          <h3
            className={css`
              /* Style for "17 modules" */

              color: #745a82;
              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 41.67px;
              text-align: left;
              /* Text style for "17 modules" */
              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
            `}
          >
            17 modules divided into 5 weekends
          </h3>

          <h4
            className={css`
              /* Style for "Start Apri" */

              color: #745a82;
              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 33.33px;
              text-align: left;
              /* Text style for "S, tart" */
              font-family: 'Open Sans - Bold';
              font-weight: 700;
              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
              /* Text style for "April 15 ," */
              font-family: 'Open Sans';
              font-weight: undefined;
              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
            `}
          >
            Start April 15 20.00 hs Price $900
          </h4>
        </div>
      </div>
    </div>
  );
}
