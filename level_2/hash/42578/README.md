# 위장

## 문제 설명

코니는 매일 다른 옷을 조합하여 입는것을 좋아합니다.

코니가 가진 의상들이 담긴 2차원 배열 `clothes`가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

## 제한사항

- `clothes`의 각 행은 `[의상의 이름, 의상의 종류]`로 이루어져 있습니다.
- 코니가 가진 의상의 수는 1개 이상 30개 이하입니다.
- 같은 이름을 가진 의상은 존재하지 않습니다.
- 각 종류별로 최대 1가지 의상만 착용할 수 있습니다.
- 코니는 하루에 최소 한 개의 의상은 입습니다.

## 입출력 예

| clothes | return |
| ------- | ------ |
| `[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]` | 5 |
| `[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]` | 3 |

## 입출력 예 설명

### 예제 #1

headgear: yellow_hat, green_turban (2개), eyewear: blue_sunglasses (1개)
→ (2+1) × (1+1) - 1 = **5**

### 예제 #2

face: crow_mask, blue_sunglasses, smoky_makeup (3개)
→ (3+1) - 1 = **3**

## 풀이 핵심

각 종류별로 `n`개의 의상이 있을 때, 해당 종류에서 선택할 수 있는 경우의 수는 `n+1` (안 입는 경우 포함).
모든 종류의 경우의 수를 곱한 뒤, 아무것도 안 입는 경우(1)를 빼면 정답.

```
정답 = (n1+1) × (n2+1) × ... × (nk+1) - 1
```
