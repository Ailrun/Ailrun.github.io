import { Language } from '../utils/languages';

const aboutData = {
  [Language.KO]: {
    ownerProfileCaption: '교정의 Clare',
    subjects: [
      {
        title: '학력',
        entries: [
          'McGill 대학교 컴퓨터과학 박사 과정',
          '서울대학교 화학 학사',
          '서울대학교 철학 학사',
          '서울대학교 컴퓨터공학 학사',
        ],
      },
      {
        title: '취미',
        entries: [
          '다양한 맥주의 차이를 집어내기',
          '맛난 음식을 찾아 모험하기',
          '시 한 구절을 끄적이기',
        ],
      },
      {
        title: '연락처',
        entries: [
          'Github/Ailrun',
        ],
      },
    ],
  },
  [Language.EN]: {
    ownerProfileCaption: 'Clare with a Chemistry text',
    subjects: [
      {
        title: 'Education',
        entries: [
          'McGill Univ, Ph.D. student in Computer Science',
          'Seoul Nat\'l Univ, Bachelor\'s degree in Chemistry',
          'Seoul Nat\'l Univ, Bachelor\'s degree in Philosophy',
          'Seoul Nat\'l Univ, Bachelor\'s degree in Computer Science and Engineering',
        ],
      },
      {
        title: 'Hobby',
        entries: [
          'Finding characteristics of beer types',
          'Falling in love with foods',
          'Writing pieces of poem',
        ],
      },
      {
        title: 'Contact',
        entries: [
          'Github/Ailrun',
        ],
      },
    ],
  },
};
export default aboutData;
