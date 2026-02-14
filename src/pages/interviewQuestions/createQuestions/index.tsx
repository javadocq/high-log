import { useState } from "react";
import {
  CreateQuestionsMain,
  CreateQuestionsCreate,
} from "@/features/interviewQuestion/createQuestions";
import * as S from "./createQuestionsPage.styles.ts";

type CreateStep = "main" | "create";

export default function CreateQuestions() {
  const [step, setStep] = useState<CreateStep>("main");

  return (
    <S.Container>
      {step === "main" ? (
        <CreateQuestionsMain onNext={() => setStep("create")} />
      ) : (
        <CreateQuestionsCreate onBack={() => setStep("main")} />
      )}
    </S.Container>
  );
}
