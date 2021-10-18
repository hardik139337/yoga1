import { css } from '@emotion/css';

export default function footer() {
  return (
    <div
      className={css`
        min-height: 825px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
      `}
    >
      <img
        className={
          'absolute sm:hidden ' +
          css`
            z-index: -1;
            margin-top: 100px;
            transform: scale(1.5);
            height: 100%;
            width: 100%;
          `
        }
        src='img/4-layers.png'
        alt=''
      />
      <div className='relative mt-auto '>
        <h1
          className={
            'w-6/12 mx-auto ' +
            css`
              color: #70577d;
              font-family: 'Open Sans';
              font-size: 25px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 41.67px;
              text-align: center;
              text-transform: uppercase;

              font-style: normal;
              letter-spacing: 1.88px;
              line-height: normal;
            `
          }
        >
          The asanas purify our body and keep it healthy, making it a suitable
          vehicle for the soul.
        </h1>
      </div>

      <div
        className={css`
          color: #70577d;
          font-family: 'Open Sans';
          font-size: 58px;
          font-weight: 700;
          font-style: normal;
          letter-spacing: normal;
          line-height: 41.67px;
          text-align: center;
          text-transform: uppercase;
          font-style: normal;
          letter-spacing: 4.37px;
          line-height: normal;
        `}
      >
        “
      </div>

      <div
        className={
          'grid grid-cols-2 sm:grid-cols-1 w-11/12 mx-auto ' +
          css`
            max-width: 1136px;
            margin: 0 auto;
          `
        }
      >
        <div>
          <h1
            className={
              'sm:text-center ' +
              css`
                color: #70577d;
                font-family: 'Open Sans';
                font-size: 25px;
                font-weight: 700;
                font-style: normal;
                letter-spacing: normal;
                line-height: 33.33px;
                text-align: left;
                text-transform: uppercase;

                font-style: normal;
                letter-spacing: normal;
                line-height: normal;
                margin-bottom: 25px;
              `
            }
          >
            about
          </h1>
          <p
            className={css`
              max-width: 536px;
              color: #70577d;
              font-family: 'Open Sans';
              font-size: 21px;
              font-weight: 400;
              font-style: normal;
              letter-spacing: normal;
              line-height: 29.17px;
              text-align: left;
              font-style: normal;
              letter-spacing: normal;
              line-height: normal;
              margin-bottom: 49px;
            `}
          >
            Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
            eiusmod tempor incididunt ultimam quantum
          </p>
          <img
            className={
              'mx-auto ' +
              css`
                margin-bottom: 48px;
              `
            }
            src='img/Place_Your_Logo_Here_(Double_Click_to_Edit).png'
            alt=''
          />
        </div>
        <div
          className={
            'grid grid-cols-4 sm:p-1 sm:grid-cols-1 sm:gap-y-10 sm:text-center ' +
            css`
              padding-top: 61px;
              div {
                h1 {
                  color: #70577d;
                  font-family: 'Open Sans';
                  font-size: 21px;
                  font-weight: 700;
                  font-style: normal;
                  letter-spacing: normal;
                  line-height: 33.33px;
                  text-align: left;
                  text-transform: uppercase;

                  font-style: normal;
                  letter-spacing: normal;
                  line-height: normal;
                  margin-bottom: 51px;
                }

                ul {
                  color: #70577d;
                  font-family: 'Open Sans';
                  font-size: 17px;
                  font-weight: 400;
                  font-style: normal;
                  letter-spacing: normal;
                  line-height: 33.33px;
                  text-align: left;

                  font-style: normal;
                  letter-spacing: normal;
                  line-height: normal;
                }
                li {
                  margin-bottom: 10px;
                }
              }
            `
          }
        >
          <div></div>
          <div>
            <h1 className='sm:text-center'>about</h1>
            <ul className='sm:text-center'>
              <li>Team</li>
              <li>Join us</li>

              <li>Ethic</li>
              <li>Goals</li>
            </ul>
          </div>
          <div>
            <h1 className='sm:text-center'>about</h1>
            <ul className='sm:text-center'>
              <li>Team</li>
              <li>Join us</li>

              <li>Ethic</li>
              <li>Goals</li>
            </ul>
          </div>
          <div>
            <h1 className='sm:text-center'>about</h1>
            <ul className='sm:text-center'>
              <li>Team</li>
              <li>Join us</li>

              <li>Ethic</li>
              <li>Goals</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={css`
          height: 53px;
          box-shadow: 0 -5px 9px rgba(2, 4, 0, 0.18);
          background-color: #745a82;
        `}
      ></div>
    </div>
  );
}
