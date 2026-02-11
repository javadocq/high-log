import { DefaultButton } from "@/components/button/Button";
import * as S from "@/components/auth/AuthDescription.styles";

export default function AuthDescription() {
  return (
    <S.Wrapper>
      <S.TextBlock>
        <h2>내 생기부로 면접 질문을 만들고</h2>
        <h2>연습까지 한번에</h2>
      </S.TextBlock>
      <S.FeatureBlocksWrapper>
        <S.FeatureBlock>
          <S.FeatureBlockTitle>질문 자동 생성</S.FeatureBlockTitle>
          <S.FeatureBlockDescription>
            세특/창체/동아리/진로/독서/수상에서 2~5개 질문 묶음 생성
          </S.FeatureBlockDescription>
        </S.FeatureBlock>
        <S.FeatureBlock>
          <S.FeatureBlockTitle>답변 포인트 제공</S.FeatureBlockTitle>
          <S.FeatureBlockDescription>
            STAR 구조 + 근거/수치화 기준으로 답변 방향을 제시
          </S.FeatureBlockDescription>
        </S.FeatureBlock>
        <S.FeatureBlock>
          <S.FeatureBlockTitle>면접 연습 기록</S.FeatureBlockTitle>
          <S.FeatureBlockDescription>
            세션별 평균 시간/구조 점수/복습 포인트를 저장
          </S.FeatureBlockDescription>
        </S.FeatureBlock>
      </S.FeatureBlocksWrapper>
      <S.ButtonWrapper>
        <DefaultButton width={174} type="secondary" text="샘플 결과 보기" />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
