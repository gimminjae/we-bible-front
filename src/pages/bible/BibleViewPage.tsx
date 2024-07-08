import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import bibleService from "../../api/bible";

function BibleViewPage() {
  const { callApi: getBible } = useApi({
    api: bibleService.getBible,
    onSuccess: async (data: any) => {
      console.log("data>>", data);
      setBibles(data);
    },
    onError: (error: any) => console.log(error),
    onComplete: () => console.log("complete"),
  });

  const [bibles, setBibles] = useState<any>();

  useEffect(() => {
    getBible({ book: 1, chapter: 1, locale: "ko" });
  }, []);
  return (
    <>
      <div>bible view page</div>
    </>
  );
}

export default BibleViewPage;
