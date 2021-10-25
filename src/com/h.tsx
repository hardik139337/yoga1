import { css } from '@emotion/css';

interface b {
  a: number;
  b?: string;
  c?: boolean;
}

let a: b = { a: 12 };
console.log(a);

export default function h() {
  return (
    <div
      className={css`
        box-shadow: 0 -5px 43px rgba(2, 4, 0, 0.2);
        background-color: #ffffff;
      `}
    >
      <div
        className={
          'flex flex-wrap items-center mx-auto py-7	w-11/12  ' +
          css`
            max-width: 1446px;

            background-color: #ffffff;

            a {
              color: #745a82;
              font-family: Nunito;
              font-size: 25px;
              font-weight: 700;
              font-style: normal;
              letter-spacing: normal;
              line-height: 39.37px;
              text-align: center;
              margin: 0 30px;
              font-style: normal;
              letter-spacing: normal;
              line-height: normal;

              @media (max-width: 600px) {
                display: none;
              }
            }
          `
        }
      >
        <img
          className='mr-auto'
          src='img/Place_Your_Logo_Here_(Double_Click_to_Edit).png'
          alt=''
        />
        <a href='/#'>Home</a>
        <a href='/#'>Class</a>
        <a href='/#'>Promo</a>
        <a href='/#'>Online Class</a>
        <a href='/#'>Contact</a>
        <img
          className={
            'menu ' +
            css`
              width: 25px;
              height: 25px;
              color: white;
              background-color: white;
              display: none;
              margin-right: 20px !important;
              @media (min-width: 600px) {
                display: none;
              }

              @media (max-width: 600px) {
                display: block;
              }
            `
          }
          src="data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"
          alt=''
        />
      </div>
    </div>
  );
}
