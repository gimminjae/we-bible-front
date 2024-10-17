import { Like } from "../domain/like/like"

const likeService = {
  getLikesByMemberId: (id?: string) => {
    const likeDatas: Like[] = [
      {
        id: "1",
        createDateTime: "2024-09-14 09:00:00",
        bible: {
          bookCode: "genesis",
          chapter: 1,
          verse: 1,
          content: "태초에.....",
        },
      },
      {
        id: "2",
        createDateTime: "2024-10-14 09:00:00",
        bible: {
          bookCode: "genesis",
          chapter: 1,
          verse: 2,
          content: "빛이 있으라 하시매.....",
        },
      },
    ]
    return likeDatas
    // if (id) {

    // } else {

    // }
  },
}
export default likeService
