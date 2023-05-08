import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #06051a;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Flex = styled.div<{ gap: string; mtop: string }>`
  display: flex;
  align-items: center;
  gap: ${(p) => (p.gap ? p.gap : '10px')};
  margin-top: ${(p) => (p.mtop ? p.mtop : null)};
`;
