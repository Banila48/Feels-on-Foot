import { useState } from "react";
import YouTube from "react-youtube";
import ReactAudioPlayer from "react-audio-player";
import Loader from '../Loader/Loader';
import PlayerService from './Player.service';
import './Player.css';
import Button from './Button.js';

const Player = () => {
    const ps = new PlayerService();
    const [selectedCity, setSelectedCity] = useState(ps.cities[0]);
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
                src="https://github.com/Banila48/Feels-on-Wheels/raw/master/src/components/Player/%E9%9D%9E%E8%AF%9A%E5%8B%BF%E6%89%B0%20vibes.ogg"
                autoPlay
                volume
                loop
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

            <Button
              text={isNoiseMuted ? 'Unmute Songs' : 'Mute Songs'}
              onClick={() => setIsNoiseMuted(!isNoiseMuted)}
            />

            {isOverlayVisible && (<Loader />)}
        </>
    );
}

export default Player;
