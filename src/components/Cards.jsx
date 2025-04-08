const Cards = (users) => {
    console.log(users)
  return (
    <div className="flex h-[520px] justify-center">
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          src={users.photo}
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {users.name}
            </h2>
            <p className="dark:text-gray-800">{users.email}</p>
            <p className="dark:text-gray-800">{users.phone}</p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
