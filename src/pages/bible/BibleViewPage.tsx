import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import bibleService from "../../api/bible";
import Button from "../../components/Button";

function BibleViewPage() {
  const { callApi: getBible } = useApi({
    api: bibleService.getBible,
    onSuccess: async (data: any) => {
      console.log("data: ", data);
      setBibles(
        data.data
          ? data.data.map((i: any) => ({
              bookName: i.book,
              content: i.text,
              verse: i.verse,
            }))
          : data
      );
    },
    onError: (error: any) => console.log(error),
    onComplete: () => console.log("complete"),
  });

  const [bibles, setBibles] = useState<any[]>();

  useEffect(() => {
    // getBible({ book: 1, chapter: 1, locale: "ko" });
    // getBible({ book: 1, chapter: 1, locale: "en" });
  }, []);
  return (
    <>
      <div>bible view page</div>
      <div className="flex gap-3">
        <Button
          type={"Solid"}
          size={"Default"}
          color={"blue"}
          block={"block"}
          shape={"not-round"}
          icon={""}
          disabled={false}
          text={"en"}
          onClick={() => getBible({ book: 1, chapter: 1, locale: "en" })}
        />
        <Button
          type={"Solid"}
          size={"Default"}
          color={"blue"}
          block={"block"}
          shape={"not-round"}
          icon={""}
          disabled={false}
          text={"ko"}
          onClick={() => getBible({ book: 1, chapter: 1, locale: "ko" })}
        />
      </div>
      <ul>
        {bibles &&
          bibles.length &&
          bibles.map((bible: any) => (
            <li>
              {bible.verse} {bible.content}
            </li>
          ))}
      </ul>
    </>
  );
}

export default BibleViewPage;
