import './index.scss'
import TypeIt from "typeit-react";

function Video () {


    return(
        <div className="video">
        <div className='textobanner'>
        <TypeIt
        options={{
            strings: ["Diversas receitas para você aproveitar_"],
            speed: 150,
            waitUntilVisible: true,
            loop: true,
        }}
        style={{ fontSize: "80px", color:'white', fontFamily: 'IBM Plex Mono', lineHeight:'1'}}
        />
        </div>
        {/* <video autoplay controls loop muted >
            <source src="https://marciomedeirosdesign.com.br/nucleoweb/receitasapi/imgs/video_home.mp4" type="video/mp4"></source>
        </video> */}
        </div>
    )
}
export default Video