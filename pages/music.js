import Layout from '../components/Layout';
import ReactPlayer from 'react-player';

const Music = () => {

    return (
        <div class="flex place-content-center">
        <ReactPlayer 
            height="100px"
            url="https://soundcloud.com/user-680027355/foreign-currencies"
        />
        </div>
    )
}

export default Music;