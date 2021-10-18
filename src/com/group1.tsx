import { css } from '@emotion/css';

export default function group() {
  return (
    <div className='overflow-hidden'>
      <div
        className={
          'mx-auto ' +
          css`
            max-width: 1101px;
            padding-top: 90px;
          `
        }
      >
        <h1
          className={css`
            position: relative;
            width: max-content;
            margin: 0 auto;
            color: #745a82;
            font-family: 'Open Sans';
            font-size: 42px;
            font-weight: 300;
            font-style: normal;
            letter-spacing: normal;
            line-height: normal;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 85px;
            padding-bottom: 50px;
          `}
        >
          <div
            className={css`
              position: absolute;
              border-radius: 25546846px;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              z-index: -12;
              width: 1802px;
              height: 1802px;
              box-shadow: 0 -5px 16px rgba(2, 4, 0, 0.13);
              background-color: #ebf2f2;
            `}
          ></div>
          Meet our <br />{' '}
          <span
            className={css`
              font-family: 'Open Sans - Bold';
              font-weight: 700;
              font-style: normal;
              letter-spacing: 5.36px;
              line-height: normal;
            `}
          >
            {' '}
            yoga classes{' '}
          </span>
        </h1>
        <div className='grid grid-cols-3 sm:grid-cols-1 gap-11 md:gap-5  w-11/12 mx-auto relative'>
          <div>
            <img
              className={
                'absolute ' +
                css`
                  top: 50%;
                `
              }
              src='img/Shape.png'
              alt=''
            />
            <img
              className={
                'rounded-full ' +
                css`
                  /* width: 339px; */
                  /* height: 297px; */
                  margin-bottom: 50px;
                `
              }
              src='img/Place_Your_Image_Here_(Double_Click_to_Edit)-2.png'
              alt=''
            />
            <h1
              className={css`
                color: #745a82;
                font-family: 'Open Sans';
                font-size: 33px;
                font-weight: 700;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                text-align: left;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                margin-bottom: 26px;
              `}
            >
              Hatha
            </h1>
            <p
              className={css`
                color: #745a82;
                font-family: 'Open Sans';
                font-size: 25px;
                font-weight: 300;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                text-align: left;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                margin-bottom: 24px;
              `}
            >
              Lorem ipsum sit amet, consectetur adipisicing...
            </p>
            <div
              className={css`
                border: 1px solid #745a82;
                margin-bottom: 20px;
              `}
            />
            <h2
              className={css`
                color: #745a82;
                font-family: 'Open Sans';
                font-size: 28px;
                font-weight: 300;
                font-style: normal;
                letter-spacing: normal;
                line-height: 65.89px;
                text-align: left;

                font-family: 'Open Sans - Bold';
                font-weight: 700;
                font-style: normal;
                letter-spacing: 1.05px;
                line-height: normal;
              `}
            >
              Monday{' '}
              <span
                className={css`
                  font-family: 'Open Sans - Light';
                  font-weight: 300;
                  font-style: normal;
                  letter-spacing: 1.05px;
                  line-height: normal;
                `}
              >
                {' '}
                20:00 hs.
              </span>
            </h2>
          </div>
          <div>
            <img
              className={
                'absolute ' +
                css`
                  top: 50%;
                `
              }
              src='img/Shape.png'
              alt=''
            />
            <img
              className={
                'rounded-full ' +
                css`
                  /* width: 339px;
                  height: 297px; */
                  margin-bottom: 50px;
                `
              }
              src='img/Place_Your_Image_Here_(Double_Click_to_Edit)-2.png'
              alt=''
            />
            <h1
              className={css`
                color: #745a82;
                font-family: 'Open Sans';
                font-size: 33px;
                font-weight: 700;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                text-align: left;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                margin-bottom: 26px;
              `}
            >
              Hatha
            </h1>
            <p
              className={css`
                color: #745a82;
                font-family: 'Open Sans';
                font-size: 25px;
                font-weight: 300;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                text-align: left;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                margin-bottom: 24px;
              `}
            >
              Lorem ipsum sit amet, consectetur adipisicing...
            </p>
            <div
              className={css`
                border: 1px solid #745a82;
                margin-bottom: 20px;
              `}
            />
            <h2
              className={css`
                color: #745a82;
                font-family: 'Open Sans';
                font-size: 28px;
                font-weight: 300;
                font-style: normal;
                letter-spacing: normal;
                line-height: 65.89px;
                text-align: left;

                font-family: 'Open Sans - Bold';
                font-weight: 700;
                font-style: normal;
                letter-spacing: 1.05px;
                line-height: normal;
              `}
            >
              Monday{' '}
              <span
                className={css`
                  font-family: 'Open Sans - Light';
                  font-weight: 300;
                  font-style: normal;
                  letter-spacing: 1.05px;
                  line-height: normal;
                `}
              >
                {' '}
                20:00 hs.
              </span>
            </h2>
          </div>
          <div>
            <img
              className={
                'absolute ' +
                css`
                  top: 50%;
                `
              }
              src='img/Shape.png'
              alt=''
            />
            <img
              className={
                'rounded-full ' +
                css`
                  /* width: 339px;
                  height: 297px; */
                  margin-bottom: 50px;
                `
              }
              src='img/Place_Your_Image_Here_(Double_Click_to_Edit)-2.png'
              alt=''
            />
            <h1
              className={css`
                color: #745a82;
                font-family: 'Open Sans';
                font-size: 33px;
                font-weight: 700;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                text-align: left;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                margin-bottom: 26px;
              `}
            >
              Hatha
            </h1>
            <p
              className={css`
                color: #745a82;
                font-family: 'Open Sans';
                font-size: 25px;
                font-weight: 300;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                text-align: left;
                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                margin-bottom: 24px;
              `}
            >
              Lorem ipsum sit amet, consectetur adipisicing...
            </p>
            <div
              className={css`
                border: 1px solid #745a82;
                margin-bottom: 20px;
              `}
            />
            <h2
              className={css`
                color: #745a82;
                font-family: 'Open Sans';
                font-size: 28px;
                font-weight: 300;
                font-style: normal;
                letter-spacing: normal;
                line-height: 65.89px;
                text-align: left;

                font-family: 'Open Sans - Bold';
                font-weight: 700;
                font-style: normal;
                letter-spacing: 1.05px;
                line-height: normal;
              `}
            >
              Monday{' '}
              <span
                className={css`
                  font-family: 'Open Sans - Light';
                  font-weight: 300;
                  font-style: normal;
                  letter-spacing: 1.05px;
                  line-height: normal;
                `}
              >
                {' '}
                20:00 hs.
              </span>
            </h2>
          </div>
        </div>
      </div>
      <button
        className={css`
          margin: auto;
          display: block;
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

          font-style: normal;
          letter-spacing: 11.58px;
          line-height: normal;

          margin-top: 76px;
        `}
      >
        Show More
      </button>
    </div>
  );
}
