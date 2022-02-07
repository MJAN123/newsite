//MATERIAL-UI
import Typography from '@mui/material/Typography';
//IMAGES
import { curvered2, comma } from '../../images';
//REACT-CAROURSEL
import Carousel from 'react-elastic-carousel';


function ThirdSection() {
    return (
        <div className="thirdsection">

            <div className="w-[70%] pb-28 flex justify-center items-center flex-col" style={{ margin: "0 auto" }}>
                <div className="flex items-center mt-48 w-[60%]">  {/*pushing down*/}
                    <img src={curvered2} className="w-[3.4rem] h-[3.4rem]" alt=""/>
                    <div className="flex items-center ml-[-2.5rem]">
                        <img src={comma} className="w-[1.1rem] h-[2.2rem]" alt=""/>
                        <img src={comma} className="w-[1.1rem] h-[2.2rem]" alt=""/>
                    </div>
                </div>

                <Carousel itemsToShow={1} showArrows={false} className="ml-[-0.55rem] !w-[60%]">
                    <Typography className="text-white !text-2xl !font-bold !mt-8">
                        <p> Volutpat pretium, hac donec mus etiam morbi augue. Adipiscing sodales tincidunt enim accumsan. Adipiscing netus mi id facilisis. </p>
                        <p className="text-sm font-normal text-gray-200 mt-4 tracking-wider fontFam"> Elmar Platzer </p>
                    </Typography>
                    <Typography className="text-white !text-2xl !font-bold !mt-8">
                        <p> Volutpat pretium, hac donec mus etiam morbi augue. Adipiscing sodales tincidunt enim accumsan. Adipiscing netus mi id facilisis. </p>
                        <p className="text-sm font-normal text-gray-200 mt-4 tracking-wider fontFam"> Elmar Platzer </p>
                    </Typography>
                    <Typography className="text-white !text-2xl !font-bold !mt-8">
                        <p> Volutpat pretium, hac donec mus etiam morbi augue. Adipiscing sodales tincidunt enim accumsan. Adipiscing netus mi id facilisis. </p>
                        <p className="text-sm font-normal text-gray-200 mt-4 tracking-wider fontFam"> Elmar Platzer </p>
                    </Typography>
                    <Typography className="text-white !text-2xl !font-bold !mt-8">
                        <p> Volutpat pretium, hac donec mus etiam morbi augue. Adipiscing sodales tincidunt enim accumsan. Adipiscing netus mi id facilisis. </p>
                        <p className="text-sm font-normal text-gray-200 mt-4 tracking-wider fontFam"> Elmar Platzer </p>
                    </Typography>
                    <Typography className="text-white !text-2xl !font-bold !mt-8">
                        <p> Volutpat pretium, hac donec mus etiam morbi augue. Adipiscing sodales tincidunt enim accumsan. Adipiscing netus mi id facilisis. </p>
                        <p className="text-sm font-normal text-gray-200 mt-4 tracking-wider fontFam"> Elmar Platzer </p>
                    </Typography>
                </Carousel>
            </div>

        </div>
    )
}

export default ThirdSection;