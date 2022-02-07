//MATERIAL-UI
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//IMAGES
import { aws, arrow, persons, star, curvered1, curveblue, brand1, brand2, brand3, brand4 } from '../../images';



function SecondSection() {
    return (
        <div className="secondsection flex flex-col">
            <Typography className="!text-3xl !font-bold !tracking-wider text-center fontFam" style={{ wordSpacing: "0.15rem" }}>
                Benefits of Joining the Digital BA
            </Typography>



            <div className="mt-[34em]"> {/*33rem for curveble*/}
                <div className="flex justify-start w-[76rem]">
                    <img src={curveblue} className="w-[15.95rem] h-[14.5rem]" alt=""/>
                </div>


                <div className="flex items-center flex-col mt-[-46rem] ml-12"> {/*mt-[-40.5rem] for curvered*/}

                    <div className="flex items-center">
                        <div className="flex items-center flex-col">
                            <Card className="w-[30rem] !shadow-none !rounded-2xl mt-6 pr-3 pl-3 pt-3.5 pb-0.5">
                                <CardContent>
                                    <img src={aws} className="w-[3.85rem] h-[2.5rem]" alt=""/>
                                    <p className="font-bold text-[1rem] mt-8"> $ 10, 00 AWS credit with 2 years subscription </p>
                                    <Typography className="fontFam !text-[0.895rem] !mt-3" color="text.secondary">
                                        Amazon Web Services provides tools that make it easy to get started on the right path. You can use your AWS credits to access a broad range of AWS services, including infrastructure technologies such as compute, storage, and databases, as well as emerging technologies like machine learning and artificial intelligence.
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card className="w-[30rem] !shadow-none !rounded-2xl mt-5 pr-3 pl-3 pt-3.5 pb-0.5">
                                <CardContent>
                                    <img src={arrow} className="w-[3.2rem] h-[2.85rem]" alt=""/>
                                    <p className="font-bold text-[1rem] mt-7"> Audit your software delivery capability </p>
                                    <Typography className="fontFam !text-[0.895rem] !mt-3" color="text.secondary">
                                        Keep your software delivery process in check. Make sure your team efficiently delivers high-quality, valuable software. Find out how our Digital Start-up Package can help.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex items-center flex-col ml-5 mt-[-55px]">
                            <div>
                                <div className="flex justify-end w-[33rem]"> {/*w-[33rem] for curvered*/}
                                    <img src={curvered1} className="w-[9.95rem] h-[9.5rem]" alt=""/>
                                </div>
                                <Card className="w-[30rem] !shadow-none !rounded-2xl mt-[-75px] pr-3 pl-3 pt-3.5 pb-0.5"> {/*mt-[-60px] for curvered*/}
                                    <CardContent>
                                        <img src={persons} className="w-[3.85rem] h-[2.5rem]" alt=""/>
                                        <p className="font-bold text-[1rem] mt-8"> Join the Digital BA community of tech start-ups </p>
                                        <Typography className="fontFam !text-[0.895rem] !mt-3" color="text.secondary">
                                            Share your experience with us and get advice from our community of tech entrepreneurs when building your own tech startup.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card className="w-[30rem] !shadow-none !rounded-2xl mt-5 pr-3 pl-3 pt-3.5 pb-0.5 ml-[-2.885rem]"> {/*ml-[-2.885rem] for curvered*/}
                                <CardContent>
                                    <img src={star} className="w-[3.2rem] h-[2.85rem]" alt=""/>
                                    <p className="font-bold text-[1rem] mt-7"> Over $250, 00 worth of savings available </p>
                                    <Typography className="fontFam !text-[0.895rem] !mt-3" color="text.secondary">
                                        Including $100,000 in Google Cloud Credits to Australian startups, and $10,000 in AWS Cloud Credits —as well as a 90% discount on Hubspot and 40% discount on Xero.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>


                    <div className="w-[29rem] ml-[-12rem] mt-10">
                        <Typography className="text-sm font-bold tracking-wide" variant="p">
                            We are an integrated team of digital transformation experts from a diverse range of enterprise experience.
                        </Typography>

                        <div className="flex justify-center ml-[13rem] mt-9 w-full">
                            <img src={brand1} className="w-[10.5rem] h-[1.8rem]" alt=""/>
                            <img src={brand2} className="w-[10.5rem] h-[1.8rem] ml-32" alt=""/>
                            <img src={brand3} className="w-[7.5rem] h-[1.8rem] ml-32" alt=""/>
                            <img src={brand4} className="w-[8rem] h-[2.3rem] ml-32 mt-[-0.5rem]" alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SecondSection;