//MATERIAL-UI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
//IMAGES
import { header } from '../../images';
//COMPONENTS
import Detail from './Detail';
import Form from './Form';


function FirstSection() {
    const screen980 = useMediaQuery('(max-width:980px)');
    const screen860 = useMediaQuery('(max-width:860px)');
    //MOBILE-SCREEN
    const screen700 = useMediaQuery('(max-width:700px)');


    return (
        <div className={`firstsection ${screen980?`h-[80%]`:`h-[100%]`} flex items-center justify-center flex-col p-20`}>  {/*pushing down mt-[152rem]*/}
            <AppBar position="sticky" color="transparent" elevation={0}>
                <Toolbar>
                    <img src={header} alt=""/>
                </Toolbar>
            </AppBar>

            <div className="w-full flex items-center justify-around mt-[-5.7rem]">
                <div className={`${screen860?`mt-14`:`mt-0.5`}`}>
                    <Detail
                    />
                </div>

                <div className={`${screen860?`mt-28`:`mt-24`}`}>
                    <Form
                    />
                </div>
            </div>
        </div>
    )
}

export default FirstSection;