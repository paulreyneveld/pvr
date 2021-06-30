import { useRef } from 'react';

const TestPlayer = () => {

    const player = useRef();
    const playSong = () => {
        player.current.src = '/public/dw37.mp3';
        player.play();
    }
    return (
        <div className="songRow" onClick={() => playSong()}>
            <audio ref={player} />
            <div className="songRow__info">
                <h1 class="text-white">Whatever</h1>
            </div>
        </div>
    )
};

export default TestPlayer;