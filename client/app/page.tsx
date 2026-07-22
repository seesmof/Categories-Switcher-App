"use client";

import { useEffect } from "react";

const BiblePlaces = ["2 Corinthians 5:17", "Romans 8:13", "Romans 12:14"];

const apiUrl = "https://open-bible-api.vercel.app";

const fetchVerse = async (BiblePlace: string) => {
  const [BookAndChapter, verseNumber] = BiblePlace.split(":");
  let chapter = "";
  for (let i = BookAndChapter.length - 1; i > 0; i--) {
    const place = BookAndChapter[i];
    if (place === " ") break;
    chapter += place;
  }
  console.log(chapter);

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
