// import avatarDefault from '../../static/img/avatarDefault.svg'

export const BASE_URL = 'https://ya-praktikum.tech/api/v2';

export interface IMesseges {
  id: number
  chat_id: number
  user_id: number
  content: string
  time: string
  is_read: boolean
  file?: File
  type: string
}
export interface ILast_MessegeApi {
  id: number
  content: string
  time: string
}
export interface IDataChatApi {
  id: number
  title: string
  unread_count: number
  avatar?: string | null
  last_message: ILast_MessegeApi
}
export interface IDataUsersChat {
  id: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  role: string
  avatar?: string | null
}
export interface IDataUserActive {
  avatar?: string | null
  display_name: string | null
  email: string
  first_name: string
  second_name: string
  id: number
  login: string
  phone: string
}
export interface IDataChat {
  idChat: number
  name: string
  countMessegesNotRead: number
  avatarUser: string
  messeges: IMesseges[]
}
// export const dataChats: IDataChat[] = [
//   {
//     idChat: 1,
//     name: 'Дмитирий', // idUser
//     countMessegesNotRead: 2,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 1111111115,
//         myMessege: true,
//         text: `1Друзья, у меня для вас особенный выпуск новостей!
//                   Rрузья, у меня для вас особенный выпуск новостей!1Друзья,
//                   у меня для вас особенный выпуск новостей!
//                   Rрузья, у меня для вас особенный выпуск новостей!1Друзья,
//                   у меня для вас особенный выпуск новостей!
//                   Rрузья, у меня для вас особенный выпуск новостей!1Друзья,
//                   у меня для вас особенный выпуск новостей!
//                   Rрузья, у меня для вас особенный выпуск новостей!1Друзья,
//                   у меня для вас особенный выпуск новостей!
//                   Rрузья, у меня для вас особенный выпуск новостей!1Друзья,
//                   у меня для вас особенный выпуск новостей!
//                   Rрузья, у меня для вас особенный выпуск новостей!1Друзья,
//                   у меня для вас особенный выпуск новостей!
//                   Rрузья, у меня для вас особенный выпуск новостей!1Друзья,
//                   у меня для вас особенный выпуск новостей!
//                   Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 1756129918,
//         myMessege: true,
//         text: '2Друзья',
//       },
//       {
//         idMessege: 3,
//         dateUnix: 1111111116,
//         myMessege: false,
//         text: `3Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                   выпуск новостей!
//                   Rрузья, у му меня для вас особенный выпуск новостей!
//                   выпуск новостей!
//                   Rрузья, у му меня для вас особенный выпуск новостей!
//                   выпуск новостей!
//                   Rрузья, у му меня для вас особенный выпуск новостей!
//                   выпуск новостей!
//                   Rрузья, у му меня для вас особенный выпуск новостей!
//                   выпуск новостей!
//                   Rрузья, у му меня для вас особенный выпуск новостей!
//                   выпуск новостей!
//                   Rрузья, у му меня для вас особенный выпуск новостей!
//                   выпуск новостей!
//                   Rрузья, у му меня для вас особенный выпуск новостей!
//                   выпуск новостей!
//                   Rрузья, у му меня для вас особенный выпуск новостей!
//                   выпуск новостей!
//                   Rрузья, у му меня для вас особенный выпуск новостей!
//                   выпуск новостей!
//                   Rрузья, у му меня для вас особенный выпуск новостей!
//                   выпуск новостей!
//                   Rрузья, у му меня для вас особенный выпуск новостей!
//                   Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 1756043518,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 1756047118,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 1755960718,
//         myMessege: false,
//         text: '6Друзья!',
//       },
//       {
//         idMessege: 7,
//         dateUnix: 1704034318,
//         myMessege: false,
//         text: `3Друзья, й выпуск новостей! Rрузья,
//                 у му меня для вас особенный выпуск новостей!
//                 выпуск новостей! Rрузья,
//                 у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 7,
//         dateUnix: 1704120718,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 8,
//         dateUnix: 1703858278,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 9,
//         dateUnix: 1704293518,
//         myMessege: false,
//         text: '6Друзья!',
//       },
//       {
//         idMessege: 10,
//         dateUnix: 1703840278,
//         myMessege: false,
//         text: `3Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей! Rрузья,
//                 у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 11,
//         dateUnix: 1704304318,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 12,
//         dateUnix: 1704013078,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 13,
//         dateUnix: 1704290278,
//         myMessege: false,
//         text: '6Друзья!',
//       },
//       {
//         idMessege: 14,
//         dateUnix: 1706968678,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 14,
//         dateUnix: 1703995078,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 2,
//     name: 'Алексндр', // idUser
//     countMessegesNotRead: 5,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 111111111,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 111111112,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 3,
//         dateUnix: 111111113,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей! Rрузья,
//                 у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 111111114,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 111111115,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 1756114676,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 3,
//     name: 'Дмитирий', // idUser
//     countMessegesNotRead: 2,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 1111111111,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 1111111112,
//         myMessege: true,
//         text: '2Друзья, у меня для вас особенныйнный выпуск новостей!',
//       },
//       {
//         idMessege: 3,
//         dateUnix: 1111111113,
//         myMessege: false,
//         text: `3Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 1111111114,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 1111111115,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 1111111116,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 4,
//     name: 'Алексндр', // idUser
//     countMessegesNotRead: 5,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 111111111,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 111111112,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 3,
//         dateUnix: 111111113,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 111111114,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 111111115,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 111111116,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 5,
//     name: 'Дмитирий', // idUser
//     countMessegesNotRead: 2,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 1111111111,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 1111111112,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 3,
//         dateUnix: 1111111113,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 1111111114,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 1111111115,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 1111111116,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 6,
//     name: 'Алексндр', // idUser
//     countMessegesNotRead: 5,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 111111111,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 111111112,
//         myMessege: true,
//         text: '20Друзья, у меня для вас особенныйнный выпуск новостей!',
//       },
//       {
//         idMessege: 3,
//         dateUnix: 111111113,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 111111114,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 111111115,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 111111116,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 7,
//     name: 'Дмитирий', // idUser
//     countMessegesNotRead: 2,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 1111111111,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 1111111112,
//         myMessege: true,
//         text: '2Друзья, у меня для вас особенныйнный выпуск новостей!',
//       },
//       {
//         idMessege: 3,
//         dateUnix: 1111111113,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 1111111114,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 1111111115,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 1111111116,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 8,
//     name: 'Алексндр', // idUser
//     countMessegesNotRead: 5,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 111111111,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 111111112,
//         myMessege: true,
//         text: '20Друзья, у меня для вас особенныйнный выпуск новостей!',
//       },
//       {
//         idMessege: 3,
//         dateUnix: 111111113,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 111111114,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 111111115,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 111111116,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 9,
//     name: 'Дмитирий', // idUser
//     countMessegesNotRead: 2,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 1111111111,
//         myMessege: true,
//         text: `30Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 1111111112,
//         myMessege: true,
//         text: '2Друзья, у меня для вас особенныйнный выпуск новостей!',
//       },
//       {
//         idMessege: 3,
//         dateUnix: 1111111113,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 1111111114,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 1111111115,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 1111111116,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 10,
//     name: 'Алексндр', // idUser
//     countMessegesNotRead: 5,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 111111111,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 111111112,
//         myMessege: true,
//         text: '20Друзья, у меня для вас особенныйнный выпуск новостей!',
//       },
//       {
//         idMessege: 3,
//         dateUnix: 111111113,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 111111114,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 111111115,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 111111116,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 11,
//     name: 'Дмитирий', // idUser
//     countMessegesNotRead: 2,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 1111111111,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 1111111112,
//         myMessege: true,
//         text: '2Друзья, у меня для вас особенныйнный выпуск новостей!',
//       },
//       {
//         idMessege: 3,
//         dateUnix: 1111111113,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 1111111114,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 1111111115,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 1111111116,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 12,
//     name: 'Алексндр', // idUser
//     countMessegesNotRead: 5,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 111111111,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 111111112,
//         myMessege: true,
//         text: '20Друзья, у меня для вас особенныйнный выпуск новостей!',
//       },
//       {
//         idMessege: 3,
//         dateUnix: 111111113,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей!
//                 Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 111111114,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 111111115,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 111111116,
//         myMessege: false,
//         text: `4, у меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 13,
//     name: 'Дмитирий', // idUser
//     countMessegesNotRead: 2,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 1111111111,
//         myMessege: true,
//         text: `4, у меня для вас особенный выпуск новостей!
//         Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 1111111112,
//         myMessege: true,
//         text: '2Друзья, у меня для вас особенныйнный выпуск новостей!',
//       },
//       {
//         idMessege: 3,
//         dateUnix: 1111111113,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей! Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 1111111114,
//         myMessege: true,
//         text: `30Друзья, й выпуск новостей! Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 1111111115,
//         myMessege: true,
//         text: `30Друзья, й выпуск новостей! Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 1111111116,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей! Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
//   {
//     idChat: 14,
//     name: 'Алексндр', // idUser
//     countMessegesNotRead: 5,
//     avatarUser: avatarDefault,
//     messeges: [
//       {
//         idMessege: 1,
//         dateUnix: 111111111,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей! Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 2,
//         dateUnix: 111111112,
//         myMessege: true,
//         text: '20Друзья, у меня для вас особенныйнный выпуск новостей!',
//       },
//       {
//         idMessege: 3,
//         dateUnix: 111111113,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей! Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 4,
//         dateUnix: 111111114,
//         myMessege: true,
//         text: `30Друзья, й выпуск новостей! Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 5,
//         dateUnix: 111111115,
//         myMessege: true,
//         text: `30Друзья, й выпуск новостей! Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//       {
//         idMessege: 6,
//         dateUnix: 111111116,
//         myMessege: false,
//         text: `30Друзья, й выпуск новостей! Rрузья, у му меня для вас особенный выпуск новостей!
//                 Rрузья, у меня для вас особенный выпуск новостей!`,
//       },
//     ],
//   },
// ]

