import * as S from "./saveQuestions.styles";
import SaveQuestionsEmpty from "@/features/interviewQuestion/saveQuestions/SaveQuestionsEmpty";
import SaveQuestionsList from "@/features/interviewQuestion/saveQuestions/SaveQuestionsList";

export default function SaveQuestions() {
  const hasQuestions = true; // TODO: 저장된 질문 여부에 따라 결정

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.CreateHeaderSection>
          <S.TitleWrapper>
            <S.TitleAccentBar />
            <S.Title>질문 보관함</S.Title>
          </S.TitleWrapper>
        </S.CreateHeaderSection>
        {hasQuestions ? <SaveQuestionsList /> : <SaveQuestionsEmpty />}
      </S.ContentWrapper>
    </S.Container>
  );
}
