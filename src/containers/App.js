import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        const
            user = this.props.user,
            year = this.props.page.year,
            photos = this.props.page.photos;

        return <div>
            <p>Привет, {user.name}!</p>
            <p>У тебя {photos.length} фото за {year} год</p>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        user: state.user,
        page: state.page
    }
}

export default connect(mapStateToProps)(App)