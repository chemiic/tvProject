'use client'
import React, { useEffect, useState } from 'react';
import { Menu } from "@/components/Menu";
import { ShadowBox } from "@/shared/ShadowBox";
import { log } from 'console';

const PLAYLIST_ID = "PLY8oqmcCzyWzYKPWduMKXMpCmQCdECjSa";
const API_KEY = "ВАШ_API_КЛЮЧ"; // <-- Вставьте сюда свой ключ

type Video = {
  id: string;
  title: string;
  thumbnail: string;
};

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=${"PLY8oqmcCzyWzYKPWduMKXMpCmQCdECjSa"}&key=${"AIzaSyDw-bvqUgEXQ6H48ovBIYwAT6becuENUZg"}`
      );
      const data = await res.json();
        console.log(data)
      const vids = data.items.map((item: any) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
      }));
      setVideos(vids);
    }
    fetchVideos();
  }, []);
    console.log(videos)
  return (
    <div style={{ width: '900px', minHeight: '100vh' }} className="flex flex-col justify-center gap-2.5">
      <Menu />
      <ShadowBox>
        <p>
          Pushing the limits of media by creating content that stands out with a style that’s all our own.
          Whether it’s for artists, athletes, or brands, we capture high-impact visuals that help elevate your
          online presence and connect with your audience in a creative way.
        </p>
      </ShadowBox>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {videos.map(video => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition"
          >
            <img src={video.thumbnail} alt={video.title} className="w-full" />
            <div className="p-2">
              <h3 className="text-sm font-semibold">{video.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
