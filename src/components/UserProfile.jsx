<<<<<<< HEAD
<div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', maxWidth: '300px' }}>
  <h2 style={{ color: 'blue', fontSize: '20px', marginBottom: '5px' }}>{props.name}</h2>
  <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
  <p>Bio: {props.bio}</p>
</div>
=======
function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 sm:w-36 h-24 sm:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-lg sm:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300">
        John Doe
      </h1>
      <p className="text-sm sm:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
>>>>>>> 13bb5e03651f72d0c5dec5c3b59e346657ef8bd8
