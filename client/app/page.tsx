"use client";

import { useEffect } from "react";

const BiblePlaces = ["2 Corinthians 5:17", "Romans 8:13", "Romans 12:14"];

const apiUrl = "https://open-bible-api.vercel.app";

const reverse = (data: string) => {
  return data.split("").reverse().join("");
};

const fetchVerse = async (BiblePlace: string) => {
  const [BookAndChapter, verseNumber] = BiblePlace.split(":");
  let chapter: string = "";
  for (let i = BookAndChapter.length - 1; i > 0; i--) {
    const place = BookAndChapter[i];
    if (place === " ") break;
    chapter += place;
  }
  chapter = reverse(chapter);
  const chapterNumber: number = Number.parseInt(chapter);
  console.log(chapterNumber);

  // const response = await fetch(`${apiUrl}/`);
};

export default function IndexPage() {
  useEffect(() => {
    for (const place of BiblePlaces) {
      fetchVerse(place);
    }
  }, []);

  return (
    <div className="min-h-screen bg-sky-50">
      <div className="p-3 max-w-md mx-auto w-full"></div>
    </div>
  );
}
