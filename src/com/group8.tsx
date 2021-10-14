import { css } from '@emotion/css';
import React from 'react';

export default function group8() {
  return (
    <div>
      <div className='c grid grid-cols-2'>
        <div
          className={css`
            margin-left: 100px;
            margin-top: 40px;
          `}
        >
          <h1
            className={css`
              color: #70577d;
              margin-bottom: 61px;
              font-family: 'Open Sans';
              font-size: 50px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 58.33px;
              text-align: left;
              text-transform: uppercase;

              font-family: 'Open Sans';
              font-weight: undefined;
              font-style: normal;
              letter-spacing: 3.75px;
              line-height: normal;

              font-family: 'Open Sans - Bold';
              font-weight: 700;
              font-style: normal;
              letter-spacing: 3.75px;
              line-height: normal;
            `}
          >
            yoga initiation <br /> workshop
          </h1>

          <h2
            className={css`
              color: #70577d;
              margin-bottom: 37px;

              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 41.67px;
              text-align: left;
              text-transform: uppercase;

              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
            `}
          >
            TRY YOUR FIRST FREE YOGA CLASS
          </h2>
          <p
            className={css`
              color: #70577d;
              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 300;
              font-style: normal;
              letter-spacing: normal;
              line-height: 41.67px;
              text-align: left;
              text-transform: uppercase;

              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
            `}
          >
            22.12.2020 <br /> 24.03. 2021
          </p>
        </div>
        <div>
          <img src='img/2-layers.png' alt='' />
        </div>
      </div>
    </div>
  );
}
