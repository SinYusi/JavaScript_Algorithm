# 프로그래머스 자바스크립트 알고리즘 문제 풀이

## 사용법

### 기본 실행
```bash
# 템플릿 실행 (solution.js의 solution 함수 사용)
node template.js
```

### 구조
- `template.js`: 입출력 처리 템플릿
- `solution.js`: solution 함수 구현
- 터미널에서 입력을 받아 solution 함수를 실행하고 결과를 출력

### 새로운 문제 시작하기
1. `solution.js`를 복사해서 새로운 파일 생성 (예: `problem1.js`)
2. `template.js`에서 import 경로 수정: `require('./problem1')`
3. `node template.js`로 실행

### 예시 실행
```bash
$ node template.js
입력: 1 2
출력: 3
```

### solution 함수 구조
```javascript
function solution(input) {
  // input: 터미널에서 받은 입력 문자열
  // return: 결과값
  
  // 여기에 알고리즘 로직 작성
  return result;
}

module.exports = { solution };
```

## 주의사항
- `solution.js`의 `solution` 함수만 수정하면 됩니다
- `template.js`는 그대로 사용
- 새로운 문제는 `solution.js`를 복사해서 만들고, `template.js`의 import 경로만 수정
