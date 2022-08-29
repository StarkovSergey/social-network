import style from './MyPosts.module.css'
import { Post } from './Post/Post'
import React from 'react'
import { MyPostsPropsType } from './MyPostsContainer'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

export const MyPosts = (props: MyPostsPropsType) => {
  const postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} id={post.id} />
  ))

  const addPost = (values: FormDataType) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={style['posts-box']}>
      <h3>posts</h3>
      <div>
          <AddPostFormRedux onSubmit={addPost} />
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  )
}

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field component="textarea" name="newPostText" placeholder="Enter your post..." />
        </div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm<FormDataType>({ form: 'dialogAddMessageForm' })(AddPostForm)

type FormDataType = {
  newPostText: string
}
