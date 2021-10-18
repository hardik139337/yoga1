import { css } from '@emotion/css';

export default function group7() {
  return (
    <div>
      <div
        className={css`
          max-width: 1045px;
          margin: 0 auto;
          padding-top: 90px;
        `}
      >
        <h1
          className={css`
            color: #745a82;
            margin-bottom: 100px;
            font-family: 'Open Sans';
            font-size: 42px;
            font-weight: 300;
            font-style: normal;
            letter-spacing: normal;
            line-height: normal;
            text-align: center;
            text-transform: uppercase;

            font-family: 'Open Sans - Light';
            font-weight: 300;
            font-style: normal;
            letter-spacing: 5.36px;
            line-height: normal;

            font-family: 'Open Sans - Bold';
            font-weight: 700;
            font-style: normal;
            letter-spacing: 5.36px;
            line-height: normal;

            font-family: Nunito;
            font-weight: 300;
            font-style: normal;
            letter-spacing: 5.36px;
            line-height: normal;
          `}
        >
          look at our <br /> Summer classes
        </h1>
        <div
          className={
            'grid grid-cols-3 ' +
            css`
              margin-bottom: 86px;
              div {
                h1 {
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
                }

                p {
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
                }
                div {
                  width: 290px;
                  height: 2px;
                  border: 1px solid #745a82;
                }

                h2 {
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
                }
              }
            `
          }
        >
          <div className='relative'>
            <img className='absolute top-1/2' src='img/Shape.png' alt='' />
            <img
              className='rounded-full mb-12'
              src='img/Place_Your_Image_Here_(Double_Click_to_Edit)-5.png'
              alt=''
            />
            <h1 className='mb-6'>Anusara</h1>
            <p className='mb-6'>
              Lorem ipsum sit amet, consectetur adipisicing...
            </p>
            <div className='mb-5'></div>
            <h2>Friday 20:00 hs.</h2>
          </div>
          <div className='relative'>
            <img className='absolute top-1/2' src='img/Shape.png' alt='' />

            <img
              className='rounded-full mb-12'
              src='img/Place_Your_Image_Here_(Double_Click_to_Edit)-5.png'
              alt=''
            />
            <h1 className='mb-6'>Anusara</h1>
            <p className='mb-6'>
              Lorem ipsum sit amet, consectetur adipisicing...
            </p>
            <div className='mb-5'></div>
            <h2>Friday 20:00 hs.</h2>
          </div>
          <div className='relative'>
            <img className='absolute top-1/2' src='img/Shape.png' alt='' />

            <img
              className='rounded-full mb-12'
              src='img/Place_Your_Image_Here_(Double_Click_to_Edit)-5.png'
              alt=''
            />
            <h1 className='mb-6'>Anusara</h1>
            <p className='mb-6'>
              Lorem ipsum sit amet, consectetur adipisicing...
            </p>
            <div className='mb-5'></div>
            <h2>Friday 20:00 hs.</h2>
          </div>
        </div>

        <button
          className={css`
            width: 334px;
            height: 75px;
            display: block;
            box-shadow: 0 -5px 43px rgba(2, 4, 0, 0.2);
            border-radius: 38px;
            background-color: #745a82;
            margin: 0 auto;
            color: #ffffff;
            font-family: 'Open Sans';
            font-size: 23px;
            font-weight: 700;
            font-style: normal;
            letter-spacing: normal;
            line-height: 21.01px;
            margin-bottom: 63px;
            text-transform: uppercase;

            font-style: normal;
            letter-spacing: 11.58px;
            line-height: normal;
          `}
        >
          Show More
        </button>
      </div>
    </div>
  );
}
