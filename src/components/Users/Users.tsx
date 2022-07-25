import { UsersPropsType } from './UsersContainer'
import style from './Users.module.css'
import axios from 'axios'
import userImagePlaceholder from '../../assets/images/user-placeholder.png'
import React from 'react'

export class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  changePage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => this.props.setUsers(response.data.items))
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    // const pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //   pages.push(i)
    // }

    return (
      <div>
        <div className={style.pagination}>
          <button
            className={`${style['pagination__button']}`}
            onClick={() => {
              this.changePage(1)
            }}>
            &lt;&lt;
          </button>
          <button
            className={`${style['pagination__button']}`}
            onClick={() => {
              this.changePage(this.props.currentPage - 1 || 1)
            }}>
            &lt;
          </button>
          <div className={`${style['pagination__button']} ${ style['pagination__button--active']}`}>
            {this.props.currentPage}
          </div>
          <button
            className={`${style['pagination__button']}`}
            onClick={() => {
              this.changePage(this.props.currentPage + 1)
            }}>
            &gt;
          </button>
          <button
            className={`${style['pagination__button']}`}
            onClick={() => {
              this.changePage(pagesCount)
            }}>
            &gt;&gt;
          </button>

          {/*{pages.map((page) => {*/}
          {/*  return (*/}
          {/*    <button*/}
          {/*      key={page}*/}
          {/*      className={`${style['pagination__button']} ${*/}
          {/*        this.props.currentPage === page ? style['pagination__button--active'] : ''*/}
          {/*      }`}*/}
          {/*      onClick={() => {*/}
          {/*        this.changePage(page)*/}
          {/*      }}>*/}
          {/*      {page}*/}
          {/*    </button>*/}
          {/*  )*/}
          {/*})}*/}
        </div>
        <ul>
          {this.props.users.map((user, index) => (
            <li key={index}>
              <div>
                <img className={style.img} src={user.photos.small ? user.photos.small : userImagePlaceholder} alt="" />
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id)
                    }}>
                    follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id)
                    }}>
                    unfollow
                  </button>
                )}
              </div>
              <div>
                <div>
                  <b>{user.name}</b>
                  <p>{user.status}</p>
                </div>
                <div>
                  <span>{'user.location.country'}</span>
                  <span>{'user.location.city'}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
