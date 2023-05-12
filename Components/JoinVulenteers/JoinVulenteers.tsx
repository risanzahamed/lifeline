import Image from 'next/image'
import VulenteerModal from '../VulenteerModal/VulenteerModal';
import volenteer from "../../public/images/KC-Website-Slider-Volunteer-v1.webp"

const JoinVulenteers = () => {
    return (
        <section className="py-10  sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                    <div className="relative ">
                        <Image className="w-full lg:h-[400px] rounded-md" src={volenteer} alt="" />


                    </div>

                    <div>

                        <h2 className=" text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Join Our Volunteer</h2>
                        <p className="mt-6 text-lg leading-relaxed text-gray-600">Be the change you wish to see in the world. Join our NGOs volunteer program and actively participate in transformative initiatives. By joining our passionate team, you will have the opportunity to empower communities, protect the environment, and uplift marginalized voices. Together, let us create a brighter future. Sign up today and embark on a fulfilling journey of making a difference that truly matters.</p>
                        <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-[#f26a02] to-blue-600 hover:opacity-80 focus:opacity-80" role="button"> Join Now </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinVulenteers;