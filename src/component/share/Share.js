import "./Share.css";
import { PermMedia,Label,Room,EmojiEmotions } from "@mui/icons-material";

function Share() {
  return (
    <div className="share">
      <div className="shareWraper">
        <div className="shareTop">
         < img className="shareProfileImg" src="/assest/person/1.jpg" alt=""/>
          <input
            placeholder="what's in your mind safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato"className="ShareIcon" />
              <span className="shareOptionText">Photo or video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="ShareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green"className="ShareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod"className="ShareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
