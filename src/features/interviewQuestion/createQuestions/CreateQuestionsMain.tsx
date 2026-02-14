import CreateQuestionCarousel from "@/features/interviewQuestion/CreateQuestionCarousel/CreateQuestionCarousel";
import ArrowRight from "@/assets/icons/arrow_right.svg?react";
import theme from "@/styles/theme";
import * as S from "./CreateQuestions.styles";

interface CreateQuestionsMainProps {
  onNext: () => void;
}

export default function CreateQuestionsMain({ onNext }: CreateQuestionsMainProps) {
  return (
    <S.MainExplanationBox>
      <S.MainExplanationContent>
        <S.MainTitle>
          <S.MainTitleAccent>클릭 한 번</S.MainTitleAccent>
          <S.MainTitleText>으로 시작하는 맞춤 면접 준비</S.MainTitleText>
        </S.MainTitle>
        <CreateQuestionCarousel />
        <S.MainButtonWrapper>
          <S.MainUnderBarButton onClick={onNext}>
            <S.MainUnderBarButtonText>
              생기부 업로드하고 맞춤 질문 받아보기
            </S.MainUnderBarButtonText>
            <S.MainUnderBarButtonIcon>
              <ArrowRight width={14} height={14} stroke={theme.colors.secondary["01"]} />
            </S.MainUnderBarButtonIcon>
          </S.MainUnderBarButton>
        </S.MainButtonWrapper>
      </S.MainExplanationContent>
    </S.MainExplanationBox>
  );
}
