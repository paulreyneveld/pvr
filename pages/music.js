import Layout from '../components/Layout';
import ReactPlayer from 'react-player';

const Music = () => {


    return (
        <div class="flex place-content-center">
        <p class="text-white block">Old Track</p>
        <ReactPlayer 
            url="https://soundcloud.com/user-680027355/foreign-currencies"
        />
        </div>
    )
}

export default Music;