import { useState } from "react";

const MultipleInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState('')
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({
      ...person,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };

      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };
  return (
    <>
      <form className="form">
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">email : </label>
          <input
            type="text"
            name="email"
            id="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">age : </label>
          <input
            type="text"
            name="age"
            id="age"
            value={person.age}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          add person
        </button>
      </form>
      {people.map((person) => {
        const { id, firstName, email, age } = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{age}</p>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default MultipleInputs;
