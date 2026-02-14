import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 89px);
  padding: 96px 120px;
  background-color: ${({ theme }) => theme.colors.grayScale["10"]};
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const MainExplanationBox = styled.div`
  padding: 72px 79px 79px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 16px;
  box-sizing: border-box;
`;

export const MainExplanationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const MainTitle = styled.h1`
  ${({ theme }) => theme.typography.head.H3};
  width: 100%;
  margin: 0 0 40px;
`;

export const MainTitleAccent = styled.span`
  color: ${({ theme }) => theme.colors.primary["00"]};
`;

export const MainTitleText = styled.span`
  color: ${({ theme }) => theme.colors.grayScale["01"]};
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 12px;
  padding: 48px 64px;
  margin-bottom: 24px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

export const TitleAccentBar = styled.div`
  width: 8px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primary["00"]};
  border-radius: 4px;
  flex-shrink: 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  ${({ theme }) => theme.typography.head.H0};
  margin: 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayScale["03"]};
  ${({ theme }) => theme.typography.body.M0};
  line-height: 1.6;
  white-space: pre-line;
  margin-left: 24px;
`;

export const MainButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

export const MainUnderBarButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const MainUnderBarButtonText = styled.span`
  color: ${({ theme }) => theme.colors.secondary["01"]};
  ${({ theme }) => theme.typography.body.L2};
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
`;

export const MainUnderBarButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary["01"]};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

export const CreateHeaderSection = styled.div``;

export const FormField = styled.div`
  margin-bottom: 24px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.grayScale["03"]};
  ${({ theme }) => theme.typography.body.L2};
  margin-bottom: 8px;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px 16px;
  min-height: 120px;
  ${({ theme }) => theme.typography.body.M0};
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  resize: vertical;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale["05"]};
  }
`;

export const FileUploadArea = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80px;
  padding: 16px;
  border: 1px dashed ${({ theme }) => theme.colors.grayScale["07"]};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayScale["08"]};
  }

  input {
    display: none;
  }
`;

export const FileUploadText = styled.span`
  color: ${({ theme }) => theme.colors.grayScale["05"]};
  ${({ theme }) => theme.typography.body.M0};
`;

export const FileName = styled.span`
  color: ${({ theme }) => theme.colors.primary["00"]};
  ${({ theme }) => theme.typography.body.S1};
`;
