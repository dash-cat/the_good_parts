import React, { useState } from 'react'
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/Ui/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javacript', body: 'Description'},
    {id: 2, title: 'Vue', body: 'Non-comerse'},
    {id: 3, title: 'Vue2', body: 'Non-comerse2'},

  ])



  return (
    <div className="App">
      <form>
        <input type="text" placeholder='The Name Post'/>
        <input type="text" placeholder='Description Post'/>
        <MyButton>Create Post</MyButton>
      </form>
     <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
