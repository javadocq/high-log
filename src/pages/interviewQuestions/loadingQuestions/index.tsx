import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./loadingQuestions.styles";
import QuestionGeneratingLoading from "@/components/loading/QuestionGeneratingLoading";
import LoadingCard from "@/components/card/LoadingCard";

export default function LoadingQuestions() {
  const navigate = useNavigate();
  const [percent, setPercent] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (percent >= 100) {
      setIsComplete(true);
      return;
    }

    const timer = setInterval(() => {
      setPercent((prev) => Math.min(prev + 2, 100));
    }, 100);

    return () => clearInterval(timer);
  }, [percent]);

  useEffect(() => {
    if (isComplete) {
      navigate("/question/show");
    }
  }, [isComplete, navigate]);

  return (
    <S.Container>
      <S.ContentWrapper>
        <QuestionGeneratingLoading percent={percent} isComplete={isComplete} />
        <S.LoadingCardsWrapper>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </S.LoadingCardsWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
}
