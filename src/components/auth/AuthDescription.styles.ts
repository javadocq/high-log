import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const TextBlock = styled.div`
  padding: 44px 0 0 42px;
  box-sizing: border-box;

  h2 {
    ${({ theme }) => theme.typography.head.H2};
    color: ${({ theme }) => theme.colors.grayScale["00"]};
    margin: 0;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export const FeatureBlocksWrapper = styled.div`
  padding: 68px 27px 0 28px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FeatureBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 12px;
  box-sizing: border-box;
  gap: 6px;
`;

export const FeatureBlockTitle = styled.p`
  ${({ theme }) => theme.typography.body.S2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin: 0;
  padding: 19px 0 0 51px;
  box-sizing: border-box;
`;

export const FeatureBlockDescription = styled.p`
  ${({ theme }) => theme.typography.body.S0};
  color: ${({ theme }) => theme.colors.secondary["05"]};
  padding: 0 0 14px 53px;
  box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
  padding: 92px 0 30px 40px;
`;
