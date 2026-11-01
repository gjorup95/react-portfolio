import React from 'react'
import whyDidYouRender from '@welldone-software/why-did-you-render'

// Opt-in: import './wdyr' as the first line of src/index.jsx to enable.
if (import.meta.env.DEV) {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  })
}
