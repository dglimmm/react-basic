import { useEffect, useRef, useState } from 'react';

function ButtonCounter() {
  //useRef를 사용하면 컴포넌트 별로 값을 유지할 수 있다 .
  const countRef = useRef(0);
  console.log('리랜더링');
  const [count, setCount] = useState(0);
  // let counter = 0;

  const handleClick = () => {
    countRef.current++;
    console.log(countRef.current);
    // counter++;
    // console.log('counter:', counter);
    setCount(count + 1);
  };
  return <button onClick={handleClick}>Count</button>;
}

function Form() {
  const [form, setForm] = useState({
    title: '제목',
    author: '짐코딩',
    content: '',
  });

  const handleForm = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);
  const contentTextareaRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Dom', titleInputRef.current);
    if (!form.title) {
      titleInputRef.current.focus();
    }
    if (!form.author) {
      authorInputRef.current.focus();
    }
    if (!form.content) {
      contentTextareaRef.current.focus();
    }
    console.log('저장성공');
  };

  useEffect(() => {
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    }
    if (!form.author) {
      authorInputRef.current.focus();
      return;
    }
    if (!form.content) {
      contentTextareaRef.current.focus();
      return;
    }
  }, []);

  const [isChanged, setIsChanged] = useState(false);
  //이 변수는 랜더링에 이용되지않고, 그냥 값이 변했는지만 따지려고하니 useRef사용
  const prevForm = useRef(null);

  //서버에서 왔다는 가정
  useEffect(() => {
    prevForm.current = { ...form };
  }, []);

  useEffect(() => {
    const hasChanged =
      prevForm.current.title !== form.title ||
      prevForm.current.content !== form.content ||
      prevForm.current.author !== form.author;
    setIsChanged(hasChanged);
  }, [form]);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>글쓰기</legend>
        <input
          ref={titleInputRef}
          name="title"
          placeholder="제목"
          value={form.title}
          onChange={handleForm}
        />
        <hr />
        <input
          ref={authorInputRef}
          name="author"
          placeholder="작성자"
          value={form.author}
          onChange={handleForm}
        />
        <hr />
        <textarea
          ref={contentTextareaRef}
          name="content"
          placeholder="내용"
          value={form.content}
          onChange={handleForm}
        />
        <hr />
        <button disabled={!isChanged}>전송</button>
      </fieldset>
    </form>
  );
}

export default function AppRef() {
  return (
    <>
      <h2>Count</h2>
      <ButtonCounter />
      <ButtonCounter />
      <h2>Form</h2>
      <Form />
    </>
  );
}
