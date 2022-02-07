//MATERIAL-UI
import Typography from '@mui/material/Typography';
//IMAGES
import { logo, arrowbutton, linkedin, instagram,facebook, twitter } from '../../images';


function FifthSection() {
    return (
        <div className="fifthsection flex justify-end pr-10 mt-[-3.5rem] pb-20">  {/*pushing down*/}

            <div className="mt-36 w-[80%]">
                <di className="flex items-center ml-1 pb-7">
                    <div style={{ flex: "0.97" }}>
                        <button className="w-[15.3rem] h-[2.3rem]" onClick={() => {}}>
                            <img src={logo} alt="" style={{ margin: "0 auto" }}/>
                        </button>
                    </div>

                    <div className="flex items-center">
                        <Typography variant="body2" className="text-gray-300 !font-bold"> BACK TO TOP </Typography>
                        <button className="w-[2.3rem] h-[2.3rem] ml-5" onClick={() => {}}>
                            <img src={arrowbutton} alt="" style={{ margin: "0 auto" }}/>
                        </button>
                    </div>
                </di>

                <div className="flex items-center justify-between w-[21%] ml-5">
                    <button className="bg-gray-600 w-[2.3rem] h-[2.3rem] rounded-3xl">
                        <img src={linkedin} alt="" style={{ margin: "0 auto" }}/>
                    </button>
                    <button className="bg-gray-600 w-[2.3rem] h-[2.3rem] rounded-3xl">
                        <img src={instagram} alt="" style={{ margin: "0 auto" }}/>
                    </button>
                    <button className="bg-gray-600 w-[2.3rem] h-[2.3rem] rounded-3xl">
                        <img src={facebook} alt="" style={{ margin: "0 auto" }}/>
                    </button>
                    <button className="bg-gray-600 w-[2.3rem] h-[2.3rem] rounded-3xl">
                        <img src={twitter} alt="" style={{ margin: "0 auto" }}/>
                    </button>
                </div>

                <div className="flex items-center ml-6 mt-10">
                    <Typography className="text-gray-300 w-[60%]" variant="body2"> © Copyright 2022 the digital BA </Typography>

                    <div className="flex items-center justify-around w-[40%]">
                        <Typography variant="body2" className="text-gray-300"> Privacy Policy </Typography>
                        <Typography variant="body2" className="text-gray-300"> Terms & Conditions </Typography>
                        <Typography variant="body2" className="text-gray-300"> Legal </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthSection;