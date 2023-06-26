import React, { useState, useEffect } from 'react'
import './styles/App.css'
import PostList from './components/PostList';
import MyButton from './components/Ui/button/MyButton';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/Ui/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';


function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState('')
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostsLoading, setPostLoading] = useState('')

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setPostLoading(true)
    const posts = await PostService.getAll()
    setPosts([...posts])
    setPostLoading(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>Get posts</MyButton>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading
        ? <h1>Идет загрузка...</h1>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов" />}

    </div>
  );
}

export default App;
