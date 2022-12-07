// components/Share.tsx
import React from "react"
import { useAmp } from "next/amp"
import { TwitterIcon, TwitterShareButton } from "react-share"

export const config = { amp: 'true' }
type Props = {
  text: string
  url: string
};

const Share: React.FunctionComponent<Props> = ({ text, url }) => {

  return (
    <div>
      <TwitterShareButton
        url={url}
        title={text}
        className="focus:outline-none"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
};

export default Share