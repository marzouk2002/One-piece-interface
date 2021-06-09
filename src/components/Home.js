import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <>
            <main>
                <section className='welcome'>
                
                    <h3>Welcome to the</h3>
                    <h1>One piece World</h1>
                    <h4>Where anything and everything is about one piece </h4>
                    <div className="scroll">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-mouse" viewBox="0 0 16 16"><path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"/></svg>
                        <p>scroll to find out more</p>
                    </div>
                </section>
                <section className='container'>
                    <div className="card text-white bg-primary my-3">
                        <div className="card-body p-4 rounded-top" style={cardStyle}>
                                <h2>What is One Piece?</h2>
                                <img className="float-right ml-2" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg" alt='the cover art for the Japanese edition of Volume 61 for the manga series "One Piece."'/>
                                <p style={pStyle}>One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 1997, with its individual chapters compiled into 98 tankōbon volumes as of February 2021. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as "One Piece" in order to become the next King of the Pirates.
                                </p>
                                <p style={pStyle}>
                                The manga spawned a media franchise, having been adapted into a festival film produced by Production I.G, and an anime series produced by Toei Animation, which began broadcasting in Japan in 1999. Additionally, Toei has developed fourteen animated feature films, one OVA and thirteen television specials. Several companies have developed various types of merchandising and media, such as a trading card game and numerous video games. The manga series was licensed for an English language release in North America and the United Kingdom by Viz Media and in Australia by Madman Entertainment. The anime series was licensed by 4Kids Entertainment for an English-language release in North America in 2004, before the license was dropped and subsequently acquired by Funimation in 2007.
                                </p>
                        </div>
                        <div className="card-body p-4" >
                            <h2 className="ml-4">Story:</h2>
                            <p className="mx-2" style={pStyle}>The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the titular treasure and proclaim himself the King of the Pirates. In an effort to organize his own crew, the Straw Hat Pirates, Luffy rescues and befriends a swordsman named Roronoa Zoro, and they head off in search of the One Piece. They are joined in their journey by Nami, a navigator and thief; Usopp, a sniper and a pathological liar; and Vinsmoke Sanji, a womanizing chef. They acquire a ship named the Going Merry and engage in confrontations with notorious pirates of the East Blue. As Luffy and his crew set out on their adventures, others join the crew later in the series, including Tony Tony Chopper, a doctor and anthropomorphized reindeer; Nico Robin, an archaeologist and former assassin; Franky, a cyborg shipwright; Brook, a skeletal musician and swordsman; and Jimbei, a fish-man helmsman and former member of the Seven Warlords of the Sea. Once the Going Merry becomes damaged beyond repair, the Straw Hat Pirates acquire a new ship named the Thousand Sunny. Together, they encounter other pirates, bounty hunters, criminal organizations, revolutionaries, secret agents and soldiers of the corrupt World Government, and various other friends and foes, as they sail the seas in pursuit of their dreams.</p>
                        </div>
                        <div className="card-body p-4 rounded-bottom" style={cardStyle}>
                                <img className="float-left mr-3" src="https://anniversaire-celebrite.com/upload/250x333/eiichiro-oda-250.jpg" alt="Eiichiro Oda's face"/>
                                <h2 className="ml-4">Author:</h2>
                                <p style={pStyle}>Eiichiro Oda (Japanese: 尾田 栄一郎, Hepburn: Oda Eiichirō, born January 1, 1975) is a Japanese manga artist and the creator of the series One Piece (1997–present). With more than 480 million tankōbon copies in circulation worldwide, One Piece is both the best-selling manga and the best-selling comic series of all time, in turn making Oda one of the best-selling fiction authors. The series' popularity resulted in Oda being named one of the manga artists that changed the history of manga.</p>
                                <p style={pStyle}>Eiichiro Oda was born on January 1, 1975 in Kumamoto, Japan. He said that at age four he resolved to become a manga artist in order to avoid having to get a "real job". His biggest influence is Akira Toriyama and his series Dragon Ball. He recalls that his interest in pirates was probably sparked by the popular TV animation series titled Vicky the Viking. He submitted a character named Pandaman for Yudetamago's classic wrestling manga Kinnikuman. Pandaman was not only used in a chapter of the manga but would later return as a recurring cameo character in Oda's own works.</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
            <div className='join-community'>
                        <h2>Join Our Community!</h2>
                        <div>
                            <Link to="/register" className="btn btn-success m-1 py-2 px-3">Register Now</Link>
                        </div>
                    </div>
            </footer>
            </>
        )
    }
}

const pStyle = {fontSize: '1rem',  textIndent:'30px'}

const cardStyle = {backgroundColor: 'rgba(0, 112, 250, 1)'}

export default Home