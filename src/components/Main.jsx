import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import bg from "../assets/bg.svg";
import { ToastContainer, toast } from "react-toastify";
import { getNotes } from "../service";
import { AiOutlineEdit } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { v4 } from "uuid";
import {
  Back,
  BgImage,
  BgCover,
  Left,
  TitleBar,
  Wrap,
  Right,
  Flex,
  Window,
  NoteTitle,
  Note,
  Input,
  TextArea,
  New,
} from "./styles";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Main = () => {
  const [newNote, setNewNote] = useState(0);
  const [newNoteContent, setNewNoteContent] = useState({});
  const [temp, setTemp] = useState(null);
  const [notes, setNotes] = useState([]);

  const putContent = (id = null) => {
    if (id !== null) {
      var data = JSON.stringify(newNoteContent);
      var config = {
        method: "put",
        url: `https://reminders-task.hiring.durbin.live/note/${id}`,
        headers: {},
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.data.status === "OK") {
            toast.success("Notelet saved");
            setNotes(newNotes);
            setNewNote(!newNote);
            setNewNoteContent({});
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      return;
    }
    if (!newNoteContent.title) {
      toast.error("Please add a title!", {});
      return;
    }
    if (!newNoteContent.description) {
      toast.error("Please add a decription!", {});
      return;
    }
    setNewNoteContent({ ...newNoteContent, created_at: Date() });
    const newNotes = [newNoteContent, ...notes];

    const params = JSON.stringify(newNoteContent);
    var config = {
      method: "post",
      url: "https://reminders-task.hiring.durbin.live/note",
      headers: {},
      data: params,
    };  
    axios(config)
      .then((res) => {
        toast.success("Notelet added");
        console.log(res);
        setNotes(newNotes);
        setNewNote(!newNote);
        setNewNoteContent({});
      })
      .catch((e) => {
        toast.error("error");
      });

    // var requestOptions = {
    //   method: "POST",
    //   body: params,
    //   redirect: "follow",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // setNotes(newNotes);
    // setNewNote(!newNote);
    // setNewNoteContent({});
    // try {
    //   const res = fetch(
    //     "https://reminders-task.hiring.durbin.live/note",
    //     requestOptions
    //   );
    //   const data = JSON.parse(res).data;
    //   console.log(data);
    //   if (data.status === "OK") {
    //     toast.success("Notelet Added");
    //   } else toast.error("error");
    //   console.log("dataaaaaaaaaaaaaa", data);
    // } catch (e) {
    //   toast.error(
    //     "There is some error upadting your notelet kindly try again later"
    //   );
    // }
  };

  const discard = () => {
    if (temp) {
      setNotes([temp, ...notes]);
      setTemp(null);
      setNewNote(0);
      setNewNoteContent({});
      return;
    }
    setNewNote(0);
  };

  const deleteNote = (id, title = null) => {
    var config = {
      method: "delete",
      url: `https://reminders-task.hiring.durbin.live/note/${id}`,
      headers: {},
    };
    const newNotes = notes.filter((note) => note.title !== title);
    setNotes(newNotes);
    axios(config)
      .then(function (response) {
        if (response.data.status === "OK") {
          toast.success("Notelet deleted");
          const newNotes = notes.filter((note) => note.id !== id);
          setNotes(newNotes);
        }
      })
      .catch(function (error) {
        toast.error("There is some error deleting this notelet");
      });
  };

  const editNote = (id) => {
    const content = notes.filter((note) => note.id === id)[0];
    setTemp(content);
    setNewNoteContent(content);
    setNewNote(!newNote);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleChange = (event) => {
    const updatedNoteContent = {
      ...newNoteContent,
      [event.target.id]: event.target.value,
    };
    setNewNoteContent(updatedNoteContent);

    console.log(newNoteContent);
  };

  useEffect(() => {
    axios
      .get("https://reminders-task.hiring.durbin.live/notes")
      .then(function (response) {
        console.log(response.data.data.notes);
        setNotes(response.data.data.notes);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  }, []);
  useEffect(() => {}, [notes]);
  return (
    <AnimatePresence>
      <Back>
        <BgImage src={bg} />
        <BgCover />
        <Wrap>
          <Window>
            <TitleBar />
            <Flex>
              <Left>
                <h1>Notes</h1>
                {newNote ? (
                  <>
                    <motion.h3
                      layout
                      id="start"
                      onClick={() => putContent(temp ? temp.id : null)}
                      exit={{
                        opaacity: 0,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      Save{" "}
                    </motion.h3>
                    <motion.p
                      layout
                      exit={{
                        opaacity: 0,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      onClick={discard}
                    >
                      Discard
                    </motion.p>
                  </>
                ) : (
                  <motion.h3
                    layout
                    id="start"
                    onClick={() => setNewNote(!newNote)}
                    exit={{
                      opaacity: 0,
                    }}
                    transition={{ duration: 0.5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Start a blank notelet
                  </motion.h3>
                )}
              </Left>

              <Right>
                {newNote ? (
                  <New layout>
                    <Input
                      placeholder={`Title`}
                      value={newNoteContent.title}
                      onChange={handleChange}
                      id="title"
                    />
                    <TextArea
                      id="description"
                      placeholder={`Start Typing here`}
                      value={newNoteContent.description}
                      onChange={handleChange}
                    />
                  </New>
                ) : (
                  <AnimatePresence exitBeforeEnter>
                    <AnimateSharedLayout>
                      <Masonry
                        breakpointCols={4}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                      >
                        {notes.map((note, index) => {
                          return (
                            <Note
                              key={note.id}
                              whileHover={{}}
                              // onClick={() => editNote(note.id)}
                              layout
                              key={note.title}
                              drag
                              dragConstraints={{
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                              }}
                              dragElastic={0.1}
                              animate={{
                                y: 0,
                                opacity: 1,
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0,
                                x: -6,
                              }}
                              transition={{
                                duration: 5,
                                delay: Math.log10(index),
                              }}
                            >
                              <div className="icons">
                                {/* <AiOutlineEdit /> */}
                                <TiDeleteOutline
                                  id="del"
                                  onClick={() =>
                                    deleteNote(note.id, note.title)
                                  }
                                />
                              </div>
                              <h6>{note.title}</h6>
                              <p>{note.description}</p>
                              <NoteTitle>
                                <span>{note.lable}</span>
                              </NoteTitle>
                            </Note>
                          );
                        })}
                      </Masonry>
                    </AnimateSharedLayout>
                  </AnimatePresence>
                )}
              </Right>
            </Flex>
          </Window>
        </Wrap>

        <ToastContainer position="top-right" />
      </Back>
    </AnimatePresence>
  );
};

export default Main;
