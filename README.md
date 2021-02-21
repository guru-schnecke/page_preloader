# page_preloader

> loading screen for GA class

[![NPM](https://img.shields.io/npm/v/page_preloader.svg)](https://www.npmjs.com/package/page_preloader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save page_preloader
```

## Usage

```jsx
import React, { Component } from 'react'

import {PreloaderOne, CircularLoader} from 'page_preloader'
import 'page_preloader/dist/index.css'

class Example extends Component {
  state = {
    statusState: false,
    lists : []
  }

  componentDidMount() {
    fetch(`URL GOES HERE`)
      .then(res => res.json())
      .then(result => {
        this.setState({ statusState : true, lists: result})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
    <PreloaderOne color={"red"} />
        <CircularLoader status={statusState}>
          <div>
            {lists.map(item => {
              <li key={item.id}>{item.name}</li>
            })}
          </div>
        </CircularLoader>
    </>
    )
  }
}
```
### Preloader
| Props| description| example|
|----| ----| ----|
|color| Set color of slider loader|  ```<PreloaderOne color={"red"} /> <PreloaderOne color={"#000000"} />```|

### Circular Preloader
| Props| description| example|
|----| ----| ----|
|color| Set color of slider loader|  ```<PreloaderOne color={"red"} /> <PreloaderOne color={"#000000"} />```|


## License

MIT © [guru-schnecke](https://github.com/guru-schnecke)
