import Layout from '../components/Layout';
import ReactPlayer from 'react-player';

const Music = () => {

    return (
        
        <div class="grid grid-cols-1 gap-10 place-items-center">
        <div>
        <ReactPlayer 
            height="150px"
            url="https://soundcloud.com/user-680027355/walk-breathe-look"
        />
        </div>
        <div>
        <ReactPlayer 
            height="150px"
            url="https://soundcloud.com/user-680027355/underneath-the-sheets-as-lullaby"
        />
        </div>
        <div>
        <ReactPlayer 
            height="150px"
            url="https://soundcloud.com/user-559390371/giacobinids"
        />
        </div>
        <div>
        <ReactPlayer 
            height="150px"
            url="https://soundcloud.com/user-680027355/did-you-miss-me-too"
        />
        </div>
        </div>
        
    )
}

export default Music;