import XIcon from "@/assets/icons/x.svg?react";
import * as S from "@/features/interviewQuestion/CreateQuestionTitleInput/CreateQuestionTitleInput.styles";

interface CreateQuestionTitleInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function CreateQuestionTitleInput({
  value,
  onChange,
  placeholder,
}: CreateQuestionTitleInputProps) {
  return (
    <S.Container>
      <S.Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <XIcon
          width={24}
          height={24}
          stroke="#737373"
          onClick={() => onChange("")}
          style={{ cursor: "pointer" }}
        />
      )}
    </S.Container>
  );
}
