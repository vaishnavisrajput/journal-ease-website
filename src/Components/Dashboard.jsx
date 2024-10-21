import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Dashboard() {
  const { user } = useContext(UserContext);
  const [displayContent, setDisplayContent] = useState(false);
  const [content, setContent] = useState("");
  const [addContent, setAddContent] = useState([]);
  const [editingText, setEditingText] = useState(null);

  const handleClick = () => {
    console.log("inside the div");
    setContent("");
    setDisplayContent(true);
    setEditingText(null);
  };

  const handleClose = () => {
    setDisplayContent(false);
  };
  const handleAdd = () => {
    if (editingText !== null) {
      const updatedNotes = [...addContent];
      updatedNotes[editingText] = content;
      setAddContent(updatedNotes);
      setEditingText(null);
    } else {
      setAddContent((addContent) => [...addContent, content]);
    }

    setDisplayContent(false);
  };
  const handleUpdate = (index) => {
    setContent(addContent[index]);
    setDisplayContent(true);
    setEditingText(index);
  };
  const handleDelete = (index) => {
    const filteredCont = addContent.filter((_, i) => i !== index);
    setAddContent(filteredCont);
  };

  console.log(addContent);
  return (
    
    <div className="dashboard">
      <div className="writing-container">
        {displayContent === false ? (
          <div className="title">
            <div className="section">
              <div className="header">
                <h1 className="head">
                  Welcome, <span>{user.username}</span>
                </h1>
                <h3 className="head">Start writing your ideas now...</h3>
              </div>
            </div>
            <div className="writing-block">
              <div className="cont-one" onClick={handleClick}>
                <textarea
                  name="blog-1"
                  id="blog-1"
                  cols="30"
                  rows="10"
                  placeholder="+"
                ></textarea>
              </div>
              <div className="added-notes">
                {addContent.map((note, index) => (
                  <div className="inner-div">
                  <div
                    key={index}
                    className="note"
                    onClick={() => handleUpdate(index)}
                  >
                    <p>{note}</p>
                    
                  </div>
                  <button
                      className="dlt-btn"
                      id="dlt-btn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>

                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="main-container">
            <div className="new-cont">
              <button className="btn" id="cancel-btn" onClick={handleClose}>
                X
              </button>
              <br />
              <textarea
                name="blog-1"
                id="blog-1"
                cols="30"
                rows="10"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <div className="btn-div">
                <button className="btn" id="add-btn" onClick={handleAdd}>
                  {editingText !== null ? "Update Note" : "Add Note"}
                  
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
