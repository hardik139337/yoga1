import { css } from '@emotion/css';

export default function h() {
  return (
    <div
      className={
        'flex items-center	 ' +
        css`
          box-shadow: 0 -5px 43px rgba(2, 4, 0, 0.2);
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
      <a href='/#'>Contac</a>
    </div>
  );
}
