"use client";

import { useEffect } from "react";

const BiblePlaces = ["2 Corinthians 5:17"];

const apiUrl = "https://open-bible-api.vercel.app";

const fetchVerse = async (BiblePlace: string) => {
  const [BookAndChapter, verseNumber] = BiblePlace.split(":");
  for (let i = BookAndChapter.length; i > 0; i--) {
    const place = BookAndChapter[i];
    console.log(place);
  }

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
