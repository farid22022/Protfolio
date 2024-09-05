import photo from "./../../../public/PersonalPhoto/Farid.png"
import Typewriter from 'typewriter-effect';
const Home = () => {
    return (
        <div className="flex space-x-20 mt-16">
            <div className="space-y-5 w-2/3">
                <div className="">
                    <h1 className="text-5xl text-cyan-500 ">Md. Farid Hossen Rehad</h1>
                </div>
                <div>
                    <h3 className="text-2xl font-bold pt-3">MERN stack developer</h3>
                </div>
                <div className="pt-3">
                    <div>
                        <p className="text-white">As a MERN Stack web developer, I specialize in building dynamic<br/> and robust applications. My expertise lies in seamlessly <br/>integrating front-end and back-end components for optimal performance.</p>
                        <p className="text-white pt-2">The widely adopted MERN Stack provides me with abundant resources and community <br/>support.With the modular architecture of MERN, I create scalable<br/> and maintainable applications.Leveraging JavaScript, I develop server-side logic<br/> and interactive user interfaces effectively.</p>
                    </div>
                </div>
                <div className="text-3xl text-blue-400 font-bold shadow-2xl ">
                <Typewriter
                    options={{
                        strings: ['I enjoy the flexibility and scalability of MERN Stac','I enjoy the flexibility and scalability of MERN Stack','I am a passionate MERN Stack web developer'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
            </div>
            <div className="w-1/3 pr-5">
                <img className="rounded-full shadow-2xl  border-b-8 border-blue-900  shadow-cyan-600" src={photo}/>
            </div>
        </div>
    );
};

export default Home;