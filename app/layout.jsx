import React, { Children } from 'react'
import '@styles/global.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & share prompts for your next creative project.',
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
          
            <div className='main'>
                <div className='gradient'/> 
            </div>
          <main className="app">
            <Nav />
            {children}
            </main>
            </Provider>
        </body>    
    </html>
  )
}

export default Rootlayout ; 