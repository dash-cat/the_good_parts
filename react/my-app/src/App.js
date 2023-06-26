import React, { useState, useRef } from 'react'
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/Ui/button/MyButton';
import MyInput from './components/Ui/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/Ui/select/MySelect';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javacript', body: '22' },
    { id: 2, title: 'wew', body: '23n-comerse' },
    { id: 3, title: 'sfsdfsde2', body: '76fsdfrse2' },

  ])

  const [selectedSort, setselectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPost() {
    console.log('working function sort')
    if(selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }

   
  const sortedPosts = getSortedPost()
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setselectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <MyInput
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder={'Search...'}
      />
      <hr style={{margin: '15px 0'}}/>
      <div>
       <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]}
       />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={sortedPosts} title="Список постов" />
        : <h1 style={{ textAlign: 'center' }}>Посты не были найдены!</h1>
      }
    </div>
  );
}

export default App;
