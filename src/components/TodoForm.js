// import React, { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { account, databases } from "../appwrite/appwriteConfig";

// function TodoForm() {
//   const [todo, setTodo] = useState("");
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     account
//       .get()
//       .then((response) => {
//         setUserId(response.$id);
//         console.log(response);
//       })
//       .catch((errror) => {
//         console.log("error");
//       });
//   }, [userId]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const promise = databases.createDocument(
//       "64996799eb3a0c0a2089",
//       "649967a0055f70f24542",
//       uuidv4(),
//       {
//         userId,
//         todo,
//       }
//     );
//     console.log(promise);
//     promise.then(
//       function (response) {
//         window.location.reload();
//         console.log(response); // Success
//       },
//       function (error) {
//         console.log(error); // Failure
//       }
//     );
//     e.target.reset();
//   };

//   const [formData, setFormData] = useState({
//     userInput: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");

//   const { userInput } = formData;

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setFormData({ userInput: value });
//     setErrorMessage("");
//   };

//   const handleSubmi = (e) => {
//     e.preventDefault();

//     if (userInput.trim() === "") {
//       setErrorMessage("Please enter data.");
//       return;
//     }

//     // Handle form submission logic here
//   };
//   return (
//     <>
//       <div className="max-w-7xl mx-auto mt-10">
//         <form
//           action=""
//           onSubmit={handleSubmit}
//           className="flex justify-center mb-10"
//         >
//           <input
//             id="input"
//             name="input"
//             type="url"
//             placeholder="Eg:https://www.facebook.com"
//             className="border p-2 w-2/3 rounded-md  text-white"
//             onChange={(e) => {
//               setTodo(e.target.value);
//             }}
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 p-2 text-white ml-2 rounded-md"
//           >
//             ADD BOOKMARK
//           </button>
//         </form>
//       </div>
//       -
//     </>
//   );
// }

// export default TodoForm;









import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { account, databases } from "../appwrite/appwriteConfig";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const [userId, setUserId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    account
      .get()
      .then((response) => {
        setUserId(response.$id);
        console.log(response);
      })
      .catch((error) => {
        console.log("error");
      });
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.trim() === "") {
      setErrorMessage("Please enter data.");
      return;
    }

    const promise = databases.createDocument(
      "64996799eb3a0c0a2089",
      "649967a0055f70f24542",
      uuidv4(),
      {
        userId,
        todo,
      }
    );
    console.log(promise);
    promise.then(
      function (response) {
        window.location.reload();
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    e.target.reset();
  };

  return (
    <>
      <div className="max-w-7xl mx-auto mt-10">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex justify-center mb-10"
        >
          <input
            id="input"
            name="input"
            type="url"
            placeholder="Eg:https://www.facebook.com"
            className="border p-2 w-2/3 rounded-md  text-white"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-blue-500 p-2 text-white ml-2 rounded-md"
          >
            ADD BOOKMARK
          </button>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </>
  );
}

export default TodoForm;
