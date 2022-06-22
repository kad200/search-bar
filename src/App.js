/** @jsxImportSource @emotion/react */

import { useState } from 'react';
// import { useSearchParams, createSearchParams } from 'react-router-dom';
import JSONDATA from './Names.json';
import { css } from '@emotion/react';
// import axios from 'axios'

const appStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;

    input {
      margin-top: 20px;
      width: 300px;
      height: 40px;
      font-size: 20px;
      padding-left: 10px;
    }
`
const liStyle = css`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 1500px;
`

const listStyle = css`
    margin: 10px;
    font-size: 16px;
    display: inline-block;
    text-align: center;
    padding: 10px;
    width: 300px;
`

function App() {
  // HTTPS is needed for using the Firebase API
  // useEffect(() => {
  //   axios.get('https://firebasestorage.googleapis.com/v0/b/search-bar-200.appspot.com/o/Names.json?alt=media&token=3eb24022-fae6-4ea4-ad73-acfdff45daee')
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // })


  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App" css={appStyle}>
      <input type='text' css={appStyle} placeholder='Search for a name' onChange={event => { setSearchTerm(event.target.value) }} />
      <div className='names'>
        <li css={liStyle}>
          {JSONDATA.filter((val) => {
            if (searchTerm === "") {
              return val
            } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }
          }).map((val, key) => {
            return (
              <ul css={listStyle} key={key}>{val}
              </ul>
            );
          })};
        </li>
      </div>

      {/* TODO: if val length is 0 - return 'No names available' */}

    </div>
  );
}

export default App
