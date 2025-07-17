'use client'
import React, { useEffect, useState } from 'react';
import { Menu } from "@/components/Menu";
import { ShadowBox } from "@/shared/ShadowBox";
import {videosData} from "@/app/videos/data";
import YoutubeLogoIcon from "@/shared/icons/youtubeLogo-icon";

const PLAYLIST_ID = "PLY8oqmcCzyWzYKPWduMKXMpCmQCdECjSa";
const API_KEY = "AIzaSyDw-bvqUgEXQ6H48ovBIYwAT6becuENUZg";

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  publishedAt: string;
  views: number;
};

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}`
      );
      const data = await res.json();
      const items = data.items.filter((item: any) => item.snippet?.thumbnails && item.snippet.title !== "Private video");
      const videoIds = items.map((item: any) => item.snippet.resourceId.videoId).join(",");
      let statsMap: Record<string, number> = {};
      try {
        const statsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${API_KEY}`
        );
        const statsData = await statsRes.json();
        statsData.items.forEach((item: any) => {
          statsMap[item.id] = Number(item.statistics.viewCount);
        });
      } catch (e) {
        items.forEach((item: any) => {
          statsMap[item.snippet.resourceId.videoId] = 0;
        });
      }
      const vids = items.map((item: any) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high?.url,
        channel: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
        views: statsMap[item.snippet.resourceId.videoId] || 0,
      }));
      setVideos(vids);
    }
    fetchVideos();
  }, []);

    // useEffect(() => {
    //     console.log(videosData)
    //     const vids = videosData.items
    //         .filter((item: any) =>
    //             item.snippet?.thumbnails &&
    //             Object.keys(item.snippet.thumbnails).length > 0 &&
    //             item.snippet.title !== "Private video"
    //         )
    //       .map((item: any) => ({
    //         id: item.snippet.resourceId.videoId,
    //         title: item.snippet.title,
    //         thumbnail: item.snippet.thumbnails.standard?.url,
    //         channel: item.snippet.channelTitle,
    //         publishedAt: item.snippet.publishedAt,
    //         // views: item.statistics?.viewCount // нет в данных, будет захардкожено
    //       }));
    //     setVideos(vids);
    // }, []);
    console.log(videos)
  return (
    <div style={{ width: '900px', minHeight: '100vh' }} className="flex flex-col gap-2.5 pt-[60px]">
      <Menu />
      <ShadowBox className='p-[0px] '>
        <div className={"flex justify-between items-center mb-8 font-medium gap-2"}>
            <YoutubeLogoIcon/>
            <p>YouTube playlist {videos.length} videos</p>
        </div>
        <div className="grid grid-cols-2 gap-4 pr-2.5 max-h-[500px] overflow-x-hidden overflow-y-auto custom-scroll">
          {videos.map(video => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden shadow-lg hover:scale-102 transition rounded-[10px]"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-sm font-semibold">{video.title}</h3>
                <div className="text-xs mt-1">
                  {video.channel} • {formatRelativeDate(video.publishedAt)} • {video.views}
                </div>
              </div>
            </a>
          ))}
        </div>
      </ShadowBox>
    </div>
  );
}

function formatRelativeDate(dateString: string) {
  const now = new Date();
  const date = new Date(dateString);
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)} months ago`;
  return `${Math.floor(diff / 31536000)} years ago`;
}