export const transformMonth = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

export interface IUserDataConst {
  name: string
  email: string
  login: string
  // pass: string,
  first_name: string
  second_name: string
  phone: string
  avatar: string
}
export const userData: IUserDataConst = {
  name: 'Сергей',
  email: 'pochta@yandex.ru',
  login: 'ivanivanov',
  first_name: 'Иван',
  second_name: 'Иванов',
  phone: '+7(909)967-30-30',
  avatar: '',
}

export interface IDataInputsDisebledProfileConst {
  id: number,
  heading: string,
  name: ("email" | "login" | "first_name" | "second_name" | "display_name" | "phone"),
  type: string,
  value: string,
  disabled: boolean,
  textError: string,
  placeholder: string,
}
export interface IDataInputsPasswordConst {
  id: number,
  heading: string,
  name: ("oldPassword" | "newPassword" | "repeatNewPassword"),
  type: string,
  value: string,
  disabled: boolean,
  textError: string,
  placeholder: string,
}

export const dataInputsDisebledProfile: IDataInputsDisebledProfileConst[] = [
  {
    id: 6,
    heading: 'Телефон',
    name: 'phone',
    type: 'tel',
    value: '',
    disabled: true,
    textError: '',
    placeholder: 'Телефон',
  },
  {
    id: 5,
    heading: 'Имя в чате',
    name: 'display_name',
    type: 'text',
    value: '',
    disabled: true,
    textError: '',
    placeholder: 'Имя в чате',
  },
  {
    id: 4,
    heading: 'Фамилия',
    name: 'second_name',
    type: 'text',
    value: '',
    disabled: true,
    textError: '',
    placeholder: 'Фамилия',
  },
  {
    id: 3,
    heading: 'Имя',
    name: 'first_name',
    type: 'text',
    value: '',
    disabled: true,
    textError: '',
    placeholder: 'Имя',
  },
  {
    id: 2,
    heading: 'Логин',
    name: 'login',
    type: 'text',
    value: '',
    disabled: true,
    textError: '',
    placeholder: 'Логин',
  },
  {
    id: 1,
    heading: 'Почта',
    name: 'email',
    type: 'email',
    value: '',
    disabled: true,
    textError: '',
    placeholder: 'Почта',
  },
]

