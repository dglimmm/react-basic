import './AppCourse.css';
import CourseListCard from './components/course/CourseListCard';
import CourseForm from './components/course/CourseForm';
import { useImmer } from 'use-immer';

function App() {
  const [items, updateItems] = useImmer([
    {
      id: 0,
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      thumbnail: '/img/htmlcss.png',
      isFavorite: true,
      link: 'https://inf.run/JxyyT',
    },
    {
      id: 1,
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: '/img/js.png',
      isFavorite: false,
      link: 'https://inf.run/Kpnd',
    },
    {
      id: 2,
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      thumbnail: '/img/portfolio.png',
      isFavorite: true,
      link: 'https://inf.run/YkAN',
    },
  ]);

  const handleFavoriteRevers = (itemId, isFavorite) => {
    updateItems(draft => {
      const targetItem = draft.find(item => item.id === itemId);
      targetItem.isFavorite = isFavorite;
    });
    // const newItems = items.map(item => {
    //   if (item.id === itemId) {
    //     return {
    //       ...item,
    //       isFavorite,
    //     };
    //   }
    //   return item;
    // });
    // setItems(newItems);
  };

  // const favoriteItems = items.filter(item =>item.isFavorite)
  return (
    <>
      <main style={{ flexDirection: 'column', gap: '1rem' }}>
        <CourseForm />
        <CourseListCard
          items={items}
          title="강의 목록"
          handleFavoriteRevers={handleFavoriteRevers}
        />
        {/* <CourseListCard items={ favoriteItems } title="관심 강의"/> */}
      </main>
    </>
  );
}

export default App;
