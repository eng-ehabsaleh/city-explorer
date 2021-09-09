import React from "react";
import Eachmovie from "./Eachmovie";
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movie,
    };
  }
  render() {
    return (
      <div>
        <Eachmovie movies={this.state.movies} />
      </div>
    );
  }
}
export default Movie;
