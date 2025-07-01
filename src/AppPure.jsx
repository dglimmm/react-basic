import './App.css';
import PullUpPure from './components/PullUpPure';

//리액트 컴포넌트는 동일한 입력값에대해 동일한 결과물을 내야한다.
export default function ReactComponent() {
  return (
    <div>
      <PullUpPure counter={11} />
      <PullUpPure counter={12} />
      <PullUpPure counter={13} />
    </div>
  );
}
