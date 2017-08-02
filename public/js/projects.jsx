var Thumbnail = React.createClass({
    render() {
        var src = 'sources/' + this.props.title + '/' + this.props.num + '.png';
        return(<img onClick={ ()=>this.props.onThumbnailClick(src) } src={ src }></img>)
    }
});

class Language extends React.Component {
   
    render() {
        var dot = null;
        if (this.props.includeDot){ dot = ' · ' }
        return <span className="language">{dot}{this.props.name}</span>
    }
    
}

class Header extends React.Component {

    render(){
        var button = null;
        if (this.props.includeDetail){
            button = <DetailButton include={this.props.includeDetail} showing={this.props.detailShowing} toggleDetail={this.props.toggleDetail}></DetailButton>;
        } 

        return(
            <div className="project-title-container col-sm-12">
                {button}
                <div className="project-title">
                    {this.props.title}
                </div>
                <div className="project-caption">
                    {this.props.date}
                </div>
            </div>
        )
    }
}

class DetailButton extends React.Component {

    render(){
        var text = 'Show Detail';
        if (this.props.showing){ text = 'Hide Detail' }

        return(
            <div onClick={ ()=>this.props.toggleDetail()} className="project-button">
                <span>{text}</span>
            </div>
        )
    }

}

class ProjectDetail extends React.Component {
    
