import { useState } from "react";
import * as S from "./SaveQuestionsList.styles";
import QuestionCard, { type QuestionCardProps } from "@/components/card/QuestionCard";
import ListFilter from "@/components/filter/ListFilter";

const MOCK_QUESTIONS: Array<QuestionCardProps> = [
  {
    labelType: "basic",
    text: "출결 상황에 대해 설명해주세요",
    questionPurposeText: "출결 태도 파악",
    answerPointText: "지각/결석 사유, 개선 노력",
    favoriteType: "select",
  },
  {
    labelType: "intermediate",
    text: "수학 성적 변동에 대해 설명해주세요",
    questionPurposeText: "학습 태도 파악",
    answerPointText: "원인 분석, 구체적 노력, 결과",
    answerText:
      "수학 성적이 낮았던 이유를 분석해 보니 개념 이해가 부족했습니다. 매일 1시간씩 기초 개념을 복습하고, 오답 노트를 작성하며 약점을 보완했어요.",
    answerCriteriaText:
      "① 구체적인 어려움이 무엇이었는지 ② 어떤 방법으로 극복했는지 ③ 그 결과가 어떠했는지가 담겨 있는지 확인하세요.",
    favoriteType: "select",
  },
];

export default function SaveQuestionsList() {
  const [filterText, setFilterText] = useState("");
  const questions = MOCK_QUESTIONS;
  const totalCount = questions.length;

  return (
    <>
      <S.HeaderBar>
        <S.TotalCount>총 {totalCount}개</S.TotalCount>
        <ListFilter
          text={filterText}
          setText={setFilterText}
          placeholder="생기부를 선택해 주세요"
          onClick={() => {}}
        />
      </S.HeaderBar>
      <S.QuestionList>
        {questions.map((q, i) => (
          <S.QuestionCardWrapper key={i}>
            <QuestionCard {...q} />
          </S.QuestionCardWrapper>
        ))}
      </S.QuestionList>
    </>
  );
}
