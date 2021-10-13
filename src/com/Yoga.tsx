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
          height: 702px;
        `}
      >
        <img
          className={css`
            position: absolute !important;
          `}
          src='img/Design.png'
          alt=''
        />
        <div>
          <h1
            className={css`
              color: #745a82;
              font-family: 'Open Sans';
              font-size: 42px;
              font-weight: 300;
              font-style: normal;
              letter-spacing: normal;
              line-height: 102.98px;
              text-align: center;
              font-family: 'Open Sans - Light';
              font-weight: 300;
              font-style: normal;
              letter-spacing: normal;
              line-height: normal;
              font-family: 'Open Sans - Light';
              font-size: 25px;
              font-weight: 300;
              font-style: normal;
              letter-spacing: normal;
              line-height: normal;
              font-family: 'Open Sans - Bold';
              font-size: 58px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: 1.52px;
              line-height: normal;
              text-transform: uppercase;
            `}
          >
            Healthy Fresh <br /> Yoga
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
