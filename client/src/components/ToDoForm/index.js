import React, { useState } from "react";
import "./index.css";
import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../../utils/mutations";
import { QUERY_TODOS, QUERY_ME } from "../../utils/queries";

const ToDoForm = () => {
  const [toDoText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addToDo, { error }] = useMutation(ADD_TODO, {
    update(cache, { data: { addToDo } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { toDos } = cache.readQuery({ query: QUERY_TODOS });
        cache.writeQuery({
          query: QUERY_TODOS,
          data: { toDos: [addToDo, ...toDos] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, toDos: [...me.toDos, addToDo] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addToDo({
        variables: { toDoText },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <div className="post-container">
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <div className="wrapper">
        <form className="post-form" onSubmit={handleFormSubmit}>
          <input
            placeholder="Add a task on To Do List"
            value={toDoText}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToDoForm;
