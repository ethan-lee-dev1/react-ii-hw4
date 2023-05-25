import "./App.css";
import { useRef } from "react";

function App() {
  let firstName = useRef(null);
  let lastName = useRef(null);

  const handleClick = () => {
    alert(`Welcome ${firstName.current.value} ${lastName.current.value} !`);
  };

  return (
    <div className="App">
      <form className="form">
        <label>First Name:</label>
        <input
          ref={firstName}
          className="input"
          type="text"
          firstName="firstName"
          placeholder="First Name"
        />
        <label>Last Name:</label>
        <input
          ref={lastName}
          className="input"
          type="text"
          lastName="lastName"
          placeholder="Last Name"
        />
        <button onClick={() => handleClick()}>GREET ME</button>
      </form>
    </div>
  );
}

export default App;
