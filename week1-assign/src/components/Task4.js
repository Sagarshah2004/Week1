import React from "react";

function Task4() {
  const items = [
    {
      title: "React Guide",
      url: "https://reactjs.org",
      author: "Dan Abramov",
      num_comments: 10,
      points: 100,
      objectID: 1,
    },
    {
      title: "JavaScript Info",
      url: "https://javascript.info",
      author: "Ilya",
      num_comments: 5,
      points: 80,
      objectID: 2,
    },
  ];

  return (
    <div>
      <h2>Article List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Comments</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.objectID}>
              <td>
                <a href={item.url}>{item.title}</a>
              </td>
              <td>{item.author}</td>
              <td>{item.num_comments}</td>
              <td>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task4;