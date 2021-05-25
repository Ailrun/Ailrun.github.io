import { Language } from '../utils/languages';

const aboutData = {
  [Language.KO]: {
    ownerProfileCaption: '맥주를 보며 즐거워하는 Clare',
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
          '맥주의 바다에서 헤엄치기',
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
    ownerProfileCaption: 'Clare with a few cups of beer',
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
          'Enjoying life with beers',
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
