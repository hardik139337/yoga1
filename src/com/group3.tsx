import { css } from '@emotion/css';
import React from 'react';

export default function group3() {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div>
          <h1
            className={css`
              color: #745a82;
              font-family: 'Open Sans';
              font-size: 12px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 58.33px;
              text-align: left;
              text-transform: uppercase;
              /* Text style for "practice" */
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
            1. HATHA YOGA
          </h1>

          <h2
            className={css`
              /* Style for "1. HATHA Y" */

              color: #745a82;
              font-family: 'Open Sans';
              font-size: 33px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 58.33px;
              text-align: left;
              text-transform: uppercase;
              /* Text style for "1, . ,  YO" */
              font-family: 'Open Sans';
              font-weight: undefined;
              font-style: normal;
              letter-spacing: 2.5px;
              line-height: normal;
              /* Text style for "HATHA" */
              font-family: 'Open Sans - Bold';
              font-weight: 700;
              font-style: normal;
              letter-spacing: 2.5px;
              line-height: normal;
            `}
          >
            1. HATHA YOGA
          </h2>
          <p
            className={css`
              /* Style for "Hatha is t" */

              color: #745a82;
              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 45.83px;
              text-align: left;
              /* Text style for "H, atha is" */
              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
            `}
          >
            Hatha is the most classic yoga. Its origin is in the Raya Yoga of
            Patanjali and other classical texts such as Bhagavad Gita and Hatha
            Yoga Pradipika.
          </p>
          <div
            className={css`
              /* Style for "Line" */
              width: 531px;
              height: 2px;
              border: 1px solid #745a82;
            `}
          ></div>
          <p
            className={css`
              /* Style for "10 modules" */

              color: #745a82;
              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 41.67px;
              text-align: left;
              /* Text style for "10 modules" */
              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
            `}
          >
            10 modules <br /> divided into 7 weekends
          </p>

          <p>Start April 15 20.00 hs</p>
          <p>Price $900</p>
        </div>
        <div className='relative'>
          <img
            className={
              'absolute ' +
              css`
                /* top: 0;
                
                left: 0; */
                z-index: -1;
                border-radius: 50%;
              `
            }
            src='img/Place_Your_Image_Here_(Double_Click_to_Edit)-3.png'
            alt=''
          />
          <img className={'z-10 ' + css``} src='img/3-layers.png' alt='' />
          asdfgfh
        </div>
      </div>
    </div>
  );
}
