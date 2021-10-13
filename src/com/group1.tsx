import { css } from '@emotion/css';

export default function group() {
  return (
    <div>
      <div
        className={
          'mx-auto ' +
          css`
            max-width: 1101px;
          `
        }
      >
        <h1
          className={css`
            width: max-content;
            margin: 0 auto;
            /* Style for "Meet our" */

            color: #745a82;
            font-family: 'Open Sans';
            font-size: 42px;
            font-weight: 300;
            font-style: normal;
            letter-spacing: normal;
            line-height: normal;
            text-align: center;
            text-transform: uppercase;
            /* Text style for "M, eet our" */
            font-family: 'Open Sans - Light';
            font-weight: 300;
            font-style: normal;
            letter-spacing: 5.36px;
            line-height: normal;
            /* Text style for "yoga class" */
            font-family: 'Open Sans - Bold';
            font-weight: 700;
            font-style: normal;
            letter-spacing: 5.36px;
            line-height: normal;
            /* Text style for "" */
            font-family: Nunito;
            font-weight: 300;
            font-style: normal;
            letter-spacing: 5.36px;
            line-height: normal;
          `}
        >
          Meet our <br /> yoga classes{' '}
        </h1>
        <div className='grid grid-cols-3'>
          <div>
            <img
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
              `}
            >
              Lorem ipsum sit amet, consectetur adipisicing...
            </p>
            <br
              className={css`
                border: 1px solid #745a82;
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

                font-family: 'Open Sans - Light';
                font-weight: 300;
                font-style: normal;
                letter-spacing: 1.05px;
                line-height: normal;
              `}
            >
              Monday 20:00 hs.
            </h2>
          </div>
          <div>
            <img
              src='img/Place_Your_Image_Here_(Double_Click_to_Edit)-2.png'
              alt=''
            />
            <h1>Hatha</h1>
            <p>Lorem ipsum sit amet, consectetur adipisicing...</p>
            <br />
            <h2>Monday 20:00 hs.</h2>
          </div>
          <div>
            <img
              src='img/Place_Your_Image_Here_(Double_Click_to_Edit)-2.png'
              alt=''
            />
            <h1>Hatha</h1>
            <p>Lorem ipsum sit amet, consectetur adipisicing...</p>
            <br />
            <h2>Monday 20:00 hs.</h2>
          </div>
        </div>
      </div>
      <button
        className={css`
          /* Style for "Show More" */

          /* Style for "Shape" */
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
