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
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
 
   setPosts([...posts, {...post, id: Date.now()}])
   setPost({title: '', body: ''})
  }


  return (
    <div className="App">
      {/* Managed component*/}
      <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder='The Name Post'
        />
        {/* unmanaged component*/}
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
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
