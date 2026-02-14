import * as S from "@/features/interviewQuestion/createQuestions/CreateQuestions.styles";
import CreateQuestionFormBox from "@/features/interviewQuestion/CreateQuestionFormBox/index";
import type { CreateQuestionFormData } from "@/features/interviewQuestion/types/createQuestion";

interface CreateQuestionsCreateProps {
  onBack: () => void;
}

export default function CreateQuestionsCreate({
  onBack: _onBack,
}: CreateQuestionsCreateProps) {
  const handleSubmit = (data: CreateQuestionFormData) => {
    // TODO: API 연결 - data를 서버로 전송
    console.log("질문 생성 요청:", data);
  };

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.CreateHeaderSection>
          <S.TitleWrapper>
            <S.TitleAccentBar />
            <S.Title>질문 생성</S.Title>
          </S.TitleWrapper>
          <S.Description>
            맞춤형 면접 질문을 위한 지원 정보를 상세하게 입력해주세요
          </S.Description>
        </S.CreateHeaderSection>
        <CreateQuestionFormBox onSubmit={handleSubmit} />
      </S.ContentWrapper>
    </S.Container>
  );
}
