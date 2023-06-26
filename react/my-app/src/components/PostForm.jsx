import React, { useState } from 'react'
import MyInput from './Ui/input/MyInput'
import MyButton from './Ui/button/MyButton'

const PostForm = ({create}) => {

      const [post, setPost] = useState({title: '', body: ''})
    
      const addNewPost = (e) => {
        e.preventDefault()
     
       const newPost = {
        ...post, id: Date.now()
       }
       create(newPost)
       setPost({title: '', body: ''})
      }
    return (
        <div>
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
        </div>
    )
}

export default PostForm 