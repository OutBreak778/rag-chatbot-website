import React from 'react'

const ReconstructUrl = ({url}: {url: string[]}) => {

    const decodedComponent = url.map((item) => decodeURIComponent(item))

  return decodedComponent.join('/')
}

export default ReconstructUrl