import { reducerCases } from "./constants";

export const initialState = {
  userInfo: undefined,
  newUser: false,
  contactsPage: false,
  currentChatUser: undefined,
  messages: [],
  socket:undefined,
  onlines:[]
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_USER_INFO:
      const newState = {
        ...state,
        userInfo: action.userInfo,
      };
      return newState;
    case reducerCases.SET_NEW_USER:
      return {
        ...state,
        newUser: action.newUser,
      };
    case reducerCases.SET_ALL_CONTACT_PAGE:
      return {
        ...state,
        contactsPage: !state.contactsPage,
      };

    case reducerCases.CHANGE_CURRENT_CHAT_USER:
      return {
        ...state,
        currentChatUser: action.user,
      };
    case reducerCases.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    case reducerCases.SET_SOCKET:
      return{
        ...state,
        socket:action.socket
      }
      case reducerCases.ADD_MESSAGE:
        return{
          ...state,
          messages:[...state.messages,action.newMessage]
        }
      case reducerCases.ONLINE_USERS:
        return{
          ...state,
          onlines:[...state.onlines,action.onlines]
        }
    default:
      return state;
  }
};

export default reducer;
