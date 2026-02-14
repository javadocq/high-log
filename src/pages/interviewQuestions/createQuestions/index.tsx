import { useState } from "react";
import {
  CreateQuestionsMain,
  CreateQuestionsCreate,
} from "@/features/interviewQuestion/createQuestions";

type CreateStep = "main" | "create";

export default function CreateQuestions() {
  const [step, setStep] = useState<CreateStep>("main");

  if (step === "main") {
    return <CreateQuestionsMain onNext={() => setStep("create")} />;
  }

  return <CreateQuestionsCreate onBack={() => setStep("main")} />;
}
