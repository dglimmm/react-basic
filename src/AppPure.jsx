import './App.css';
import PullUpPure from './components/PullUpPure';

export default function ReactComponent() {
  return (
    <div>
      <PullUpPure counter={11} />
      <PullUpPure counter={12} />
      <PullUpPure counter={13} />
    </div>
  );
}
