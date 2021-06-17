import { useState } from "react";
import "./App.css";

const AudioControl = () => {
  const [muted, setMuted] = useState(true);
  return (
    <div
      className="justify-end items-center flex cursor-pointer pt-24"
      onClick={() => setMuted(!muted)}
    >
      {muted && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#ffffff"
          id="icon-mute-main-trailer"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4.34 2.93L2.93 4.34 7.29 8.7 7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06c1.34-.3 2.57-.92 3.61-1.75l2.05 2.05 1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l.88-.88L10 11.41v3.76zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76zm4.5 8c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z" />
        </svg>
      )}
      {!muted && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#ffffff"
          id="icon-unmute-main-trailer"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z" />
        </svg>
      )}
      <span className="text-2xl bg-gray-100 pr-8 pl-2 ml-4 opacity-40">+16</span>
    </div>
  );
};

const Navbar = () => (
  <div className="navbar p-4 w-full flex justify-between items-center sticky -mb-20">
    <h1 className="text-2xl font-bold uppercase text-red-500">Netflix</h1>
    <div className="navBarButtons opacity-80 flex">
      <button className="homeButton rounded-lg p-2 text-white font-bold">
        Home
      </button>
      <button className="tvShowsButton rounded-lg p-2 text-white">
        TV Shows
      </button>
      <button className="moviesButton rounded-lg p-2 text-white">Movies</button>
      <button className="myListButton rounded-lg p-2 text-white">
        My List
      </button>
    </div>
    <div className="righTopNavBarButtons flex justify-between items-center">
      <button className="icon-search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="white"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </button>
      <button className="bellIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="white"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
        </svg>
      </button>
      <select className="bg-gray-100 p-2 rounded-lg mr-4">
        <option>English</option>
        <option>Spanish</option>
      </select>
      <button className="bg-red-500 rounded-lg p-2 text-white">Sign Out</button>
    </div>
  </div>
);

const BillboardTitle = () => (
  <div className="max-w-md pt-72 px-12">
    <img
      className="title-logo mb-4"
      src="https://occ-0-5400-1740.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTFYnAI003fw6M2aaTFinaZF0ksI1JLiCnGSQ_5Jo9K6cNsubAayqQnknEFXpJGPRA0JPbOQ8UaQEh-kbFwDNlke17cyPFsvAcTs.webp?r=ca5"
      title="Billions"
      alt="Billions"
    />
    <h1 className="synopsis text-white mb-4">
      They are ruthless, implacable, and refuse to lose power. A colossal
      fortune is at stake, and no one is willing to give in.
    </h1>
    <button className="playButton bg-white rounded-lg mr-4 py-2 pl-2 pr-3">
      <div className="flex justify-center">
        <svg
          className="playIcon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
        </svg>
        <h1 className="text-black font-bold">Play</h1>
      </div>
    </button>
    <button className="moreInfoButton bg-gray-500 rounded-lg py-2 pl-2 pr-3">
      <div className="flex justify-center">
        <svg
          className="moreInfo"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#ffffff"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
        <h1 className="text-white opacity-70">More Info</h1>
      </div>
    </button>
  </div>
);

const MainTrailer = ({ children }) => (<div className="bg-main-trailer">
  {children}
</div>
);

function App() {
  return (
    <div className="min-h-screen min-w-full">
      <Navbar />
      <MainTrailer>
        <BillboardTitle />
        <AudioControl /> 
      </MainTrailer>
    </div>
  );
}

export default App;
