import React from 'react';
import Price from './price';

const OfflinePT = () => {
  const content = [
    '3대 운동인 스쿼트, 벤치프레스, 데드리프트에 대한 이해와 습득을 기초로 레슨 진행',

    '개개인의 체형과 강점을 고려한 내게 맞는 자세 만들기',

    '통증없는 건강한 움직임 바로세우기',

    '스스로 운동을 해나갈 수 있게끔 기틀 구축 및 방향성 제시',

    '주마다 갱신되는 개인화 프로그램 제공(레슨 기간동안 온라인 코칭 무료제공)',
  ];
  return (
    <div>
      {' '}
      <p className="max-w-md text-center mx-auto mt-4 text-2xl leading-relaxed text-gray">
        Offline PT Lesson
      </p>
      <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 mt-14 md:gap-9 white-space:pre-wrap">
        <Price
          price={`630,000`}
          month={'35 days'}
          tab={`Offline Lesson 10 Times`}
          content={'📢 온라인 코칭 서비스 무료 제공'}
        />
        <Price
          price={`1,230,000`}
          content={`📢 온라인 코칭 서비스 무료 제공`}
          tab={`Offline Lesson 20 Times`}
          month={'70 days'}
        />
      </div>
      <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 mt-14 md:gap-9">
        <Price
          tab={`One Point Lesson Set`}
          price={`350,000`}
          content={`📢 총 4회 One Point Lesson 제공`}
          month={'4 times'}
        />
        <Price
          price={'99,000'}
          month={'1 day'}
          tab={`One Point Lesson`}
          content={'📢 50분 수업 진행'}
        />
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <div className="mt-8 bg-white mb-10 shadow-lg left-0 p-2 border mt-2 border-indigo-300 rounded-lg mx-auto">
          <div className="ml-5">
            {content.map((title: string, idx: number) => (
              <div className="text-left flex my-3 text-md" key={idx}>
                <svg
                  className="flex-shrink-0 w-5 h-5 mr-2 text-gray-400 opacity-75"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>{' '}
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-center text-lg">
          {`※팀앤트 스튜디오의 정지훈 코치님 기준 가격이며,`}
        </p>
        <p className="text-center text-lg">
          {` 코치님 별로 오프라인 레슨의 진행가능 유무와 가격이 상이할 수 있습니다.`}
        </p>
      </div>
    </div>
  );
};

export default OfflinePT;
