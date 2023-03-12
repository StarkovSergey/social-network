import style from './MyPosts.module.css'
import { Post } from './Post/Post'
import React, { memo } from 'react'
import { MyPostsPropsType } from './MyPostsContainer'
import { Field, Form, Formik } from 'formik'

export const MyPosts = memo((props: MyPostsPropsType) => {
  // TODO: memo не работает - приходят разные пропсы 3 раза. Стоит исправить!
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
        <AddPostForm onSubmit={addPost} />
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  )
})

const AddPostForm: React.FC<{ onSubmit: (values: FormDataType) => void }> = (props) => {
  return (
    <Formik
      initialValues={{
        newPostText: '',
      }}
      validate={(values) => {
        const errors: { newPostText?: string } = {}

        if (!values.newPostText) {
          errors.newPostText = 'Required'
        }

        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        props.onSubmit(values)
        setSubmitting(false)
      }}>
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <div>
            <div>
              <Field component="textarea" name="newPostText" placeholder="Enter your post..." />
            </div>
          </div>
          {errors.newPostText && touched.newPostText && errors.newPostText}

          <button type="submit" disabled={isSubmitting}>
            Add post
          </button>
        </Form>
      )}
    </Formik>
  )
}

type FormDataType = {
  newPostText: string
}
