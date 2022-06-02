import "./styles.css";
import axios from "axios";
import { useState } from "react";

export default function App() {



  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  });
    
    
    
    

//   const handleFileChange = () => (e) => {
//     setQuery((prevState) => ({
//       ...prevState,
//       files: e.target.files[0]
//     }));
//     };
    

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      

    if (loading) return;
      setLoading(true);
      

    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/8a375f0f-1748-4e5f-ac53-da63282411ea",
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: ""
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
    };
    


  return (
    <div className="App">
      <div class="form">
        <form enctype="multipart/form-data" onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={query.name}
              onChange={handleChange()}
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={query.email}
              onChange={handleChange()}
            />
          </div>
          {/* <input type="file" name="file" onChange={handleFileChange()} /> */}
          <button type="submit">Send</button>
          {formStatus && <p>Message sent.</p>}
        </form>
      </div>
    </div>
  );
}
