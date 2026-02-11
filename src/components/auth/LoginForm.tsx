import { useState } from "react";
import CheckBox from "@/components/input/CheckBox";
import * as S from "@/components/auth/LoginForm.styles";

export default function LoginForm() {
  const [keepLogin, setKeepLogin] = useState(false);

  return (
    <S.Form>
      <S.LoginTitle>로그인</S.LoginTitle>
      <S.FieldWrapper $gap={7}>
        <S.Label htmlFor="email">이메일</S.Label>
        <S.AuthInput id="email" type="email" placeholder="이메일을 입력하세요" />
      </S.FieldWrapper>
      <S.FieldWrapper $gap={5}>
        <S.Label htmlFor="password">비밀번호</S.Label>
        <S.AuthInput id="password" type="password" placeholder="비밀번호를 입력하세요" />
      </S.FieldWrapper>
      <S.KeepLoginRow>
        <S.KeepLoginLeft>
          <CheckBox isChecked={keepLogin} onClick={() => setKeepLogin(!keepLogin)} />
          <S.KeepLoginText>로그인 상태 유지</S.KeepLoginText>
        </S.KeepLoginLeft>
        <S.AuthUnderBarButton type="button">비밀번호 찾기</S.AuthUnderBarButton>
      </S.KeepLoginRow>
      <S.SubmitButtonWrapper>
        <S.AuthPrimaryButton type="button">로그인</S.AuthPrimaryButton>
      </S.SubmitButtonWrapper>
    </S.Form>
  );
}
