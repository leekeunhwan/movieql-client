import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

// Query 컴포넌트는 children 함수를 주어야 합니다. (render prop)
const Home = () => (
  // Query 컴포넌트 안에 오는 함수에 따라 다른 화면을 표현할 수 있습니다.
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <span>loading</span>;
      if (error) return <span>something happened</span>;
      if (data) {
        document.querySelector("#root").classList.add("rendered");
      }
      return data.movies.map(movie => (
        <div key={movie.id} className="movie_Card">
          <img src={movie.medium_cover_image} />
          <div>{movie.title}</div>
          <div>평점 {movie.rating}점</div>
        </div>
      ));
    }}
  </Query>
);

export default Home;
