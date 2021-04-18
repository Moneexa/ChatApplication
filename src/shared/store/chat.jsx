import { Subject } from 'rxjs'


const subject = new Subject()

const initialState = {
    users: [],
    chatList: [],
    newDataCount: 0,
    loggedIn: false,
}
let state = initialState

const chatStore = {
    init: () => subject.next(state),
    subscribe: (setState) => subject.subscribe(setState),
    sendMessage: (message) => {
        state = {
            ...state,
            chatList: [...state.chatList, message],
            newDataCount: state.newDataCount + 1
        }
        subject.next(state);

    },
    addUser: (payload) => {
        state = {
            ...state,
            users: [...state.users, payload],
        }
        subject.next(state);

    },
    login: (payload) => {
        state = {
            ...state,
            loggedIn: payload
        }
        subject.next(state);

    },
    initialState
}
export default chatStore