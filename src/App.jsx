import { useState } from "react";
import data from "./data/data";
import Cards from "./components/Cards";

function App() {
  const [users, setUsers] = useState(data);
console.log(users);

  return (
    <div className="bg-gray-200">
      <h1 className="text-3xl font-semibold text-center p-10 mb-5 underline">Users List</h1>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 space-y-10">
        {data.map((users) => {
          return <Cards name={users.name} email={users.email} phone={users.phone} photo={users.photo}/>;
        })}
      </div>
    </div>
  );
}

export default App;
