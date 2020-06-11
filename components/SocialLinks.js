import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { Icon, Label } from "semantic-ui-react";

export const mainPage = "https://humanality.net";

// TODO add something to indicate these are "share" links as opposed to
// the social pages for the service itself

export function SocialLinks({ vertical = false, url, ...props }) {
  const [copied, setCopied] = React.useState(false);
  const shareURL = url || mainPage;
  return (
    <div {...props}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: vertical ? "column" : "row",
          maxWidth: `${32 * 7}px`,
          margin: "auto",
        }}
      >
        <RedditShareButton url={shareURL}>
          <RedditIcon size={32} round />
        </RedditShareButton>
        <FacebookShareButton url={shareURL}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareURL}
          title="Humanality - Free Personality Test"
          hashtags={["personality", "personality-test"]}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <EmailShareButton url={shareURL}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <CopyToClipboard
          text={shareURL}
          onCopy={() => {
            setTimeout(() => setCopied(false), 2000);
            setCopied(true);
          }}
        >
          <div style={{ position: "relative" }}>
            <Icon
              circular
              name="linkify"
              color="red"
              inverted
              fitted
              style={{
                width: "31px!important",
                height: "31px!important",
                boxShadow: "none",
                cursor: "pointer",
              }}
            />
            <Label
              pointing
              style={{
                position: "absolute",
                transform: "translateX(-75%)",
                top: "75%",
                opacity: copied ? 1 : 0,
                transition: "opacity 0.5s",
                zIndex: 100,
              }}
            >
              Copied!
            </Label>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default SocialLinks;