export const dataInputsFixProfile: IDataInputsDisebledProfileConst[] = [
  {
    id: 6,
    heading: 'Телефон',
    name: 'phone',
    type: 'tel',
    value: '',
    disabled: false,
    textError: '',
    placeholder: 'Телефон',
  },
  {
    id: 5,
    heading: 'Имя в чате',
    name: 'display_name',
    type: 'text',
    value: '',
    disabled: false,
    textError: '',
    placeholder: 'Имя в чате',
  },
  {
    id: 4,
    heading: 'Фамилия',
    name: 'second_name',
    type: 'text',
    value: '',
    disabled: false,
    textError: '',
    placeholder: 'Фамилия',
  },
  {
    id: 3,
    heading: 'Имя',
    name: 'first_name',
    type: 'text',
    value: '',
    disabled: false,
    textError: '',
    placeholder: 'Имя',
  },
  {
    id: 2,
    heading: 'Логин',
    name: 'login',
    type: 'text',
    value: '',
    disabled: false,
    textError: '',
    placeholder: 'Логин',
  },
  {
    id: 1,
    heading: 'Почта',
    name: 'email',
    type: 'email',
    value: '',
    disabled: false,
    textError: '',
    placeholder: 'Почта',
  },
]

export const dataInputsFixPassword: IDataInputsPasswordConst[] = [
  {
    id: 3,
    heading: 'Повторите новый пароль',
    name: 'repeatNewPassword',
    type: 'password',
    value: '',
    disabled: false,
    textError: '',
    placeholder: 'Повторите_новый_пароль',
  },
  {
    id: 2,
    heading: 'Новый пароль',
    name: 'newPassword',
    type: 'password',
    value: '',
    disabled: false,
    textError: '',
    placeholder: 'Новый_пароль',
  },
  {
    id: 1,
    heading: 'Старый пароль',
    name: 'oldPassword',
    type: 'password',
    value: '',
    disabled: false,
    textError: '',
    placeholder: 'Старый_пароль',
  },
]
