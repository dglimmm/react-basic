function HeartIconBtn({ onHeartClick, isFavorite = false }) {
  return (
    <button className="btn" onClick={onHeartClick}>
      <img
        className="btn__img"
        src={isFavorite ? '/img/heart-fill-icon.svg' : '/img/heart-icon.svg'}
      />
    </button>
  );
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.svg" alt="" />
    </a>
  );
}

export default function CourseItem({
  title,
  description,
  thumbnail,
  isFavorite,
  link,
  id,
  handleFavoriteRevers,
}) {
  function handleFavorite(e) {
    e.stopPropagation();
    handleFavoriteRevers(id, !isFavorite);
  }

  function handleItemClick() {
    open(link, '_blank');
  }
  return (
    <article className="course" onClick={handleItemClick}>
      <img className="course__img" src={thumbnail} alt="강의 이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <HeartIconBtn isFavorite={isFavorite} onHeartClick={handleFavorite} />
        {link && <LinkIconBtn link={link} />}
      </div>
    </article>
  );
}
