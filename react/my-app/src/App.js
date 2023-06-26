import React, { useState, useRef } from 'react'
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/Ui/button/MyButton';
import MyInput from './components/Ui/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javacript', body: 'Description' },
    { id: 2, title: 'Vue', body: 'Non-comerse' },
    { id: 3, title: 'Vue2', body: 'Non-comerse2' },

  ])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()
   const newPost = {
    id: Date.now(),
    title,
    body,
   }
   setPosts([...posts, newPost])
   setTitle('')
   setBody('')
  }


  return (
    <div className="App">
      {/* Managed component*/}
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder='The Name Post'
        />
        {/* unmanaged component*/}
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder='Description Post'

        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
