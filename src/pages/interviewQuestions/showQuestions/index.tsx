import * as S from "./showQuestions.styles";
import ShowQuestionsResult from "@/features/interviewQuestion/showQuestions/ShowQuestionsResult.tsx";

export default function ShowQuestions() {
  return (
    <S.Container>
      <S.ContentWrapper>
        <ShowQuestionsResult />
      </S.ContentWrapper>
    </S.Container>
  );
}
