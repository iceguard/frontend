// import React from 'react'
// import Header from './Header'

// const App = ({ children }) => (
//     <main>
//         <Header />
//         {children}
//     </main>
// )

// export default App

import React, { Component } from 'react'
import Header from './Header'

export default class App extends Component {
    render() {
        return (
            <main>
                <Header />
                {this.props.children}
            </main>
        )
    } 
}
