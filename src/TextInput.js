import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm: {
      display: "flex",
      justifyContent: "center",
      width: "95%",
      margin: `${theme.spacing(0)} auto`
    },
    wrapText: {
      width: "100%"
    },
    button: {
      //margin: theme.spacing(1),
    }
  })
);

export const TextInput = ({
  setInputText,
  inputText,
  messages,
  setMessages
}) => {
  const classes = useStyles();
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = () => {
    if (inputText.trim() === "") return;
    const botResponse = getBotResponse(inputText);
    setMessages([
      ...messages,
      { text: inputText, sender: "user" },
      { text: botResponse, sender: "bot" }
    ]);
    setInputText("");
  };
  const getBotResponse = (userMessage) => {
    return ["Hi", "Hello"].includes(userMessage)
      ? "Hello"
      : "Hi, How may I assist you";
  };
  return (
    <>
      <form className={classes.wrapForm} noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="Please type here"
          className={classes.wrapText}
          onChange={handleInputChange}
          //margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          <SendIcon />
        </Button>
      </form>
    </>
  );
};
