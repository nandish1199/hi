import React, { useRef } from "react";
import "./Video.css";
import { Tab, Tabs, Accordion } from "react-bootstrap";
// import YouTube from "react-youtube";
// var getYouTubeID = require("get-youtube-id");

const Video = () => {
  const playlist = useRef(null);
  const showplaylistbtn = useRef(null);
  const hideplaylistbtn = useRef(null);
  const showPlaylist = () => {
    playlist.current.style.display = "flex";
    hideplaylistbtn.current.style.display = "flex";
    showplaylistbtn.current.style.display = "none";
    hideplaylistbtn.current.style.background = "#E1E8ED";
    console.log(playlist.current);
  };
  const hidePlaylist = () => {
    playlist.current.style.display = "none";
    hideplaylistbtn.current.style.display = "none";
    showplaylistbtn.current.style.display = "flex";
    console.log(playlist.current);
  };

  return (
    <div className="maincont">
      <div className="iframeplaylist">
        <div className="iframetabs">
          <iframe
            src="https://www.youtube.com/embed/yviJikU4gwk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            controls
          ></iframe>
          <button
            className="playlistbtn"
            onClick={showPlaylist}
            ref={showplaylistbtn}
          >
            <span>Playlist </span>
            <i class="fas fa-caret-down"></i>
          </button>
          <button
            className="playlistbtn playlistbtnhide"
            onClick={hidePlaylist}
            ref={hideplaylistbtn}
          >
            <span>Playlist </span>
            <i class="fas fa-sort-up"></i>
          </button>
          <div className="tabs">
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
              color="primary"
            >
              <Tab eventKey="home" title="Home">
                <h1>Content will be added soon</h1>
                <p>
                  10 Yoga Poses You Need to Know The building blocks of yoga are
                  poses. These are good ones to learn as you build a regular
                  yoga practice. These 10 poses are a complete yoga workout.
                  Move slowly through each pose, remembering to breathe as you
                  move. Pause after any pose you find challenging, especially if
                  you are short of breath, and start again when your breathing
                  returns to normal. The idea is to hold each pose for a few,
                  slow breaths before moving on to the next one. Child's Pose
                  This calming pose is a good default pause position. You can
                  use child’s pose to rest and refocus before continuing to your
                  next pose. It gently stretches your lower back, hips, thighs,
                  knees and ankles and relaxes your spine, shoulders and neck.
                  Do it: When you want to get a nice gentle stretch through your
                  neck spine and hips. Skip it: If you have knee injuries or
                  ankle problems. Avoid also if you have high blood pressure or
                  are pregnant. Modify: You can rest your head on a cushion or
                  block. You can place a rolled towel under your ankles if they
                  are uncomfortable. Be mindful: Focus on relaxing the muscles
                  of the spine and lower back as you breathe. Child’s Pose This
                  should be your go-to pose whenever you need to rest for a
                </p>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <h1>Content will be added soon</h1>
              </Tab>
              <Tab eventKey="contact" title="Contact">
                <h1>Content will be added soon</h1>
              </Tab>
            </Tabs>
          </div>
        </div>

        <div className="playlist" ref={playlist}>
          <ul>
            <li>
              <a>
                <h1>playlist top</h1>
              </a>
              <h1>
                <i class="fas fa-caret-down"></i>
              </h1>
            </li>
            <li>
              <a href="#" className="playlistlink">
                <span>
                  <i class="far fa-play-circle"></i>
                </span>
                <h3>hello this is yoga and welcome to the yoga tutorial</h3>
              </a>
            </li>
            <li>
              <a href="#" className="playlistlink">
                <span>
                  <i class="far fa-play-circle"></i>
                </span>
                <h3>hello this is yoga and welcome to the yoga tutorial</h3>
              </a>
            </li>
            <li>
              <a href="#" className="playlistlink">
                <span>
                  <i class="far fa-play-circle"></i>
                </span>
                <h3>hello this is yoga and welcome to the yoga tutorial</h3>
              </a>
            </li>
            <li>
              <a href="#" className="playlistlink">
                <span>
                  <i class="far fa-play-circle"></i>
                </span>
                <h3>hello this is yoga and welcome to the yoga tutorial</h3>
              </a>
            </li>
            <li>
              <a href="#" className="playlistlink">
                <span>
                  <i class="far fa-play-circle"></i>
                </span>
                <h3>hello this is yoga and welcome to the yoga tutorial</h3>
              </a>
            </li>
            <li>
              <a href="#" className="playlistlink">
                <span>
                  <i class="far fa-play-circle"></i>
                </span>
                <h3>hello this is yoga and welcome to the yoga tutorial</h3>
              </a>
            </li>
            <li>
              <a href="#" className="playlistlink">
                <span>
                  <i class="far fa-play-circle"></i>
                </span>
                <h3>hello this is yoga and welcome to the yoga tutorial</h3>
              </a>
            </li>
            <li>
              <a href="#" className="playlistlink">
                <span>
                  <i class="far fa-play-circle"></i>
                </span>
                <h3>hello this is yoga and welcome to the yoga tutorial</h3>
              </a>
            </li>
            <li>
              <a href="#" className="playlistlink">
                <span>
                  <i class="far fa-play-circle"></i>
                </span>
                <h3>hello this is yoga and welcome to the yoga tutorial</h3>
              </a>
            </li>
            <li>
              <a href="#" className="playlistlink">
                <span>
                  <i class="far fa-play-circle"></i>
                </span>
                <h3>hello this is yoga and welcome to the yoga tutorial</h3>
              </a>
            </li>
            <li>
              <a href="#" className="playlistlink">
                <span>
                  <i class="far fa-play-circle"></i>
                </span>
                <h3>hello this is yoga and welcome to the yoga tutorial</h3>
              </a>
            </li>
            <li>
              <a href="#" className="playlistlink">
                <span>
                  <i class="far fa-play-circle"></i>
                </span>
                <h3>hello this is yoga and welcome to the yoga tutorial</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Video;
