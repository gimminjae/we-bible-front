import { api } from "../hooks/useApi"

export const bibleInfos = [
  {
    bookCode: "zeroIndex",
    bookSeq: 0,
    bookName: {
      en: "zeroIndex",
      ko: "",
    },
    maxChapter: 0,
  },
  {
    bookCode: "genesis",
    bookSeq: 1,
    bookName: {
      en: "genesis",
      ko: "창세기",
    },
    maxChapter: 50,
  },
  {
    bookCode: "exodus",
    bookSeq: 2,
    bookName: {
      en: "exodus",
      ko: "출애굽기",
    },
    maxChapter: 40,
  },
  {
    bookCode: "leviticus",
    bookSeq: 3,
    bookName: {
      en: "leviticus",
      ko: "레위기",
    },
    maxChapter: 27,
  },
  {
    bookCode: "numbers",
    bookSeq: 4,
    bookName: {
      en: "numbers",
      ko: "민수기",
    },
    maxChapter: 36,
  },
  {
    bookCode: "deuteronomy",
    bookSeq: 5,
    bookName: {
      en: "deuteronomy",
      ko: "신명기",
    },
    maxChapter: 34,
  },
  {
    bookCode: "joshua",
    bookSeq: 6,
    bookName: {
      en: "joshua",
      ko: "여호수아",
    },
    maxChapter: 24,
  },
  {
    bookCode: "judges",
    bookSeq: 7,
    bookName: {
      en: "judges",
      ko: "사사기",
    },
    maxChapter: 21,
  },
  {
    bookCode: "ruth",
    bookSeq: 8,
    bookName: {
      en: "ruth",
      ko: "룻기",
    },
    maxChapter: 4,
  },
  {
    bookCode: "1samuel",
    bookSeq: 9,
    bookName: {
      en: "1 Samuel",
      ko: "사무엘상",
    },
    maxChapter: 31,
  },
  {
    bookCode: "2samuel",
    bookSeq: 10,
    bookName: {
      en: "2 Samuel",
      ko: "사무엘하",
    },
    maxChapter: 24,
  },
  {
    bookCode: "1kings",
    bookSeq: 11,
    bookName: {
      en: "1 Kings",
      ko: "열왕기상",
    },
    maxChapter: 22,
  },
  {
    bookCode: "2kings",
    bookSeq: 12,
    bookName: {
      en: "2 Kings",
      ko: "열왕기하",
    },
    maxChapter: 25,
  },
  {
    bookCode: "1chronicles",
    bookSeq: 13,
    bookName: {
      en: "1 Chronicles",
      ko: "역대상",
    },
    maxChapter: 29,
  },
  {
    bookCode: "2chronicles",
    bookSeq: 14,
    bookName: {
      en: "2 Chronicles",
      ko: "역대하",
    },
    maxChapter: 36,
  },
  {
    bookCode: "ezra",
    bookSeq: 15,
    bookName: {
      en: "ezra",
      ko: "에스라",
    },
    maxChapter: 10,
  },
  {
    bookCode: "nehemiah",
    bookSeq: 16,
    bookName: {
      en: "nehemiah",
      ko: "느헤미야",
    },
    maxChapter: 13,
  },
  {
    bookCode: "esther",
    bookSeq: 17,
    bookName: {
      en: "esther",
      ko: "에스더",
    },
    maxChapter: 10,
  },
  {
    bookCode: "job",
    bookSeq: 18,
    bookName: {
      en: "job",
      ko: "욥기",
    },
    maxChapter: 42,
  },
  {
    bookCode: "psalms",
    bookSeq: 19,
    bookName: {
      en: "psalms",
      ko: "시편",
    },
    maxChapter: 150,
  },
  {
    bookCode: "proverbs",
    bookSeq: 20,
    bookName: {
      en: "proverbs",
      ko: "잠언",
    },
    maxChapter: 31,
  },
  {
    bookCode: "ecclesiastes",
    bookSeq: 21,
    bookName: {
      en: "ecclesiastes",
      ko: "전도서",
    },
    maxChapter: 12,
  },
  {
    bookCode: "baby",
    bookSeq: 22,
    bookName: {
      en: "song of songs",
      ko: "아가서",
    },
    maxChapter: 8,
  },
  {
    bookCode: "isaiah",
    bookSeq: 23,
    bookName: {
      en: "isaiah",
      ko: "이사야",
    },
    maxChapter: 66,
  },
  {
    bookCode: "jeremiah",
    bookSeq: 24,
    bookName: {
      en: "jeremiah",
      ko: "예레미야",
    },
    maxChapter: 52,
  },
  {
    bookCode: "lamentations",
    bookSeq: 25,
    bookName: {
      en: "lamentations",
      ko: "예레미야 애가",
    },
    maxChapter: 5,
  },
  {
    bookCode: "ezekiel",
    bookSeq: 26,
    bookName: {
      en: "ezekiel",
      ko: "에스겔",
    },
    maxChapter: 48,
  },
  {
    bookCode: "daniel",
    bookSeq: 27,
    bookName: {
      en: "daniel",
      ko: "다니엘",
    },
    maxChapter: 12,
  },
  {
    bookCode: "hosea",
    bookSeq: 28,
    bookName: {
      en: "hosea",
      ko: "호세아",
    },
    maxChapter: 14,
  },
  {
    bookCode: "joel",
    bookSeq: 29,
    bookName: {
      en: "joel",
      ko: "요엘",
    },
    maxChapter: 3,
  },
  {
    bookCode: "amos",
    bookSeq: 30,
    bookName: {
      en: "amos",
      ko: "아모스",
    },
    maxChapter: 9,
  },
  {
    bookCode: "obadiah",
    bookSeq: 31,
    bookName: {
      en: "obadiah",
      ko: "오바댜",
    },
    maxChapter: 1,
  },
  {
    bookCode: "jonah",
    bookSeq: 32,
    bookName: {
      en: "jonah",
      ko: "요나",
    },
    maxChapter: 4,
  },
  {
    bookCode: "micah",
    bookSeq: 33,
    bookName: {
      en: "micah",
      ko: "미가",
    },
    maxChapter: 7,
  },
  {
    bookCode: "nahum",
    bookSeq: 34,
    bookName: {
      en: "nahum",
      ko: "나훔",
    },
    maxChapter: 3,
  },
  {
    bookCode: "habakkuk",
    bookSeq: 35,
    bookName: {
      en: "habakkuk",
      ko: "하박국",
    },
    maxChapter: 3,
  },
  {
    bookCode: "zephaniah",
    bookSeq: 36,
    bookName: {
      en: "zephaniah",
      ko: "스바냐",
    },
    maxChapter: 3,
  },
  {
    bookCode: "haggai",
    bookSeq: 37,
    bookName: {
      en: "haggai",
      ko: "학개",
    },
    maxChapter: 2,
  },
  {
    bookCode: "zechariah",
    bookSeq: 38,
    bookName: {
      en: "zechariah",
      ko: "스가랴",
    },
    maxChapter: 14,
  },
  {
    bookCode: "malachi",
    bookSeq: 39,
    bookName: {
      en: "malachi",
      ko: "말라기",
    },
    maxChapter: 4,
  },
  {
    bookCode: "matthew",
    bookSeq: 40,
    bookName: {
      en: "matthew",
      ko: "마태복음",
    },
    maxChapter: 28,
  },
  {
    bookCode: "mark",
    bookSeq: 41,
    bookName: {
      en: "mark",
      ko: "마가복음",
    },
    maxChapter: 16,
  },
  {
    bookCode: "luke",
    bookSeq: 42,
    bookName: {
      en: "luke",
      ko: "누가복음",
    },
    maxChapter: 24,
  },
  {
    bookCode: "john",
    bookSeq: 43,
    bookName: {
      en: "john",
      ko: "요한복음",
    },
    maxChapter: 21,
  },
  {
    bookCode: "acts",
    bookSeq: 44,
    bookName: {
      en: "acts",
      ko: "사도행전",
    },
    maxChapter: 28,
  },
  {
    bookCode: "romans",
    bookSeq: 45,
    bookName: {
      en: "romans",
      ko: "로마서",
    },
    maxChapter: 16,
  },
  {
    bookCode: "1corinthians",
    bookSeq: 46,
    bookName: {
      en: "1 Corinthians",
      ko: "고린도전서",
    },
    maxChapter: 16,
  },
  {
    bookCode: "2corinthians",
    bookSeq: 47,
    bookName: {
      en: "2 Corinthians",
      ko: "고린도후서",
    },
    maxChapter: 13,
  },
  {
    bookCode: "galatians",
    bookSeq: 48,
    bookName: {
      en: "galatians",
      ko: "갈라디아서",
    },
    maxChapter: 6,
  },
  {
    bookCode: "ephesians",
    bookSeq: 49,
    bookName: {
      en: "ephesians",
      ko: "에베소서",
    },
    maxChapter: 6,
  },
  {
    bookCode: "philippians",
    bookSeq: 50,
    bookName: {
      en: "philippians",
      ko: "빌립보서",
    },
    maxChapter: 4,
  },
  {
    bookCode: "colossians",
    bookSeq: 51,
    bookName: {
      en: "colossians",
      ko: "골로새서",
    },
    maxChapter: 4,
  },
  {
    bookCode: "1thessalonians",
    bookSeq: 52,
    bookName: {
      en: "1 Thessalonians",
      ko: "데살로니가전서",
    },
    maxChapter: 5,
  },
  {
    bookCode: "2thessalonians",
    bookSeq: 53,
    bookName: {
      en: "2 Thessalonians",
      ko: "데살로니가후서",
    },
    maxChapter: 3,
  },
  {
    bookCode: "1timothy",
    bookSeq: 54,
    bookName: {
      en: "1 Timothy",
      ko: "디모데전서",
    },
    maxChapter: 6,
  },
  {
    bookCode: "2timothy",
    bookSeq: 55,
    bookName: {
      en: "2 Timothy",
      ko: "디모데후서",
    },
    maxChapter: 4,
  },
  {
    bookCode: "titus",
    bookSeq: 56,
    bookName: {
      en: "titus",
      ko: "디도서",
    },
    maxChapter: 3,
  },
  {
    bookCode: "philemon",
    bookSeq: 57,
    bookName: {
      en: "philemon",
      ko: "빌레몬서",
    },
    maxChapter: 1,
  },
  {
    bookCode: "hebrews",
    bookSeq: 58,
    bookName: {
      en: "hebrews",
      ko: "히브리서",
    },
    maxChapter: 13,
  },
  {
    bookCode: "james",
    bookSeq: 59,
    bookName: {
      en: "james",
      ko: "야고보서",
    },
    maxChapter: 5,
  },
  {
    bookCode: "1peter",
    bookSeq: 60,
    bookName: {
      en: "1 Peter",
      ko: "베드로전서",
    },
    maxChapter: 5,
  },
  {
    bookCode: "2peter",
    bookSeq: 61,
    bookName: {
      en: "2 Peter",
      ko: "베드로후서",
    },
    maxChapter: 3,
  },
  {
    bookCode: "1john",
    bookSeq: 62,
    bookName: {
      en: "1 John",
      ko: "요한일서",
    },
    maxChapter: 5,
  },
  {
    bookCode: "2john",
    bookSeq: 63,
    bookName: {
      en: "2 John",
      ko: "요한이서",
    },
    maxChapter: 1,
  },
  {
    bookCode: "3john",
    bookSeq: 64,
    bookName: {
      en: "3 John",
      ko: "요한삼서",
    },
    maxChapter: 1,
  },
  {
    bookCode: "jude",
    bookSeq: 65,
    bookName: {
      en: "jude",
      ko: "유다서",
    },
    maxChapter: 1,
  },
  {
    bookCode: "revelation",
    bookSeq: 66,
    bookName: {
      en: "revelation",
      ko: "요한계시록",
    },
    maxChapter: 22,
  },
]

