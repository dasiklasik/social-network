import {v1} from "uuid";
import avatar from '../assets/ava.jpg'

export type postType = {
    id: string
    message: string
    likesCount: number
}

export type profilePageType = {
    postsData: Array<postType>
    newPostValue: string
}

export type dialogsPageType = {
    messagesData: Array<messageType>
    dialogsData: Array<dialogType>
    newMessageValue: string
}

export type messageType = {
    id: string
    message: string
    myMessage: boolean
}

export type dialogType = {
    id: string
    name: string
}

export type userType = {
    id: string
    name: string
    avatar: string
    isFriend: boolean
}

export type navbarType = {
    friendsBlock: Array<userType>
}

export type stateType = {
    navbar: navbarType
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type storeType = {
    state: stateType
    changePostInputValue: (value: string) => void
    addPost: () => void
    changeMessageInputValue: (value: string) => void
    addMessage: () => void
    DOMrender: () => void
    subscriber: (callback: () => void) => void
}

export const store: storeType = {
    state: {
        navbar: {
            friendsBlock: [
                {id: v1(), name: 'Lesha', avatar: avatar, isFriend: true},
                {id: v1(), name: 'Masha', avatar: avatar, isFriend: true},
                {id: v1(), name: 'Ann', avatar: avatar, isFriend: true},
            ]
        },
        profilePage: {
            postsData: [
                {id: '1', message: 'some message', likesCount: 12},
                {id: '2', message: 'some message', likesCount: 10},
                {id: '3', message: 'new message', likesCount: 0},
            ],
            newPostValue: ''
        },
        dialogsPage: {
            messagesData: [
                {id: v1(), message: 'Hi!', myMessage: false},
                {id: v1(), message: 'Hello!', myMessage: true},
                {id: v1(), message: 'How are you?', myMessage: false},
                {id: v1(), message: 'I am OK', myMessage: true},
            ],
            dialogsData: [
                {id: v1(), name: 'Dasha'},
                {id: v1(), name: 'Masha'},
                {id: v1(), name: 'Olly'},
                {id: v1(), name: 'Andry'},
                {id: v1(), name: 'Sasha'},
            ],
            newMessageValue: ''
        },
    },
    changePostInputValue: (value: string) => {
        store.state.profilePage.newPostValue = value
        store.DOMrender()
    },
    addPost: () => {
        let message = store.state.profilePage.newPostValue
        store.state.profilePage.postsData.push({id: '4', message, likesCount: 0})
        store.state.profilePage.newPostValue = ''
        store.DOMrender()
    },
    changeMessageInputValue: (value: string) => {
        store.state.dialogsPage.newMessageValue = value
        store.DOMrender()
    },
    addMessage: () => {
        let message = store.state.dialogsPage.newMessageValue
        store.state.dialogsPage.messagesData.push({id: v1(), message, myMessage: true})
        store.state.dialogsPage.newMessageValue = ''
        store.DOMrender()
    },
    DOMrender: () => {},
    subscriber: (callback: () => void) => {
        store.DOMrender= callback
    }
}