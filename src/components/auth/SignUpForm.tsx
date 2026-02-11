import { useState } from "react";
import CheckBox from "@/components/input/CheckBox";
import PasswordInput from "@/components/input/PasswordInput";
import * as S from "@/components/auth/SignUpForm.styles";

interface SignUpFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    agreements: {
      이용약관: boolean;
      개인정보처리방침: boolean;
      만14세이상: boolean;
    };
  }) => void;
}

export default function SignUpForm({ onSubmit }: SignUpFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      email,
      password,
      passwordConfirm,
      agreements: {
        이용약관: agree1,
        개인정보처리방침: agree2,
        만14세이상: agree3,
      },
    });
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <S.InputSection>
        <S.FieldWrapper $gap={7}>
          <S.Label htmlFor="name">이름</S.Label>
          <S.AuthInput
            id="name"
            type="text"
            placeholder="홍길동"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </S.FieldWrapper>
        <S.FieldWrapper $gap={7}>
          <S.Label htmlFor="email">이메일</S.Label>
          <S.AuthInput
            id="email"
            type="email"
            placeholder="honggildong@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </S.FieldWrapper>
        <S.FieldWrapper $gap={5}>
          <S.Label htmlFor="password">비밀번호</S.Label>
          <PasswordInput
            id="password"
            placeholder="8자 이상, 영문, 숫자, 특수문자 3가지 조합"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </S.FieldWrapper>
        <S.FieldWrapper $gap={5}>
          <S.Label htmlFor="passwordConfirm">비밀번호 확인</S.Label>
          <PasswordInput
            id="passwordConfirm"
            placeholder="비밀번호 재입력"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </S.FieldWrapper>
      </S.InputSection>
      <S.CheckboxSection>
        <S.CheckboxRow>
          <S.CheckboxLeft>
            <CheckBox
              isChecked={agree1}
              onClick={() => setAgree1((prev) => !prev)}
            />
            <S.CheckboxText>(필수) 이용약관 동의</S.CheckboxText>
          </S.CheckboxLeft>
          <S.AuthUnderBarButton type="button">약관 보기</S.AuthUnderBarButton>
        </S.CheckboxRow>
        <S.CheckboxRow>
          <S.CheckboxLeft>
            <CheckBox
              isChecked={agree2}
              onClick={() => setAgree2((prev) => !prev)}
            />
            <S.CheckboxText>(필수) 개인정보 처리방침 동의</S.CheckboxText>
          </S.CheckboxLeft>
          <S.AuthUnderBarButton type="button">정책 보기</S.AuthUnderBarButton>
        </S.CheckboxRow>
        <S.CheckboxRow>
          <S.CheckboxLeft>
            <CheckBox
              isChecked={agree3}
              onClick={() => setAgree3((prev) => !prev)}
            />
            <S.CheckboxText>(필수) 만 14세 이상입니다.</S.CheckboxText>
          </S.CheckboxLeft>
        </S.CheckboxRow>
      </S.CheckboxSection>
      <S.SubmitButtonWrapper>
        <S.AuthPrimaryButton type="submit">회원가입</S.AuthPrimaryButton>
      </S.SubmitButtonWrapper>
    </S.Form>
  );
}