export const kjvBibleInfo = [
  { bookName: "zeroIndex", bookSeq: 0 },
  { bookName: "genesis", bookSeq: 1 },
  { bookName: "exodus", bookSeq: 2 },
  { bookName: "leviticus", bookSeq: 3 },
  { bookName: "numbers", bookSeq: 4 },
  { bookName: "deuteronomy", bookSeq: 5 },
  { bookName: "joshua", bookSeq: 6 },
  { bookName: "judges", bookSeq: 7 },
  { bookName: "ruth", bookSeq: 8 },
  { bookName: "1samuel", bookSeq: 9 },
  { bookName: "2samuel", bookSeq: 10 },
  { bookName: "1kings", bookSeq: 11 },
  { bookName: "2kings", bookSeq: 12 },
  { bookName: "1chronicles", bookSeq: 13 },
  { bookName: "2chronicles", bookSeq: 14 },
  { bookName: "ezra", bookSeq: 15 },
  { bookName: "nehemiah", bookSeq: 16 },
  { bookName: "esther", bookSeq: 17 },
  { bookName: "job", bookSeq: 18 },
  { bookName: "psalms", bookSeq: 19 },
  { bookName: "proverbs", bookSeq: 20 },
  { bookName: "ecclesiastes", bookSeq: 21 },
  { bookName: "songofsolomon", bookSeq: 22 },
  { bookName: "isaiah", bookSeq: 23 },
  { bookName: "jeremiah", bookSeq: 24 },
  { bookName: "lamentations", bookSeq: 25 },
  { bookName: "ezekiel", bookSeq: 26 },
  { bookName: "daniel", bookSeq: 27 },
  { bookName: "hosea", bookSeq: 28 },
  { bookName: "joel", bookSeq: 29 },
  { bookName: "amos", bookSeq: 30 },
  { bookName: "obadiah", bookSeq: 31 },
  { bookName: "jonah", bookSeq: 32 },
  { bookName: "micah", bookSeq: 33 },
  { bookName: "nahum", bookSeq: 34 },
  { bookName: "habakkuk", bookSeq: 35 },
  { bookName: "zephaniah", bookSeq: 36 },
  { bookName: "haggai", bookSeq: 37 },
  { bookName: "zechariah", bookSeq: 38 },
  { bookName: "malachi", bookSeq: 39 },
  { bookName: "matthew", bookSeq: 40 },
  { bookName: "mark", bookSeq: 41 },
  { bookName: "luke", bookSeq: 42 },
  { bookName: "john", bookSeq: 43 },
  { bookName: "acts", bookSeq: 44 },
  { bookName: "romans", bookSeq: 45 },
  { bookName: "1corinthians", bookSeq: 46 },
  { bookName: "2corinthians", bookSeq: 47 },
  { bookName: "galatians", bookSeq: 48 },
  { bookName: "ephesians", bookSeq: 49 },
  { bookName: "philippians", bookSeq: 50 },
  { bookName: "colossians", bookSeq: 51 },
  { bookName: "1thessalonians", bookSeq: 52 },
  { bookName: "2thessalonians", bookSeq: 53 },
  { bookName: "1timothy", bookSeq: 54 },
  { bookName: "2timothy", bookSeq: 55 },
  { bookName: "titus", bookSeq: 56 },
  { bookName: "philemon", bookSeq: 57 },
  { bookName: "hebrews", bookSeq: 58 },
  { bookName: "james", bookSeq: 59 },
  { bookName: "1peter", bookSeq: 60 },
  { bookName: "2peter", bookSeq: 61 },
  { bookName: "1john", bookSeq: 62 },
  { bookName: "2john", bookSeq: 63 },
  { bookName: "3john", bookSeq: 64 },
  { bookName: "jude", bookSeq: 65 },
  { bookName: "revelation", bookSeq: 66 },
  { bookName: "1esdras", bookSeq: 67 },
  { bookName: "2esdras", bookSeq: 68 },
  { bookName: "tobit", bookSeq: 69 },
  { bookName: "judith", bookSeq: 70 },
  { bookName: "wisdom", bookSeq: 71 },
  { bookName: "ecclesiasticus", bookSeq: 72 },
  { bookName: "baruch", bookSeq: 73 },
  { bookName: "belandthedragon", bookSeq: 74 },
  { bookName: "manasseh", bookSeq: 75 },
  { bookName: "1maccabees", bookSeq: 76 },
  { bookName: "2maccabees", bookSeq: 77 },
  { bookName: "esther(greek)", bookSeq: 78 },
  { bookName: "songofthethree", bookSeq: 79 },
  { bookName: "susanna", bookSeq: 80 },
]

export const getBookName = (bookCode: string, lang: string) => {
  const bible: any = bibleInfos.find((info) => info.bookCode === bookCode)
  return bible?.bookName[lang] || ""
}
interface BibleInfo {
  bookCode: string
  chapter: number
  lang?: string
}
const bibleService = {
  async getBible(params: BibleInfo) {
    if (params.lang === "ko" || params.lang === null) {
      return api.get(
        `https://webible.s3.ap-northeast-2.amazonaws.com/bible/${params.bookCode}/${params.chapter}.json`
      )
    } else {
      return api.get(
        `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${params.bookCode}/chapters/${params.chapter}.json`
      )
    }
  },
}

export default bibleService
