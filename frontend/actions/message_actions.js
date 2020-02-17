import * as MessageAPIUtil from "../util/message_api_util";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const createMessage = message => dispatch =>
  MessageAPIUtil.createMessage(message).then(message =>
    dispatch(receiveMessage(message))
  );

export const fetchMessages = channel_id => dispatch =>
  MessageAPIUtil.fetchMessages(channel_id).then(messages =>
    dispatch(receiveMessages(messages))
  );
