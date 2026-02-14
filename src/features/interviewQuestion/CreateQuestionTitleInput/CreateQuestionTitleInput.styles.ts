import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  padding: 8px 16px;
  align-items: center;
  gap: 75px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
  box-sizing: border-box;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 0;
  ${({ theme }) => theme.typography.body.M0};
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
  color: ${({ theme }) => theme.colors.grayScale["00"]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale["05"]};
  }
`;
