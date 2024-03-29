//MATERIAL-UI
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
//IMAGES
import { aws, arrow, persons, star, curvered1, curveblue, brand1, brand2, brand3, brand4 } from '../../images';
//COMPONENT TRICK
import FirstSection from '../FirstSection/index';


function SecondSection() {
    const screen1270 = useMediaQuery('(max-width:1270px)');
    const screen1220 = useMediaQuery('(max-width:1220px)');
    const screen1050 = useMediaQuery('(max-width:1050px)');
    const screen1000 = useMediaQuery('(max-width:1000px)');
    const screen980 = useMediaQuery('(max-width:980px)');
    const screen900 = useMediaQuery('(max-width:900px)');
    const screen860 = useMediaQuery('(max-width:860px)');
    const screen820 = useMediaQuery('(max-width:820px)');
    //MOBILE-SCREEN
    const screen700 = useMediaQuery('(max-width:700px)');
    const screen400 = useMediaQuery('(max-width:400px)');
    const screen390 = useMediaQuery('(max-width:390px)');
    const screen350 = useMediaQuery('(max-width:350px)');
    const screen320 = useMediaQuery('(max-width:320px)');
    const screen300 = useMediaQuery('(max-width:300px)');
    const screen275 = useMediaQuery('(max-width:275px)');


    return (
        <div className={`secondsection flex flex-col ${!screen350?(!screen700?(!screen900?(screen1000?`ml-14`:``):`ml-[2.85rem]`):`ml-[-2.4rem]`):`ml-[-3.4rem]`}`}>
            {/*FIX*/}
            <div className={`${!screen860?(!screen900?(!screen1050?(!screen1220?(screen1270?`mt-[26rem]`:`mt-[12rem]`):`mt-[33rem]`):`mt-[32rem]`):`mt-[42rem]`):`mt-[38rem]`}`}>
                <FirstSection show={true}
                //COMPONENT TRICK
                />
            </div>

            <Typography className={`${screen300?`!text-2xl`:`!text-3xl`} !font-bold !tracking-wider text-center fontFam ${screen700&&(!screen300?(!screen900?(screen980?`w-[27rem]`:`w-[30rem]`):`w-[20.25rem]`):`w-[18.2rem]`)} pl-5 !mt-16`} style={{ wordSpacing: "0.15rem", margin: "0 auto" }}>
                Benefits of Joining the Digital BA
            </Typography>
            

            <div className={`${!screen300?(screen700?`mt-[86.5rem]`:``):`mt-[90.25rem]`}`}>
                {/*side corner*/}
                <div>
                    {
                        screen700&&(
                            <div className="w-[60%]">
                                <img src={curveblue} className={`${screen320?`w-[11.95rem]`:`w-[10.95rem]`} ${screen320?`h-[10.6rem]`:`w-[10.95rem]`}`} alt="" style={{ margin: "0 auto" }}/>
                            </div>
                        )
                    }
                </div>
    
    
                <div className={!screen300?(!screen700?(!screen900?(screen1000?`mt-[31.65rem]`:`mt-[35em]`):`mt-[40em]`):`mt-[-58em]`):`mt-[-63rem]`}> {/*33rem for curveble*/}
                    {/*side corner*/}
                    <div className={`flex justify-start w-[76rem] ${screen700?`!ml-[-20rem]`:(screen900&&`!ml-[10rem]`)}`}>
                        <img src={curveblue} className={`${screen700&&`invisible`} ${screen1000?`h-[18rem]`:`h-[14.5rem]`} ${screen1000?`w-[17.95rem]`:`w-[15.95rem]`}`} alt=""/>
                    </div>
    
    
                    <div className={`flex items-center flex-col ml-12 ${screen900?`mt-[-55.5rem]`:`mt-[-46rem]`}`}> {/*mt-[-40.5rem] for curvered*/}
    
                        <div className={`flex items-center ${screen700?`flex-col`:`flex-row`}`}>
                            <div className="flex items-center flex-col">
                                <Card className={`${!screen300?(!screen900?(screen980?`w-[27rem]`:`w-[30rem]`):`w-[20.25rem]`):`w-[18.2rem]`} !shadow-none !rounded-2xl mt-6 pr-3 pl-3 pt-3.5 pb-0.5`}>
                                    <CardContent>
                                        <img src={aws} className="w-[3.85rem] h-[2.5rem]" alt=""/>
                                        <p className="font-bold text-[1rem] mt-8"> $ 10, 00 AWS credit with 2 years subscription </p>
                                        <Typography className="fontFam !text-[0.895rem] !mt-3" color="text.secondary">
                                            Amazon Web Services provides tools that make it easy to get started on the right path. You can use your AWS credits to access a broad range of AWS services, including infrastructure technologies such as compute, storage, and databases, as well as emerging technologies like machine learning and artificial intelligence.
                                        </Typography>
                                    </CardContent>
                                </Card>
    
                                <Card className={`${!screen300?(!screen900?(screen980?`w-[27rem]`:`w-[30rem]`):`w-[20.25rem]`):`w-[18.2rem]`} !shadow-none !rounded-2xl mt-5 pr-3 pl-3 pt-3.5 pb-0.5`}>
                                    <CardContent>
                                        <img src={arrow} className="w-[3.2rem] h-[2.85rem]" alt=""/>
                                        <p className="font-bold text-[1rem] mt-7"> Audit your software delivery capability </p>
                                        <Typography className="fontFam !text-[0.895rem] !mt-3" color="text.secondary">
                                            Keep your software delivery process in check. Make sure your team efficiently delivers high-quality, valuable software. Find out how our Digital Start-up Package can help.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
    
                            <div className={`flex items-center flex-col ${screen700?`ml-20`:`ml-5`} ${screen700?`mt-[-18.75px]`:`mt-[-55px]`}`}>
                                <div>
                                    {/*side corner*/}
                                    <div className={`flex justify-end w-[33rem] ${!screen900?``:`ml-[-7.65rem]`}`}> {/*w-[33rem] for curvered*/}
                                        <img src={curvered1} className={`w-[9.95rem] h-[9.5rem] ${screen700&&`invisible`} `} alt=""/>
                                    </div>
                                    <Card className={`${!screen300?(!screen900?(screen980?`w-[27rem]`:`w-[30rem]`):`w-[20.25rem]`):`w-[18.2rem]`} !shadow-none !rounded-2xl mt-[-75px] pr-3 pl-3 pt-3.5 pb-0.5 ${screen300&&`ml-[1.05rem]`}`}> {/*mt-[-60px] for curvered*/}
                                        <CardContent>
                                            <img src={persons} className="w-[3.85rem] h-[2.5rem]" alt=""/>
                                            <p className="font-bold text-[1rem] mt-8"> Join the Digital BA community of tech start-ups </p>
                                            <Typography className="fontFam !text-[0.895rem] !mt-3" color="text.secondary">
                                                Share your experience with us and get advice from our community of tech entrepreneurs when building your own tech startup.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
    
                                <Card className={`${!screen300?(!screen900?(screen980?`w-[27rem]`:`w-[30rem]`):`w-[20.25rem]`):`w-[18.2rem]`} !shadow-none !rounded-2xl mt-5 pr-3 pl-3 pt-3.5 pb-0.5 ${!screen900?(screen980?`ml-[-6.085rem]`:`ml-[-2.885rem]`):`ml-[-5.1rem]`}`}> {/*ml-[-2.885rem] for curvered*/}
                                    <CardContent>
                                        <img src={star} className="w-[3.2rem] h-[2.85rem]" alt=""/>
                                        <p className="font-bold text-[1rem] mt-7"> Over $250, 00 worth of savings available </p>
                                        <Typography className="fontFam !text-[0.895rem] !mt-3" color="text.secondary">
                                            Including $100,000 in Google Cloud Credits to Australian startups, and $10,000 in AWS Cloud Credits —as well as a 90% discount on Hubspot and 40% discount on Xero.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
    
                            {/*side corner*/}
                            <div>
                                {
                                    screen700&&(
                                        <div className={`flex justify-end w-[33rem] ${!screen275?(screen300?`ml-[-11.35rem]`:`ml-[-10.15rem]`):`ml-[-13.15rem]`} ${screen300?`mt-[-95.5rem]`:`mt-[-91.25rem]`}`}>
                                            <img src={curvered1} className="w-[3.95rem] h-[3.5rem]" alt=""/>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
    
    
                        <div className={`${!screen700?(screen900?`w-[50%]`:`w-[29rem]`):`w-[100%] ml-[10.25rem] mt-[-2.75rem]`} ${screen900&&``} ${screen900&&`flex flex-col items-end`} ${!screen820?(screen1000?`ml-[-8rem]`:`ml-[-13rem]`):`ml-[3rem]`} ${screen1000?`mt-4`:`mt-5`} ${screen700&&`flex justify-center items-center`}`}>
                            {
                                !screen700?(
                                    <div>
                                        <Typography className={`${screen900?`text-lg`:`text-sm`} ${screen900&&`text-center`} font-bold tracking-wide`} variant="p">
                                            We are an integrated team of digital transformation experts from a diverse range of enterprise experience.
                                        </Typography>
                                    </div>
    
                                ):(
                                    <div className={`${screen400?`!ml-[-7rem]`:``} ${screen400?`text-md w-[16rem]`:`text-lg`} w-[50%] text-center font-semibold tracking-wide ${screen700&&`mt-[5rem] ${screen300&&`ml-[-1.4rem]`}`}`} style={{ wordSpacing: "0.1rem" }}>
                                        We are an integrated team of digital transformation experts from a diverse range of enterprise experience.
                                    </div>
                                )
                            }
    
                            {
                                !screen900?(
                                    <div className="flex justify-center ml-[13rem] mt-9 w-full">
                                        <img src={brand1} className={`w-[10.5rem] h-[1.8rem]`} alt=""/>
                                        <img src={brand2} className={`w-[10.5rem] h-[1.8rem] ${screen1000?`ml-10`:`ml-32`}`} alt=""/>
                                        <img src={brand3} className={`w-[7.5rem] h-[1.8rem] ${screen1000?`ml-10`:`ml-32`}`} alt=""/>
                                        <img src={brand4} className={`w-[8rem] h-[2.3rem] ${screen1000?`ml-10`:`ml-32`} mt-[-0.5rem]`} alt=""/>
                                    </div>
            
                                ):(
                                    <div className={`flex flex-col mt-7 w-full ${screen400?`!ml-[-7rem]`:``}`}>
                                        <div style={{ margin: "0 auto" }} className={`${!screen275?(!screen350?(!screen390?(screen700?`!ml-[-2.6rem]`:``):`!ml-[-3.25rem]`):`!ml-[-3.95rem]`):`!ml-[-4.35rem]`} ${!screen700?(screen820?`!ml-44`:`!ml-60`):`w-full flex items-center flex-col !ml-[0.15rem]`}`}>
                                            <div className={`flex item-center ${screen300?`ml-[-1rem]`:``}`}>
                                                <img src={brand1} className={`w-[9.5rem] h-[2.25rem]`} alt=""/>
                                                <img src={brand3} className={`w-[8.95rem] h-[1.875rem] ${!screen300?(screen1000?`ml-10 mt-1`:`ml-32`):`ml-2 mt-0.5`}`} alt=""/>
                                            </div>
                                            <div className={`flex item-center mt-6 ${screen300?`ml-[-1rem]`:``}`}>
                                                <img src={brand2} className={`w-[9.25rem] h-[1.9rem] ml-[-0.6rem]`} alt=""/>
                                                <img src={brand4} className={`w-[8.95rem] h-[2.275rem] mt-[-0.45rem] ${!screen300?(screen1000?`ml-12 mt-1`:`ml-32`):`ml-3`}`} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    )
}

export default SecondSection;