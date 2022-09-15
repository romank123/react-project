import { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./App.css";

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleSubmit = (event) => {
    // event.preventDefault();
    // const target = event.target;
    //const author = target.author.value;
    //const text = target.text.value;

    setMessageList((prevState) => [
      ...prevState,
      {
        id: giveLastId(prevState),
        //author: author,
        //text: text,
      },
    ]);
  };

  function giveLastId(arr) {
    return arr.length ? arr[arr.length - 1].id + 1 : 0;
  }

  function botAnswer() {
    const lastAuthor = messageList[messageList.length - 1];
    if (lastAuthor && lastAuthor.author) {
      setMessageList((prevState) => [
        ...prevState,
        {
          id: giveLastId(prevState),

          text: `Сообщение автора ${lastAuthor.author} отправлено`,
        },
      ]);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      botAnswer();
    }, 2000);
  }, [messageList]);

  return (
    <div>
      <Box component='form' noValidate autoComplete='off'>
        <TextField
          placeholder='автор'
          name='author'
          autoFocus
          label={"Автор"}
        />
        {/* <input type='text' name='author'></input> */}
        {/* <input type='text' name='text'></input> */}
        <br></br>
        <TextField placeholder='текст' name='text' autoFocus label={"Текст"} />
        <br></br>
        <Button
          variant='contained'
          style={{ marginTop: "1rem" }}
          onClick={handleSubmit}
        >
          Отправить
        </Button>
      </Box>

      {messageList.map((message) => {
        return (
          <div key={message.id}>
            {message.author && (
              <p>
                <span>Автор:</span>
                {message.author}
              </p>
            )}
            <p>
              {message.author && <span></span>} {message.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
