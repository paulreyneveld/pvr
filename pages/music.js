import Layout from '../components/Layout';
import ReactPlayer from 'react-player';

const Music = () => {

    return (
        <div class="flex place-content-center">
        <ReactPlayer 
            height="150px"
            url="https://soundcloud.com/user-680027355/walk-breathe-look"
        />
        <ReactPlayer 
            height="150px"
            url="https://soundcloud.com/user-680027355/underneath-the-sheets-as-lullaby"
        />
        <ReactPlayer 
            height="150px"
            url="https://soundcloud.com/user-559390371/giacobinids"
        />
        <ReactPlayer 
            height="150px"
            url="https://soundcloud.com/user-680027355/foreign-currencies"
        />
        </div>
    )
}

export default Music;