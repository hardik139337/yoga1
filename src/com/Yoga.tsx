import { css } from '@emotion/css';

export default function Yoga() {
  return (
    <div
      className={css`
        img {
          width: 100%;
          height: 100%;
        }
        min-height: 1000px;
        display: grid;
        place-items: center;
        position: relative;
        * {
          position: relative;
        }
      `}
    >
      <img
        className={css`
          position: absolute !important;
        `}
        src='img/Place_Your_Image_Here_(Double_Click_to_Edit).png'
        alt=''
      />

      <div
        className={css`
          display: grid;
          place-items: center;
          min-height: 702px;
          max-width: 702px;
        `}
      >
        <img
          className={css`
            position: absolute !important;
          `}
          src='img/Design.png'
          alt=''
        />
        <div
          className={css`
            max-width: 347px;
            min-height: 244px;
          `}
        >
          <h1
            className={css`
              margin-bottom: 30px;
              color: #745a82;
              font-family: 'Open Sans - Light';
              font-size: 42px;
              font-weight: 150;
              font-style: normal;
              letter-spacing: normal;
              line-height: 50px;
              text-align: center;
            `}
          >
            Healthy & Fresh
          </h1>
          <h1
            className={css`
              color: #745a82;
              text-align: center;
              font-family: 'Open Sans - Bold';
              font-size: 58px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: 1.52px;
              line-height: normal;
              text-transform: uppercase;
              margin-bottom: 15px;
            `}
          >
            {' '}
            Yoga
          </h1>
          <p
            className={css`
              color: #745a82;
              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 27px;
              text-align: center;
              font-style: normal;
              letter-spacing: normal;
              line-height: normal;
            `}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing
          </p>
        </div>
      </div>
    </div>
  );
}
