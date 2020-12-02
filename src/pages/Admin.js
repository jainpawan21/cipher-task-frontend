import React, { useState, useEffect } from "react";
import axios from "../constants/axios";
import { ListGroup, ListGroupItem, Container, Button } from "reactstrap";
const PostNotification = () => {
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description === "" || url === "") {
      setSubmitSuccess(true);
      setErrorMessage("Please fill all the fields");
    } else {
      axios
        .post("notifications", {
          description,
          url,
        })
        .then((res) => {
          console.log(res);
          setSubmitSuccess(true);
          setSuccessMessage("Posted Successfully");
          setErrorMessage("");
          window.location.href = "/admin";
        })
        .catch((e) => {
          console.log(e.reponse);
          setSubmitSuccess(true);
          setErrorMessage("Some Error Occured, Try Again");
          successMessage("");
        });
    }
  };

  useEffect(() => {
    axios
      .get("/notifications")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);
  const handleDelete = (id) => {
    // e.preventDefault()
    axios
      .delete(`/notification/${id}`)
      .then((res) => {
        console.log(res);
        window.location.href = "/admin";
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  // const disp = data.length !== 0 ?

  //
  return (
    <div style={{ marginTop: "20px" }}>
      <Container>
        <ListGroup>
          {data.map((record) => {
            return (
              <div key={record._id}>
                <ListGroupItem color="success">
                  {" "}
                  <p>
                    {record.description}{" "}
                    <a href={record.url} target="_blank">
                      link
                    </a>{" "}
                    <Button
                      onClick={() => handleDelete(record._id)}
                      color="danger"
                      style={{ float: "right" }}
                    >
                      Delete
                    </Button>
                  </p>
                </ListGroupItem>
              </div>
            );
          })}
        </ListGroup>
      </Container>
      <div style={{ marginTop: "40px" }}>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
              <h3>Post Notifications</h3>

              <div className="form-group">
                <label>Description </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                    setSubmitSuccess(false);
                  }}
                />
              </div>

              <div className="form-group">
                <label>URL</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter URL"
                  onChange={(e) => {
                    setURL(e.target.value);
                    setSubmitSuccess(false);
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
              {submitSuccess === true &&
              errorMessage === "" &&
              successMessage !== "" ? (
                <p className="forgot-password text-left">{successMessage}</p>
              ) : null}
              {submitSuccess === true &&
              errorMessage !== "" &&
              successMessage === "" ? (
                <p className="forgot-password text-left">{errorMessage}</p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostNotification;
