# UI 컴포넌트 가이드

이 문서는 프로젝트에서 사용되는 공용 UI 컴포넌트들의 사용법과 Props를 설명합니다.

## 목차
1. [Modal](#modal)
2. [Toast](#toast)
3. [Button](#button)
4. [Acodian](#acodian)
5. [Favorite](#favorite)
6. [Tab](#tab)
7. [Label](#label)
8. [Footer](#footer)
9. [RecordCard](#recordcard)
10. [QuestionCard](#questioncard)

---

## Modal <a name="modal"></a>

### 사용 방법

```typescript
import { useState } from "react";
import Modal from "@/components/modal/Modal";

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mainTitle="모달 제목"
        subTitle="모달 부제목 (선택사항)"
        leftButtonText="취소"
        rightButtonText="확인"
        onLeftButtonClick={() => setIsModalOpen(false)}
        onRightButtonClick={() => {
          // 확인 버튼 클릭 시 실행할 로직
          setIsModalOpen(false);
        }}
      />
    </>
  );
}
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `isOpen` | `boolean` | Modal 표시 여부 | Yes |
| `onClose` | `() => void` | Modal 닫기 핸들러 (dim 배경 클릭 시 호출) | Yes |
| `mainTitle` | `string` | 큰 제목 텍스트 | Yes |
| `subTitle` | `string` | 작은 제목 텍스트 | No |
| `leftButtonText` | `string` | 왼쪽 버튼 텍스트 | Yes |
| `rightButtonText` | `string` | 오른쪽 버튼 텍스트 | Yes |
| `onLeftButtonClick` | `() => void` | 왼쪽 버튼 클릭 핸들러 | Yes |
| `onRightButtonClick` | `() => void` | 오른쪽 버튼 클릭 핸들러 | Yes |

---

## Toast <a name="toast"></a>

### 사용 방법

```typescript
import { useState } from "react";
import Toast from "@/components/toast/Toast";

function MyComponent() {
  const [isToastOpen, setIsToastOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsToastOpen(true)}>Toast 표시</button>
      <Toast
        message="알림 메시지입니다"
        isOpen={isToastOpen}
        onClose={() => setIsToastOpen(false)}
      />
    </>
  );
}
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `message` | `string` | 표시할 메시지 텍스트 | Yes |
| `isOpen` | `boolean` | Toast 표시 여부 | Yes |
| `onClose` | `() => void` | Toast 닫기 핸들러 | Yes |

---

## Button <a name="button"></a>

`Button` 컴포넌트는 `DefaultButton`과 `UnderBarButton` 두 가지를 제공합니다.

```typescript
import { DefaultButton, UnderBarButton } from "@/components/button/Button";
```

### 1. DefaultButton

기본적인 버튼 컴포넌트입니다.

#### 사용 방법

```typescript
<DefaultButton 
  width={200} 
  type="primary" 
  text="확인" 
  onClick={() => console.log('Clicked')} 
/>
```

#### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `width` | `number` | 버튼의 너비 (px) | Yes |
| `type` | `"primary" \| "secondary" \| "disabled"` | 버튼 스타일 타입 | Yes |
| `text` | `string` | 버튼 내부 텍스트 | Yes |
| `onClick` | `() => void` | 클릭 이벤트 핸들러 | No |

### 2. UnderBarButton

하단에 밑줄이 있는 텍스트 형태의 버튼입니다.

#### 사용 방법

```typescript
<UnderBarButton 
  text="로그인" 
  onClick={() => console.log('Login')} 
/>
```

#### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `text` | `string` | 버튼 텍스트 | Yes |
| `onClick` | `() => void` | 클릭 이벤트 핸들러 | No |

---

## Acodian <a name="acodian"></a>

아코디언 아이콘 컴포넌트입니다.

### 사용 방법

```typescript
import Acodian from "@/components/acodian/Acodian";

<Acodian 
  type="someType" 
  onClick={() => console.log('Acodian clicked')} 
/>
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `type` | `string` | 아코디언 타입 (스타일링 용도) | Yes |
| `onClick` | `() => void` | 클릭 이벤트 핸들러 | Yes |

---

## Favorite <a name="favorite"></a>

즐겨찾기(하트) 아이콘 컴포넌트입니다. `default` 상태와 `select` 상태를 가집니다.

### 사용 방법

```typescript
import Favorite from "@/components/favorite/Favorite";

// type은 "default" 또는 "select"
<Favorite 
  type="default" 
  onClick={() => console.log('Toggle favorite')} 
/>
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `type` | `string` | 아이콘 상태 (`"default"` \| `"select"`) | Yes |
| `onClick` | `() => void` | 클릭 이벤트 핸들러 | Yes |

---

## Tab <a name="tab"></a>

로그인/회원가입 상태를 전환하는 탭 컴포넌트입니다.

### 사용 방법

```typescript
import { useState } from "react";
import Tab from "@/components/tab/Tab";

function MyComponent() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <Tab 
      activeTab={activeTab} 
      onTabChange={setActiveTab} 
    />
  );
}
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `activeTab` | `"login" \| "signup"` | 현재 활성화된 탭 | Yes |
| `onTabChange` | `(tab: "login" \| "signup") => void` | 탭 변경 핸들러 | Yes |

---

## Label <a name="label"></a>

상태나 레벨을 표시하는 라벨 컴포넌트입니다. 다양한 타입에 따라 색상이 자동으로 적용됩니다.

### 사용 방법

```typescript
import Label from "@/components/label/Label";

// API에서 받은 영어 값 사용 (자동으로 한글로 변환)
<Label type="basic" />
<Label type="intermediate" />
<Label type="advanced" />
<Label type="good" />
<Label type="normal" />
<Label type="improve" />
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `type` | `"basic" \| "intermediate" \| "advanced" \| "good" \| "normal" \| "improve"` | 라벨 타입 (영어, API에서 받은 값 사용 가능) | Yes |

---

## Footer <a name="footer"></a>

페이지 하단에 위치하는 푸터 컴포넌트입니다. Props를 받지 않습니다.

### 사용 방법

```typescript
import Footer from "@/components/common/Footer";

function Layout() {
  return (
    <div>
      {/* Content */}
      <Footer />
    </div>
  );
}
```

---

## RecordCard <a name="recordcard"></a>

레코드를 표시하는 카드 컴포넌트입니다. 왼쪽에 텍스트가 있고 오른쪽에 화살표 아이콘 버튼이 있습니다.

### 사용 방법

```typescript
import RecordCard from "@/components/card/RecordCard";

function MyComponent() {
  return (
    <RecordCard 
      text="레코드 텍스트" 
      onClick={() => console.log('RecordCard clicked')} 
    />
  );
}
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `text` | `string` | 카드에 표시할 텍스트 | Yes |
| `onClick` | `() => void` | 오른쪽 아이콘 버튼 클릭 핸들러 | No |

---

## QuestionCard <a name="questioncard"></a>

문제 카드를 표시하는 컴포넌트입니다. 문제 제목, 제시문(선택), 질문 목적, 답변 포인트, 모범 답변 등을 표시할 수 있습니다.

### 사용 방법

```typescript
import { useState } from "react";
import QuestionCard from "@/components/card/QuestionCard";

function MyComponent() {
  const [favoriteType, setFavoriteType] = useState<"default" | "select">("default");

  return (
    <>
      {/* 제시문 없는 경우 */}
      <QuestionCard 
        labelType="basic" 
        text="문제 제목" 
        favoriteType={favoriteType}
        onFavoriteClick={() => setFavoriteType(prev => prev === "default" ? "select" : "default")}
        questionPurposeText="질문 목적 설명 텍스트"
        answerPointText="답변 포인트 설명 텍스트"
        answerText="모범 답변 내용"
        answerCriteriaText="모범 답변 기준 설명"
        onAnswerButtonClick={() => console.log('모범 답변 확인하기 클릭')}
      />

      {/* 제시문 있는 경우 */}
      <QuestionCard 
        labelType="intermediate" 
        text="문제 제목" 
        favoriteType={favoriteType}
        onFavoriteClick={() => setFavoriteType(prev => prev === "default" ? "select" : "default")}
        passage="제시문 내용"
        questionPurposeText="질문 목적 설명 텍스트"
        answerPointText="답변 포인트 설명 텍스트"
        answerText="모범 답변 내용"
        answerCriteriaText="모범 답변 기준 설명"
        onAnswerButtonClick={() => console.log('모범 답변 확인하기 클릭')}
      />
    </>
  );
}
```

### 여러 개 나열하기

```typescript
// 서버에서 받은 데이터를 그대로 사용
const questions = [
  {
    labelType: "basic",
    text: "문제 1",
    questionPurposeText: "질문 목적 설명",
    answerPointText: "답변 포인트 설명",
    answerText: "모범 답변",
    answerCriteriaText: "답변 기준",
  },
  {
    labelType: "intermediate",
    text: "문제 2",
    passage: "제시문 내용", // 있으면 자동으로 표시
    questionPurposeText: "질문 목적 설명",
    answerPointText: "답변 포인트 설명",
    answerText: "모범 답변",
    answerCriteriaText: "답변 기준",
  },
];

{questions.map((question, index) => (
  <QuestionCard key={index} {...question} />
))}
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `labelType` | `"basic" \| "intermediate" \| "advanced" \| "good" \| "normal" \| "improve"` | 문제 난이도 라벨 타입 | Yes |
| `text` | `string` | 문제 제목 텍스트 | Yes |
| `favoriteType` | `"default" \| "select"` | 즐겨찾기 상태 | No (기본값: "default") |
| `onFavoriteClick` | `() => void` | 즐겨찾기 클릭 핸들러 | No |
| `passage` | `string` | 제시문 내용 (있으면 자동으로 표시) | No |
| `questionPurposeText` | `string` | 질문 목적 설명 텍스트 | Yes |
| `answerPointText` | `string` | 답변 포인트 설명 텍스트 | Yes |
| `answerText` | `string` | 모범 답변 내용 (버튼 클릭 시 표시) | No |
| `answerCriteriaText` | `string` | 모범 답변 기준 설명 (답변 표시 시 함께 표시) | No |
| `onAnswerButtonClick` | `() => void` | 모범 답변 확인하기 버튼 클릭 핸들러 | No |

### 주요 기능

- **제시문 표시**: `passage` prop이 있으면 자동으로 제시문 영역이 표시됩니다.
- **모범 답변 표시**: "모범 답변 확인하기" 버튼을 클릭하면 답변이 표시되고 버튼이 disabled 상태로 변경됩니다.
- **즐겨찾기**: 각 카드마다 독립적으로 즐겨찾기 상태를 관리할 수 있습니다.
