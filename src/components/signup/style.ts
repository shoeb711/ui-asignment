import styled from 'styled-components';
import SignUpBG from '../../assets/images/sign-up-background.png';

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${SignUpBG});
  background-position: bottom;
`;

export const SignUpFormWrapper = styled.div`
  width: 100%;
`;

export const LoginFOrmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 45px;
  gap: 10px;

  width: 450px;
  height: 584px;

  overflow: hidden;

  background: radial-gradient(
      145.46% 122.03% at 88.28% 10.25%,
      rgba(222, 164, 242, 0.1) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    radial-gradient(
      93.02% 80.9% at 22.44% 86.73%,
      rgba(110, 111, 248, 0.1) 0%,
      rgba(110, 111, 248, 0) 100%
    ),
    linear-gradient(
      131.02deg,
      rgba(104, 108, 248, 0.059) 10.34%,
      rgba(236, 171, 241, 0.059) 90.18%
    ),
    #060519;

  border-radius: 20px;

  &::before {
    position: absolute;
    padding: 2px;
    inset: 0;

    background: linear-gradient(
      45deg,
      rgba(126, 132, 188, 0.4),
      rgba(55, 56, 74, 0.3),
      rgba(115, 121, 181, 0.4)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const FormHeader = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  text-align: center;

  color: #c8d8ff;
`;

export const FormSubHeader = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #5c6d8e;

  span {
    cursor: pointer;
    font-weight: 600;
    background: linear-gradient(303.01deg, #5961f8 -4.4%, #f2d9f7 111.29%),
      linear-gradient(0deg, #5c74a3, #5c74a3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

export const PText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #c8d8ff;
`;

export const FormDivWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 5fr;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const FormDiv = styled.div<{ padding: string }>`
  display: flex;

  align-items: center;
  justify-content: center;
  padding: ${(p) => (p.padding ? p.padding : null)};
  gap: 5px;

  height: 50px;

  border: 1px solid #343e50;
  filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.05));
  border-radius: 4px;

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;

    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #c8d8ff;

    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #5c6d8e;
    }
  }

  .down-arrow {
    display: flex;
  }
`;

export const IconDiv = styled.div<{
  width: string;
  height: string;
  radius?: string;
}>`
  width: ${(p) => (p.width ? p.width : null)};
  height: ${(p) => (p.height ? p.height : null)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${(p) => (p.radius ? p.radius : null)};
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  cursor: pointer;

  width: 100%;
  height: 50px;

  font-weight: 500;
  font-size: 18px;
  /* line-height: 20px; */
  text-align: center;
  color: #ffffff;

  background: linear-gradient(
    165.69deg,
    rgba(104, 108, 248, 0.7) 4.49%,
    rgba(236, 171, 241, 0.7) 113.71%
  );
  border-radius: 5px;
`;

export const TeleText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #c8d8ff;
`;

export const OtpTextWrap = styled.div`
  margin-top: 30px;
`;

export const CodeReciveText = styled.div`
  margin-top: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #5c74a3;

  span {
    background: linear-gradient(303.01deg, #5961f8 -4.4%, #f2d9f7 111.29%),
      linear-gradient(0deg, #5c74a3, #5c74a3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 600;
  }
`;

export const FormDivWrapperTwo = styled.div`
  margin-top: 10px;
`;

export const PolicyText = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #96abde;
  opacity: 0.6;
  width: 72%;
  margin: 30px auto 0 auto;
`;
