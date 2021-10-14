import { css } from '@emotion/css';
import React from 'react';

export default function group5() {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div>
          <img src='img/5-layers-2.png' alt='' />
        </div>
        <div
          className={css`
            padding-top: 168px;
            padding-left: 85px;
          `}
        >
          <h1
            className={css`
              color: #745a82;
              font-family: 'Open Sans';
              font-size: 12px !important;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 58.33px;
              text-align: left;
              text-transform: uppercase;
              margin-bottom: 98px;
              font-family: 'Open Sans - Bold';
              font-weight: 700;
              font-style: normal;
              letter-spacing: 0.9px;
              line-height: normal;

              font-family: 'Open Sans - Light';
              font-weight: 300;
              font-style: normal;
              letter-spacing: 0.9px;
              line-height: normal;
            `}
          >
            Positions <br />
            dynamics
          </h1>

          <h2
            className={css`
              color: #745a82;
              font-family: 'Open Sans';
              margin-bottom: 43px;
              font-size: 33px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 58.33px;
              text-align: left;
              text-transform: uppercase;

              font-family: 'Open Sans';
              font-weight: undefined;
              font-style: normal;
              letter-spacing: 2.5px;
              line-height: normal;

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
              color: #745a82;
              font-family: 'Open Sans';
              font-size: 25px;
              margin-bottom: 35px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 45.83px;
              text-align: left;
              max-width: 498px;
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
              width: 531px;
              height: 2px;
              border: 1px solid #745a82;
              margin-bottom: 44px;
            `}
          ></div>

          <h3
            className={css`
              color: #745a82;
              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 41.67px;
              text-align: left;
              margin-bottom: 58px;
              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
            `}
          >
            17 modules <br /> divided into 5 weekends
          </h3>

          <h4
            className={css`
              color: #745a82;
              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 33.33px;
              text-align: left;

              font-family: 'Open Sans - Bold';
              font-weight: 700;
              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
              margin-bottom: 77px;
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
