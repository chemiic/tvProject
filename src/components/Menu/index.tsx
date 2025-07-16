import InstIcon from "@/shared/icons/inst-icon";
import TikTokIcon from "@/shared/icons/tiktok-icon";
import YoutubeIcon from "@/shared/icons/youtube-icon";
import React from "react";
import Link from "next/link";
import {ShadowBox} from "@/shared/ShadowBox";

export const Menu = ({ isVertical = false }: { isVertical?: boolean }) => {
    const containerClass = isVertical
        ? "flex flex-col justify-between gap-[20px]"
        : "flex flex-row items-center justify-between gap-[20px]";
    const navClass = isVertical
        ? "flex flex-col gap-[20px]"
        : "flex flex-row gap-[25px]";

    return (
        <ShadowBox>
            <div className={containerClass}>
                {/* Logo and Navigation */}
                <div className={"flex items-center"}>
                    <Link href="/">
                        <video
                            src="/logo.mp4"
                            className="h-12 w-auto"
                        />
                    </Link>
                </div>
                    <nav className={navClass}>
                        <Link
                            href={'/videos'}
                            className="block text-white text-2xl font-bold hover:text-gray-300 transition-colors"
                        >
                            VIDEOS
                        </Link>
                        <a
                            href={'/services'}
                            className="block text-white text-2xl font-bold hover:text-gray-300 transition-colors"
                        >
                            SERVICES
                        </a>
                        <a
                            href={'/shop'}
                            className="block text-white text-2xl font-bold hover:text-gray-300 transition-colors"
                        >
                            SHOP
                        </a>
                        <a
                            href={'/about'}
                            className="block text-white text-2xl font-bold hover:text-gray-300 transition-colors"
                        >
                            ABOUT
                        </a>
                    </nav>

                <div className={"flex flex-row gap-[5px]"}>
                    <a
                        href="#"
                    >
                        <InstIcon width={isVertical ? 60 : 40} height={isVertical ? 60 : 40}  />
                    </a>
                    <a
                        href="#"
                    >
                        <TikTokIcon width={isVertical ? 60 : 40} height={isVertical ? 60 : 40}  />
                    </a>
                    <a
                        href="#"
                    >
                        <YoutubeIcon width={isVertical ? 60 : 40} height={isVertical ? 60 : 40} />
                    </a>
                </div>
            </div>
        </ShadowBox>
    )
}