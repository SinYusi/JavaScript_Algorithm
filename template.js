/**
 * 알고리즘 문제 풀이 템플릿
 * solution 함수를 import해서 사용합니다.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// solution 함수를 import (파일명에 맞게 수정)
const { solution } = require('./solution');

async function main() {
  try {
    // 터미널에서 입력 받기
    const input = await new Promise((resolve) => {
      rl.question('입력: ', (answer) => {
        resolve(answer);
      });
    });
    
    // solution 함수 실행
    const result = solution(input);
    
    // 결과 출력
    console.log('출력:', result);
    
  } catch (error) {
    console.error('오류 발생:', error);
  } finally {
    rl.close();
  }
}

// 실행
main();
