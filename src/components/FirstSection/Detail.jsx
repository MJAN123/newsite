//MATERIAL-UI
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
//IMAGES
import { li } from '../../images';


function Detail() {
    const screen1270 = useMediaQuery('(max-width:1270px)');
    const screen1220 = useMediaQuery('(max-width:1220px)');
    const screen940 = useMediaQuery('(max-width:940px)');
    const screen800 = useMediaQuery('(max-width:800px)');
    //MOBILE-SCREEN
    const screen700 = useMediaQuery('(max-width:700px)');
    const screen410 = useMediaQuery('(max-width:410px)');


    return (
        <div className="flex items-center flex-col">
            <Typography className="w-full text-[#EB175C] font-bold leading-[1.375rem]" variant="p"> DIGITAL START-UP PACKAGE </Typography>

            <div className={`w-full ${screen1220?`mt-1`:`mt-5`} text-white`}>
                <h1 className={`${screen1220?`pb-1`:`pb-5`}`}>
                    <sup className={`${screen1220?`text-[2.25rem]`:`text-5xl`}`}>$</sup>
                    <span className={`${screen1220?`text-[4.25rem]`:`text-7xl`}`}>80</span>
                    <sub className={`${screen1220?`text-[1.5rem]`:`text-3xl`}`}>/ month</sub>
                </h1>
                <Typography className="text-gray-200" variant="p"> Paid every month $680/Year </Typography>
            </div>

            <div className={`mt-8 text-white ${!screen410?(screen700?`w-[23.75rem]`:``):`w-[20.75rem]`}`}>
                <p className="flex items-center">
                    <img src={li} alt="" className="lilogo rounded-2xl"/>
                    <Typography className="pl-2.5" variant="p">
                        <p className={`ml-1.5 font-medium ${screen700&&`font-bold`} tracking-wide ${!screen700?(!screen800?(!screen940?(screen1270?`text-md`:`text-[0.955rem]`):`text-[0.88rem]`):`text-[0.7975rem]`):`text-[0.945rem]`} ${screen700?`leading-0`:``}`}> Instantly get $10,000 AWS web services credit when subscribe for 2 years </p>
                    </Typography>
                </p>

                <p className="flex items-center mt-5">
                    <img src={li} alt="" className="lilogo rounded-2xl"/>
                    <Typography className="pl-2.5 " variant="p">
                        <p className={`ml-1.5 font-medium ${screen700&&`font-bold`} tracking-wide ${!screen700?(!screen800?(!screen940?(screen1270?`text-md`:`text-[0.955rem]`):`text-[0.88rem]`):`text-[0.7975rem]`):`text-[0.945rem]`} ${screen700?`leading-0`:``}`}> Join the Digital BA community of tech start-ups </p>
                    </Typography>
                </p>

                <p className="flex items-center mt-5">
                    <img src={li} alt="" className="lilogo rounded-2xl"/>
                    <Typography className="pl-2.5 " variant="p">
                        <p className={`ml-1.5 font-medium ${screen700&&`font-bold`} tracking-wide ${!screen700?(!screen800?(!screen940?(screen1270?`text-md`:`text-[0.955rem]`):`text-[0.88rem]`):`text-[0.7975rem]`):`text-[0.945rem]`} ${screen700?`leading-0`:``}`}> Access to software delivery mentors to help boost your start up </p>
                    </Typography>
                </p>
            </div>
        </div>
    )
}

export default Detail;