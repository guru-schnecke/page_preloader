import React from 'react'
// import styles from './styles.module.css'
import styl from './styles.css'

export const PreloaderOne = ({ text, color }) => {
  return (
    <div className={styl.content}>
      <div className={styl.loading}>
        <p>loading</p>
        <span style={{ backgroundColor: color || '#5389a6' }} />
      </div>
    </div>
  )
}

export const CircularLoader = ({ children, text, status }) => {
  // eslint-disable-next-line no-unused-vars
  React.useEffect(() => {}, [status])
  console.log(styl)
  return (
    <React.Fragment>
      {status ? <div>{children}</div> : <div className={styl.circularloading}>Loading&#8230;</div> }
    </React.Fragment>
  )
}
