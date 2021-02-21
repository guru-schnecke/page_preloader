import React from 'react'

import { PreloaderOne, CircularLoader } from 'page_preloader'
import 'page_preloader/dist/index.css'

const App = () => {
  let [list, setList] = React.useState(false);

  React.useEffect(() => {
    setTimeout(()=> {
      setList(true)
    }, 2000)
  },[])

  console.log(list)
  return (
    <React.Fragment>
      <CircularLoader text={"Loading lah"} status={list}>
        <div>Lost</div>
      </CircularLoader>
      <PreloaderOne color={"red"} text="Create React Library Example 😄" />
    </React.Fragment>
  );
}

export default App
