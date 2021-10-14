import { css } from '@emotion/css';

export default function group3() {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div
          className={css`
            padding-top: 167px;
            padding-left: 149px;
          `}
        >
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
            practice
            <br /> dynamics
          </h1>

          <h2
            className={css`
              color: #745a82;
              font-family: 'Open Sans';
              font-size: 33px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 58.33px;
              text-align: left;
              text-transform: uppercase;

              margin-bottom: 43px;
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
            1. HATHA YOGA
          </h2>
          <p
            className={css`
              max-width: 537px;
              color: #745a82;
              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 45.83px;
              text-align: left;

              font-style: normal;
              letter-spacing: 1.88px;
              margin-bottom: 35px;

              line-height: normal;
            `}
          >
            Hatha is the most classic yoga. Its origin is in the Raya Yoga of
            Patanjali and other classical texts such as Bhagavad Gita and Hatha
            Yoga Pradipika.
          </p>
          <div
            className={css`
              width: 531px;
              height: 2px;
              border: 1px solid #745a82;
              margin-bottom: 44px;
            `}
          ></div>
          <p
            className={css`
              color: #745a82;
              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 41.67px;
              text-align: left;

              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
              margin-bottom: 58px;
            `}
          >
            10 modules <br /> divided into 7 weekends
          </p>
          <div
            className={
              'flex ' +
              css`
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

                font-family: 'Open Sans';
                font-weight: undefined;
                font-style: normal;
                letter-spacing: 1.88px;
                line-height: normal;
                p {
                  margin-right: 86px;
                }
              `
            }
          >
            <p>
              Start <br /> April 15 <br /> 20.00 hs
            </p>
            <p>
              Price <br /> $900
            </p>
          </div>
        </div>
        <div>
          <img src='img/5-layers-4 (1).png' alt='' />
        </div>
      </div>
    </div>
  );
}
