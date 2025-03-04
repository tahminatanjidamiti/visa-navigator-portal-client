import { IoIosArrowDroprightCircle } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-base-300 text-gray-700 py-5">
            <footer className="footer px-4 md:px-16">
                <nav>
                    <p className="text-4xl italic text-sky-300 font-bold">NaVisa</p>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of use</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Connected with Us!</h6>
                    <div className="space-y-2">
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="number" className="grow" placeholder="Phone No" />
                        </label>
                        <textarea className="textarea w-full textarea-bordered" placeholder="Message"></textarea>
                        <br />
                        <p className="w-5 h-5 bg-teal-600 inline-flex rounded-full text-white justify-center items-center"><IoIosArrowDroprightCircle /></p>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <img src="https://img.icons8.com/?size=24&id=uLWV5A9vXIPu&format=png" alt="Facebook icon!" />
                        </a>
                        <a>
                            <img src="https://img.icons8.com/?size=24&id=TJX3x8NCUkFN&format=png" alt="Twiter icon!" />
                        </a>
                        <a>
                            <img src="https://img.icons8.com/?size=24&id=Xy10Jcu1L2Su&format=png" alt="Instagram icon!" />
                        </a>
                        <a>
                            <img src="https://img.icons8.com/?size=24&id=kBCrQMzpQDLQ&format=png" alt="Linkedin icon!" />
                        </a>
                        <a>
                            <img src="https://img.icons8.com/?size=24&id=kshUdu5u4FCX&format=png" alt="Reddit icon!" />
                        </a>

                    </div>
                </nav>
            </footer>
            <div className="text-center pt-4">
                <p className="text-sm text-gray-600">© 2024 NaVisa - All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;