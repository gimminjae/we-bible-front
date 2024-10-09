const makeCopyText = (contentList: any[]) => {
  if (!contentList?.length) return
  contentList.sort((a: any, b: any) => a.verse - b.verse)
  const verses = contentList.map((content: any) => content.content).join("\n\n")
  const bookName = contentList[0].bookName
  const chapterVerse = `${contentList[0].chapter}:${contentList
    .map((content: any) => content.verse)
    .join(",")}`
  return `${verses}\n${bookName} ${chapterVerse}`
  // return contentList
  //   ?.map(
  //     (val: any) =>
  //       `${val.content}\n${val.bookName} ${val.chapter}:${val.verse}`
  //   )
  //   .join("\n\n")
}

export { makeCopyText }
