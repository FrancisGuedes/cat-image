import React from 'react'
import Lottie from 'react-lottie'

import * as loading from '../animations/loading.json'
import * as done from '../animations/done.json'

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const defaultOptions2 = {
  loop: false,
  autoplay: true, 
  animationData: done.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const Loading = ({ loading }) => {
  return (
    <div style={{marginTop: '10rem'}} >
      { !loading ? (
        <Lottie 
          options={defaultOptions}
          height={160}
          width={160}
        />
      ) : (
        <Lottie 
          options={defaultOptions2}
          height={160}
          width={160}
        />
      ) }
    </div>
  )
}

export default Loading;
