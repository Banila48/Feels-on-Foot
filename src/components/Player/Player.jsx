import { useState } from "react";
import YouTube from "react-youtube";
import ReactAudioPlayer from "react-audio-player";
import Loader from '../Loader/Loader';
import PlayerService from './Player.service';
import './Player.css';

const Player = () => {
    const ps = new PlayerService();
    const [selectedCity, setSelectedCity] = useState(ps.cities[1]);
    const [isNoiseMuted, setIsNoiseMuted] = useState(false);
    const [isOverlayVisible, setOverlayVisible] = useState(true)

    ps.setData(setSelectedCity, setOverlayVisible, selectedCity)

    return (
        <>
            <div style={{
                width: 640,
                height: 360,
            }}>
                <YouTube
                    height="360"
                    width="640"
                    containerClassName="youtube-wrap"
                    id="yt-player"
                    videoId={ps.links[selectedCity]}
                    opts={ps.opts}
                    onPlay={() => ps.onPlay()}
                    onEnd={() => ps.onEnd()}
                    onPlaybackRateChange={() => { }}
                />
            </div>
            <ReactAudioPlayer
                style={{ display: 'none' }}
                src="https://mp3cake.com/files/1a/1af/taylor-swift-love-story-taylors-version-mp3cake.com.mp3"
                autoPlay
                controls
                muted={isNoiseMuted}
            />
            <select
                style={{ position: "absolute", top: 20, right: 50}}
                value={selectedCity}
                name="city"
                onChange={(event) => ps.cityChanged(event)}
            >
                {ps.cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                ))}
            </select>
            <button
                style={{ position: "absolute", top: 50, right: 50 }}
                onClick={() => setIsNoiseMuted(!isNoiseMuted)}
            >
                Mute Songs
            </button>
            {isOverlayVisible && (<Loader />)}
        </>
    );
}

export default Player;
