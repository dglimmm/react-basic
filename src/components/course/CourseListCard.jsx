import { Fragment } from 'react';
import CourseItem from './CourseItem';
import Card from '../Card';

export default function CourseListCard({ title, items, handleFavoriteRevers }) {
  const lastIndex = items.length - 1;
  return (
    <Card title={title}>
      <div className="courses">
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <CourseItem {...item} handleFavoriteRevers={handleFavoriteRevers} />
            {index !== lastIndex && <hr className="divider" />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
}