    render(){
        return(
            <div className="project-detail row">
                <div className="col-md-5 col-xs-12">
                    <ul>
                        {this.props.bullets.map((bullet, i) => {
                                return <li key={i}>{bullet}</li>
                            })}
                    </ul>
                    <h3 className="padd-10"><a target="_blank" href={this.props.linkRef}>{this.props.linkTitle}</a></h3>
                </div>
                <div className="col-md-7 col-xs-12">
                    <div className="gallery">
                        <div className="preview">
                            <img src={this.props.currentPreviewSrc}></img>
                        </div>
                        <div className="thumbnails padd-10">
                            {this.props.thumbnails.map((thumbnail, i) => {
                                return <Thumbnail key={i} onThumbnailClick={this.props.thumbnailClick} title={thumbnail.title} num={thumbnail.num}></Thumbnail>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

var Project = React.createClass({

    getInitialState() {
        var firstPreviewSrc = 'sources/' + this.props.mainPhotoDir + '/1.png';
        return {
            currentPreviewSrc: firstPreviewSrc,
            detailShowing: false
        }
    },

    thumbnailClick(src) {
        this.setState({currentPreviewSrc: src});
    },

    toggleDetail(){
        this.setState({detailShowing: !this.state.detailShowing});
    },

    render() { 
        var detail = null;
        if (this.props.includeDetail && this.state.detailShowing){
            detail = <ProjectDetail linkRef={this.props.detailLinkHref} linkTitle={this.props.detailLinkTitle} bullets={this.props.detailBullets} thumbnails={this.props.thumbnails} thumbnailClick={this.thumbnailClick} currentPreviewSrc={this.state.currentPreviewSrc} detail={this.props.detail}></ProjectDetail>
        }

        return (
            <div id={this.props.id} className="project-item row">
                <Header title={this.props.title} date={this.props.date} includeDetail={this.props.includeDetail} toggleDetail={this.toggleDetail} detailShowing={this.state.detailShowing}></Header>
                <div className="row">
                    <div className="col-sm-5">
                        <img className="project-main-img" src={'sources/' + this.props.mainPhotoDir + '/main.png'}></img>
                    </div>
                    <div className="languages col-sm-7">
                        {this.props.languages.map((language, i) => { return <Language key={i} name={language} includeDot={ (i != 0) }></Language>})}
                    </div>
                    <div className="padd-10-0 col-sm-7">
                        {this.props.description}
                    </div>
                </div>
                {detail}
            </div>
        )
    }
});

////////////////////////////////
//////// Build Content /////////
////////////////////////////////
//Project 1 - Pill Man
function project1() {
var projectDes = <span>Pill Man is my independent project for my Game Programming class in the Spring semester of 2017.
        Developed in Unity using C# scripting and basic 3D modeling with Blender. The concept of the game is to defend the Heart from 
        invading germs and enemies as a pill capsule. It's a combination of a wave based tower defense game and a shooter. The entire game 
        was developed independently over 4 months with the use of only a few free assets from the Unity Asset Store. Future plans for the 
        game include more levels, more enemies, alternate camera options, and music/sound.</span>
return <Project title="Pill Man" date="January 2017 - Present" mainPhotoDir="PillMan" thumbnails={getThumbnails('PillMan', 7)} 
                id='pillman-project' languages={['Unity', 'C#', 'Blender']} description={projectDes} includeDetail={true}
                detailLinkHref="https://youtu.be/z5sV-CLurKU" detailLinkTitle="Watch Current Walkthrough"
                detailBullets={["Defend the Heart against waves of enemies by shooting Pill Man's beads", 
                                   "Use the Brain to upgrade shot speed, shot damage, and fire rate",
                                  "Use the Brain to heal the Heart and Pill Man",
                                  "Build \"Antibody\" Towers to aid in defense",
                                  "Ice Tower that slows down a group of enemies",
                                  "Fire Tower that slightly hurts a group of enemies",
                                  "Bullet Tower that shoots one enemy at a time",
                                  "Track progress through Achievements"]} ></Project>;
}
//Project 2 - SongBook
function project2() {
var projectDes = <span>SongBook is a web application that I made initially as a project for my own song writing documentation. 
        I've been working on making it open to the public, but right now it is only on a private development server for my own use. 
        The application allows for the user to store lyrics, audio and video recordings for their songs. The songs can be organized into albums 
        and can be sorted in various ways. A majority of this project was for self use, practice and experimentation. 
        My goal is to redevelop and redesign it using Node and React.</span>

return <Project title="SongBook" date="December 2016 - Present" mainPhotoDir="SongBook" thumbnails={getThumbnails('SongBook', 4)}  
                id='songbook-project' languages={['PHP CodeIgniter', 'MySQL', 'AJAX', 'AWS']} description={projectDes}
                detailLinkHref="https://youtu.be/Xp8IhDtoz1M" detailLinkTitle="Watch Current Walkthrough" includeDetail={true}
                detailBullets={["User system for private documenation of songs", 
                                "Song storage with title, artist, progress indicator, lyrics and recordings",
                                "Album storage with title, album cover, progress indicator and song organization",
                                "SongBook color scheme customization",
                                "Public display of songs for sharing, feedback, and collaboration (In Progress)"]} ></Project>;
}
//Project 3 - LocalAventura
function project3(){
var projectDes = <span>LocalAventura is a web application that connects travelers with local tour guides throughout Latin America. 
        I worked on the project full-time for 6 months in collaboration with <a href='http://davoscript.com/' target='_blank'>DavoScript</a>. 
        I designed, developed and tested features on both the front and back end of the product. Some major feautures I implemented and designed 
        include the messaging system, notification system and quizzes. I worked as the only onsite developer for the company's 
        time participating in the 500 Startups program in Mexico City.</span>
return <Project title="LocalAventura" date="July 2016 - December 2016" mainPhotoDir="LocalAventura" thumbnails={getThumbnails('LocalAventura', 6)} 
                id='localaventura-project' languages={['PHP CodeIgniter', 'MySQL', 'JavaScript', 'AJAX']} description={projectDes} 
                detailLinkHref="https://localaventura.com" detailLinkTitle="View Live Site" includeDetail={true}  
                detailBullets={["User system for guides and travelers", 
                                "Messaging system between guides and travelers with filter of sensitive information",
                                "Booking/tour pages with email confirmations/requests",
                                "Quizzes to guide users to areas on the site that would interest them",
                                "Notification system for users when unread messages exist"]} ></Project>;
}
//Project 4 - DoDate
function project4(){
var projectDes = <span>DoDate is a web application made with PHP CodeIgniter framework. This was a freelance project completed over a couple weeks. The goal was
                to simply display a form for the user to fill out about a date they are planning in New York City. The form questions adapt based on earlier responses so that
                the correct detail can be collected based on what they are looking for. The answers are emailed to the admin of the site, who then puts together a date for 
                the user to go on. </span>
return <Project title="DoDate" date="November 2016" mainPhotoDir="DoDate" thumbnails={getThumbnails('DoDate', 3)} 
                id='dodate-project' languages={['PHP CodeIgniter', 'JavaScript']} description={projectDes} 
                detailLinkHref="https://localaventura.com" detailLinkTitle="View Live Site" includeDetail={true}  
                detailBullets={["Adapting form based on answers", 
                                "Email answers to admin for review to plan the user's date"]} ></Project>;
}
//Project 5 - DoDate
function project5(){
var projectDes = <span>This site was built and designed by myself. I have used it as a place for experimentation and to document my recent work. The current version was built using Node and React. The Projects page is using React to render 
        and manipulate the state of each of the project elements. The tree at the bottom of the page is generated using a p5.js written by myself. </span>
return <Project title="SamLucyk.com" date="2017" mainPhotoDir="SamLucyk" 
                id='samlucyk-project' languages={['Node', 'React', 'p5']} 
           description={projectDes}  includeDetail={false} ></Project>;
}

ReactDOM.render(<span>{project2()}{project3()}{project5()}{project1()}{project4()}</span>, document.getElementById("projects-content"));