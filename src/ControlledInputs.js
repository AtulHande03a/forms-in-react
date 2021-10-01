import { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //check if both are tru then create object
    if (firstName && email) {
      //creating object to store the values using es6 shorthand
      //ie firstName:firstName  is written as firstName as key and value have same name
      const person = { id: new Date().getTime().toString(), firstName, email };
      //console.log(person);
      setPeople((people) => {
        //using spread operator to spreat the object and adding the new object
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">email : </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">add person</button>
      </form>
      {people.map((person) => {
        const { id, firstName, email } = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputs;
