import React from 'react'

class MainContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  handleChange (event) {
    this.setState({
      query: event.target.value
    })
  }

  render () {
    return (
      <div className="container" style={{ marginTop: 100 }}>
        <div className="row">
          <form>
            <input name="search" placeholder="Search for..." onChange={this.handleChange} />
            <p>{this.state.query}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default MainContent
