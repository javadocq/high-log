import { useState } from "react";
import AuthDescription from "@/components/auth/AuthDescription";
import LoginForm from "@/components/auth/LoginForm";
import SignUpForm from "@/components/auth/SignUpForm";
import Tab from "@/components/tab/Tab";
import * as S from "@/pages/AuthPage/AuthPage.styles";

type AuthMode = "login" | "signup";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<AuthMode>("login");

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.LeftFrame>
          <AuthDescription />
        </S.LeftFrame>
        <S.FormFrame>
          <S.FormFrameContent>
            <S.TabWrapper>
              <Tab activeTab={activeTab} onTabChange={setActiveTab} />
            </S.TabWrapper>
            {activeTab === "login" ? <LoginForm /> : <SignUpForm />}
          </S.FormFrameContent>
        </S.FormFrame>
      </S.ContentWrapper>
    </S.Container>
  );
}
