import { useNavigate } from 'react-router';
import { PATHS } from '../../constant';
import IndFlag from '../../assets/images/ind-flag.svg';
import DownArrow from '../../assets/images/down-arrow.svg';
import { Flex } from '../../globalStyle';
import * as Styled from './style';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Styled.SignUpContainer>
      <Styled.LoginFOrmWrapper>
        <div>
          <Styled.FormHeader>Create store in 10mins</Styled.FormHeader>
          <Styled.FormSubHeader>
            {' '}
            Already have a account?
            <span onClick={() => navigate(PATHS.login)}> Sign in</span>
          </Styled.FormSubHeader>
        </div>
        <Styled.SignUpFormWrapper>
          <Flex gap='30px' mtop='72px'>
            <div>
              <Styled.PText>First Name</Styled.PText>
              <Styled.FormDivWrapperTwo>
                <Styled.FormDiv padding='0 13px'>
                  <input type='text' placeholder='Your First Name' />
                </Styled.FormDiv>
              </Styled.FormDivWrapperTwo>
            </div>
            <div>
              <Styled.PText>Last Name</Styled.PText>
              <Styled.FormDivWrapperTwo>
                <Styled.FormDiv padding='0 13px'>
                  <input type='text' placeholder='Your Last Name' />
                </Styled.FormDiv>
              </Styled.FormDivWrapperTwo>
            </div>
          </Flex>

          <Styled.OtpTextWrap>
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
          </Styled.OtpTextWrap>

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

          <Styled.ButtonWrap onClick={() => navigate(PATHS.store)}>
            Create your Store
          </Styled.ButtonWrap>

          <Styled.PolicyText>
            By creating an account means you agree to the Terms & Conditions and
            our Privacy Policy
          </Styled.PolicyText>
        </Styled.SignUpFormWrapper>
      </Styled.LoginFOrmWrapper>
    </Styled.SignUpContainer>
  );
};

export default SignUp;
