import { useState } from 'react';
import { useNavigate } from 'react-router';
import LoginImg from '../../assets/images/log-in-leftimage.png';
import IndFlag from '../../assets/images/ind-flag.svg';
import DownArrow from '../../assets/images/down-arrow.svg';
import Facebook from '../../assets/images/fb.svg';
import Google from '../../assets/images/google.svg';
import { Flex } from '../../globalStyle';
import * as Styled from './style';
import { PATHS } from '../../constant';

const Login = () => {
  const [otpRecieved, setOtpRecieved] = useState(false);

  const navigate = useNavigate();

  return (
    <Styled.LoginWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}>
      <div>
        <Styled.LoginHeader>Logo</Styled.LoginHeader>
        <Styled.LoginSubHeader>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla
          eget adipiscing faucibus platea. Eu ultrices ipsum
        </Styled.LoginSubHeader>
        <Styled.LoginImage>
          <img src={LoginImg} alt='LoginImg' />
        </Styled.LoginImage>
      </div>
      <div>
        <Styled.LoginFOrmWrapper>
          <div>
            <Styled.FormHeader>Get Started !</Styled.FormHeader>
            <Styled.FormSubHeader>
              New to Company?{' '}
              <span onClick={() => navigate(PATHS.signup)}> Sign up</span>
            </Styled.FormSubHeader>
          </div>
          <div>
            <Styled.PText>Enter Mobile Number</Styled.PText>
            <Styled.FormDivWrapper>
              <Styled.FormDiv padding='null'>
                <Styled.IconDiv width='17px' height='17px' radius='50%'>
                  <img src={IndFlag} alt='IndFlag' />
                </Styled.IconDiv>
                <Styled.TeleText>+91</Styled.TeleText>
                <div>
                  <img className='down-arrow' src={DownArrow} alt='downArrow' />
                </div>
              </Styled.FormDiv>
              <Styled.FormDiv padding='0 13px'>
                <input type='text' placeholder='Enter Mobile Number' />
              </Styled.FormDiv>
            </Styled.FormDivWrapper>

            {otpRecieved ? (
              <Styled.OtpTextWrap>
                <Styled.PText>Enter OTP</Styled.PText>
                <Styled.FormDivWrapperTwo>
                  <Styled.FormDiv padding='0 13px'>
                    <input type='text' placeholder='Enter four digit OTP' />
                  </Styled.FormDiv>
                </Styled.FormDivWrapperTwo>
                <Styled.CodeReciveText>
                  Haven't received code? <span> Resend in 0:59 sec</span>
                </Styled.CodeReciveText>
              </Styled.OtpTextWrap>
            ) : null}
            <Styled.ButtonWrap
              onClick={(e) => {
                e.stopPropagation();
                setOtpRecieved(!otpRecieved);
              }}>
              {otpRecieved ? 'Login' : 'Get OTP'}
            </Styled.ButtonWrap>
            <Styled.SmallText>Or sign in with</Styled.SmallText>
            <Flex gap='20px' mtop='30px'>
              <Styled.BtnDiv>
                <Styled.IconDiv width='20px' height='20px'>
                  <img src={Google} alt='Google' />
                </Styled.IconDiv>
                <Styled.PText> Google</Styled.PText>
              </Styled.BtnDiv>
              <Styled.BtnDiv>
                <Styled.IconDiv width='20px' height='20px'>
                  <img src={Facebook} alt='Facebook' />
                </Styled.IconDiv>
                <Styled.PText> Facebook</Styled.PText>
              </Styled.BtnDiv>
            </Flex>
            <Styled.PolicyText>
              By creating an account means you agree to the Terms & Conditions
              and our Privacy Policy
            </Styled.PolicyText>
          </div>
        </Styled.LoginFOrmWrapper>
      </div>
    </Styled.LoginWrapper>
  );
};

export default Login;
