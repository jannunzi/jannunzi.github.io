
class WeekCard extends React.Component {
  render() {
    let date = new Date()
    date.setFullYear(2020)
    date.setMonth(4)
    date.setDate(4 + (this.props.index - 1) * 7)
    return(
      <div className="card text-white bg-primary">
        <div className="card-header">
          Week {this.props.index} - {date.toDateString()}
        </div>
        <div className="list-group list-group-flush">
          <a
            href={this.props.section.monday}
            target="_blank"
            className={`list-group-item list-group-item-action ${this.props.section.monday ? '':'disabled'}`}>
            <i className="fa fa-youtube-play"></i>
            Monday - Homework review Zoom meeting recording</a>
          <a href={this.props.recitation}
             target="_blank"
             className={`list-group-item list-group-item-action ${this.props.recitation ? '':'disabled'}`}>
            <i className="fa fa-pencil"></i>
            Recitation problem set #{this.props.index}</a>
          <a
            href={this.props.section.wednesday}
            target="_blank"
            className={`list-group-item list-group-item-action ${this.props.section.wednesday ? '':'disabled'}`}>
            <i className="fa fa-youtube-play"></i>
            Wednesday - Recitation Zoom meeting recording</a>
        </div>
      </div>
    )
  }
}

class WeekRow extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col">
          <WeekCard
            index={this.props.index}
            recitation={this.props.week.recitation}
            section={this.props.week.section1}/>
        </div>
        <div className="col">
          <WeekCard
            index={this.props.index}
            recitation={this.props.week.recitation}
            section={this.props.week.section2}/>
        </div>
      </div>
    )
  }
}

class Zoom2 extends React.Component {
  render() {
    return(
      <div>
        <div className="row">
          <div className="col">
            <h3>CS1802 Section 1</h3>
          </div>
          <div className="col">
            <h3>CS1802 Section 2</h3>
          </div>
        </div>
        {weeks.map((week, index) => (
          <WeekRow index={index + 1} week={week} key={index}/>
        ))}
      </div>
    )
  }
}

ReactDOM.render(<Zoom2/>, document.getElementById('zoom2'))
