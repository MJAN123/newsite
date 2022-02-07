//MATERIAL-UI
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';


function Detail() {
    const screen1270 = useMediaQuery('(max-width:1270px)');
    const screen1220 = useMediaQuery('(max-width:1220px)');
    const screen940 = useMediaQuery('(max-width:940px)');
    const screen800 = useMediaQuery('(max-width:800px)');


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

            <ul className="w-full mt-8 text-white">
                <li>
                    <Typography variant="p">
                        <span className={`ml-1.5 ${!screen800?(!screen940?(screen1270?`text-md`:`text-[1.05rem]`):`text-[0.925rem]`):`text-[0.835rem]`}`}> Instantly get $10,000 AWS web services credit when you subscribe for 2 years </span>
                    </Typography>
                </li>

                <li className="mt-5">
                    <Typography variant="p">
                        <span className={`ml-1.5 ${!screen800?(!screen940?(screen1270?`text-md`:`text-[1.05rem]`):`text-[0.925rem]`):`text-[0.835rem]`}`}> Join the Digital BA community of tech start-ups </span>
                    </Typography>
                </li>

                <li className="mt-5">
                    <Typography variant="p"> 
                        <span className={`ml-1.5 ${!screen800?(!screen940?(screen1270?`text-md`:`text-[1.05rem]`):`text-[0.925rem]`):`text-[0.835rem]`}`}> Access to software delivery mentors to help boost your start up </span>
                    </Typography>
                </li>
            </ul>
        </div>
    )
}

export default Detail;