import React from 'react'
import style from './Pagination.module.css'

type PropsType = {
  currentPage: number
  pagesCount: number
  changePage: (page: number) => void
}

export const Pagination = ({ currentPage, pagesCount, changePage }: PropsType) => {
  return (
    <div className={style.pagination}>
      <button disabled={currentPage === 1} className={`${style['pagination__button']}`} onClick={() => changePage(1)}>
        &lt;&lt;
      </button>
      <button
        disabled={currentPage === 1}
        className={`${style['pagination__button']}`}
        onClick={() => changePage(currentPage - 1 || 1)}>
        &lt;
      </button>
      <div className={`${style['pagination__button']} ${style['pagination__button--active']}`}>{currentPage}</div>
      <button
        disabled={currentPage === pagesCount}
        className={`${style['pagination__button']}`}
        onClick={() => changePage(currentPage + 1)}>
        &gt;
      </button>
      <button
        disabled={currentPage === pagesCount}
        className={`${style['pagination__button']}`}
        onClick={() => changePage(pagesCount)}>
        &gt;&gt;
      </button>
    </div>
  )
}
