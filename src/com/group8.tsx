import { css } from '@emotion/css';

export default function group8() {
  return (
    <div>
      <div
        className={
          'grid grid-cols-2 mx-auto ' +
          css`
            max-width: 1092px;
          `
        }
      >
        <div
          className={
            'relative ' +
            css`
              margin-left: 100px;
              margin-top: 40px;
            `
          }
        >
          <p
            className={css`
              position: absolute;
              top: 0;
              left: -88px;
              z-index: 10;
              writing-mode: vertical-rl;
              text-orientation: upright;

              /* Style for "i n i t i" */

              color: #70577d;
              font-family: 'Open Sans';
              font-size: 14px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 33.33px;
              text-align: center;
              text-transform: uppercase;
              /* Text style for "i , n , i" */
              font-style: normal;
              letter-spacing: 1.05px;
              line-height: normal;
            `}
          >
            i n i t i a t i o n
          </p>
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
        <div className='relative'>
          <img src='img/2-layers.png' alt='' />
          <p
            className={css`
              position: absolute;
              transform: translateY(50%);
              top: -50px;
              /* right: -88px; */
              right: -50px;
              z-index: 10;
              writing-mode: vertical-rl;
              text-orientation: upright;

              color: #70577d;
              font-family: 'Open Sans';
              font-size: 22px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 45.83px;
              text-align: center;
              text-transform: uppercase;

              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
            `}
          >
            W o r k s h o p
          </p>
        </div>
      </div>
    </div>
  );
}
