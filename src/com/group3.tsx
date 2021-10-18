import { css } from '@emotion/css';

export default function group3() {
  return (
    <div
      className={
        'relative ' +
        css`
          background-image: url('img/Shape-2.png');
          background-repeat: no-repeat;
          background-size: 50%;
        `
      }
    >
      <div
        className={
          'grid grid-cols-2 sm:grid-cols-1 mx-auto ' +
          css`
            max-width: 1253px;
          `
        }
      >
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
              font-size: 40px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 58.33px;
              text-align: left;
              text-transform: uppercase;
              margin-bottom: 98px;

              font-weight: 700;
              font-style: normal;
              letter-spacing: 0.9px;
              line-height: normal;
            `}
          >
            practice
            <br />{' '}
            <span
              className={css`
                font-family: 'Open Sans - Light';
                font-weight: 300;
                font-style: normal;
                letter-spacing: 0.9px;
                line-height: normal;
              `}
            >
              dynamics
            </span>
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
              max-width: 531px;
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
        <div className='relative'>
          <img src='img/5-layers-4 (1).png' alt='' />
          <p
            className={css`
              position: absolute;
              bottom: 102px;
              right: 69px;
              z-index: 10;
              writing-mode: vertical-rl;
              text-orientation: upright;

              color: #745a82;
              font-family: 'Open Sans';

              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 41.67px;

              text-transform: uppercase;

              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
            `}
          >
            h a t h a
          </p>
        </div>
      </div>
    </div>
  );
}
