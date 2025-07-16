import * as React from "react";
const TikTokIcon = ({ width = 40, height = 40, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 60 60"
        width={width}
        height={height}
        {...props}
    >
        <path
            fill="#000"
            fillOpacity={0.3}
            d="M30.068 0h-.136C13.4 0 0 13.4 0 29.932v.136C0 46.6 13.4 60 29.932 60h.136C46.6 60 60 46.6 60 30.068v-.136C60 13.4 46.6 0 30.068 0"
        />
        <path
            fill="#fff"
            d="M44.503 21.706v5.665a14.897 14.897 0 0 1-7.847-3.176v11.45l-.023-.036q.023.342.023.692c0 5.686-4.626 10.315-10.315 10.315S16.026 41.987 16.026 36.3s4.627-10.317 10.315-10.317q.836 0 1.638.13v5.583a4.89 4.89 0 0 0-6.523 4.604 4.89 4.89 0 0 0 4.885 4.885 4.89 4.89 0 0 0 4.877-5.188v-22.25h5.661l.061 1.442c.038.943.374 1.85.96 2.592a10.7 10.7 0 0 0 3.129 2.694 10.8 10.8 0 0 0 3.474 1.234z"
        />
    </svg>
);
export default TikTokIcon;