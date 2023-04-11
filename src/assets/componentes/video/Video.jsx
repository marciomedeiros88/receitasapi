import './index.scss'
function Video () {

    return(
        <div className="video">
            
        <video autoplay controls loop muted >
            <source src="https://marciomedeirosdesign.com.br/nucleoweb/receitasapi/imgs/video_home.mp4" type="video/mp4"></source>
        </video>
        </div>
    )
}
export default Video