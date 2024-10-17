import { Like } from "../domain/like/like"

const likeDatas: Like[] = [
  {
    id: "1",
    createDateTime: "2024-09-19 09:00:00",
    bible: {
      bookCode: "genesis",
      chapter: 1,
      verse: 1,
      content: "태초에 하나님이 천지를 창조하시니라",
    },
  },
  {
    id: "3",
    createDateTime: "2024-10-14 09:00:00",
    bible: {
      bookCode: "genesis",
      chapter: 2,
      verse: 3,
      content:
        "하나님이 일곱째 날을 복 주사 거룩하게 하셨으니 이는 하나님이 그 창조하시며 만드시던 모든 일을 마치시고 이 날에 안식하셨음이더라",
    },
  },
  {
    id: "2",
    createDateTime: "2024-10-13 09:10:00",
    bible: {
      bookCode: "genesis",
      chapter: 1,
      verse: 3,
      content: "하나님이 가라사대 빛이 있으라 하시매 빛이 있었고",
    },
  },
]

const likeService = {
  getLikesByMemberId: (id?: string) => {
    return likeDatas.sort((a: any, b: any) =>
      a?.createDateTime < b?.createDateTime ? 1 : -1
    )
    // if (id) {

    // } else {

    // }
  },

  getLikesByBookCodeAndChapterAndMemberId: (
    bookCode: string,
    chapter: number,
    memberId?: string
  ) => {
    return likeDatas?.filter(
      (like: Like) =>
        like?.bible?.bookCode === bookCode && like?.bible?.chapter === chapter
    )
    // if (id) {

    // } else {

    // }
  },
}
export default likeService
