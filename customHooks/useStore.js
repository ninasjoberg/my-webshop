import React from 'react'
import { MobXProviderContext } from 'mobx-react'

const useStore = () => {
  return React.useContext(MobXProviderContext)
}

export default useStore