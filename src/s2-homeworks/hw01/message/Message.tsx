import React from "react";
import s from "./Message.module.css";
import { MessageType } from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
  message: MessageType;
};

// нужно отобразить приходящие данные
const Message: React.FC<MessagePropsType> = ({ message }) => {
  return (
    <div id={"hw1-message-" + message.id} className={s.message}>
      <div className={s.imageAndText}>
        <img id={"hw1-avatar-" + message.id} src={message.user.avatar} alt="avatar" />
        <div className={s.text}>
          <div id={"hw1-name-" + message.id} className={s.name}>
            {/*создаёт студент*/}
            <h2>{message.user.name}</h2>
            {/**/}
          </div>
          <pre id={"hw1-text-" + message.id} className={s.messageText}>
            {/*создаёт студент*/}
            <p>{message.message.text}</p>
            {/**/}
          </pre>
        </div>
      </div>
      <div id={"hw1-time-" + message.id} className={s.time}>
        {/*создаёт студент*/}
        <span>{message.message.time}</span>
        {/**/}
      </div>
    </div>
  );
};

export default Message;
