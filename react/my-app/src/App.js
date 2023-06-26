import React, { useState, useRef, useMemo } from 'react'
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/Ui/button/MyButton';
import MyInput from './components/Ui/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/Ui/select/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/Ui/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javacript', body: '22' },
    { id: 2, title: 'wew', body: '23n-comerse' },
    { id: 3, title: 'sfsdfsde2', body: '76fsdfrse2' },

  ])

 const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState('')
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов" />
    </div>
  );
}

export default App;
