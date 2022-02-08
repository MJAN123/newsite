//MATERIAL-UI
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
//CLASSNAMES
import classnames from 'classnames';


//FOR MUI INPUT BORDER-RADUIS
const useStyles = makeStyles({
    root: {
        [`& fieldset`]: {
            borderRadius: 8.5
        }
    }
});
 
 
function Form() {
    const screen1220 = useMediaQuery('(max-width:1220px)');
    const screen1150 = useMediaQuery('(max-width:1150px)');
    const screen980 = useMediaQuery('(max-width:980px)');
    const screen860 = useMediaQuery('(max-width:860px)');
    const screen760 = useMediaQuery('(max-width:760px)');
    //MOBILE-SCREEN
    const screen700 = useMediaQuery('(max-width:700px)');
    const screen410 = useMediaQuery('(max-width:410px)');


    const classes = useStyles();


    return (
        <form className={`bg-white ${`${!screen410?(!screen700?(!screen760?(!screen860?(!screen980?(!screen1150?(screen1220?`w-[25.25rem]`:`w-[27.25rem]`):`w-[24rem]`):`w-[22.25rem]`):`w-[20rem]`):`w-[18.75rem]`):`w-[23.75rem]`):`w-[20.75rem]`}`} ${!screen980?(screen1220?`pb-6`:`pb-8`):`pb-7`} rounded-xl flex items-center flex-col ${screen1220?`pl-2.5 pr-2.5`:`pl-5 pr-5`}`}>
            <Typography className={`${!screen860?(screen1150?`!text-[2.1rem]`:`!text-4xl`):'!text-3xl'} !font-bold fontFam ${!screen980?(screen1220?`!mt-12`:`!mt-14`):`!mt-8`}`}> Get Started! </Typography>

            <Typography className={`pl-7 pr-7 text-center ${!screen700?(!screen860?(!screen980?(screen1220?`text-[0.825rem]`:`text-sm`):`text-[0.765rem]`):`text-[0.665rem]`):`text-[0.935rem]`} ${!screen410?(!screen700?(!screen760?``:`w-[20rem]`):`w-[25rem]`):`w-[21.15rem]`} ${!screen860?(!screen1150?(screen1220?`pt-6`:`pt-7`):`pt-3`):`pt-3.5`}`} variant="p">
                Let’s talk about how our Start-up package can help you. Schedule a free 15-min initial consultation.
            </Typography>

            <div className={`${!screen700?(!screen760?(screen1220?`w-[100%]`:`w-[80%]`):`w-[78%]`):`w-[96%]`} ${screen1220&&`flex justify-center items-center flex-col`} mt-7`}>
                <TextField className={classnames(classes.root, `${!screen760?(screen1220?`w-[80%]`:`w-[100%]`):`w-[100%]`}`)}                              label="Full Name*"     variant="outlined" size={screen980?"small":"medium"}/>
                <TextField className={classnames(classes.root, `${!screen760?(screen1220?`w-[80%]`:`w-[100%]`):`w-[100%]`} ${screen980?`!mt-3`:`!mt-4`}`)} label="Email Address*" variant="outlined" size={screen980?"small":"medium"}/>
                <TextField className={classnames(classes.root, `${!screen760?(screen1220?`w-[80%]`:`w-[100%]`):`w-[100%]`} ${screen980?`!mt-3`:`!mt-4`}`)} label="Mobile number*" variant="outlined" size={screen980?"small":"medium"}/>
                <TextField className={classnames(classes.root, `${!screen760?(screen1220?`w-[80%]`:`w-[100%]`):`w-[100%]`} ${screen980?`!mt-3`:`!mt-4`}`)} label="Company name"   variant="outlined" size={screen980?"small":"medium"}/>
            </div>

            <Button className={`${screen700?`w-[96.25%]`:`w-[79.5%]`} ${screen980?`h-10`:``} !mt-5 !bg-[#004CFF] ${!screen860?(!screen1150?(screen980?`!text-[0.8725rem]`:`!text-[0.9725rem]`):`!text-[0.915rem]`):`!text-[0.75rem]`} !font-bold !rounded-[8px] !p-3 ${!screen1150?`!leading-[1.375rem]`:`!leading-[1.215rem]`}`} variant="contained">
                GET FREE CONSULTATION
            </Button>
        </form>
    )
}

export default Form;