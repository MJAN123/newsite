//MATERIAL-UI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
//IMAGES
import { logo } from '../../images';
//COMPONENTS
import Detail from './Detail';
import Form from './Form';


function FirstSection({ show }) {
    const screen980 = useMediaQuery('(max-width:980px)');
    const screen860 = useMediaQuery('(max-width:860px)');
    const screen700 = useMediaQuery('(max-width:700px)');
    const screen600 = useMediaQuery('(max-width:600px)');
    const screen410 = useMediaQuery('(max-width:410px)');
    const screen400 = useMediaQuery('(max-width:400px)');
    const screen370 = useMediaQuery('(max-width:370px)');


    return (
        /*!w-[103rem for stretching screen wallpaper*/
        <div className={`firstsection !w-[103rem] ${!screen700?(screen980?`h-[82%]`:`h-[100%]`):``} flex items-center justify-center flex-col p-20 ${screen980?`mt-[-6.85rem]`:``} ${show&&`visible`}`}>  {/*pushing up mt-[-6.85]*/}
            <div>
                <AppBar position="sticky" color="transparent" elevation={0} className={`${!screen860?(screen980?`mt-10`:``):`mt-2`}`}>
                    <Toolbar>
                        <img src={logo} alt="" className={`cursor-pointer ${screen700?`w-[11.5rem] h-[2em]`:`w-[13.7rem] h-[2.4rem]`} ${screen700?`mt-10`:``} ${screen600?`ml-[-17.4px]`:`ml-[-26.4px]`}`}/> {/*ml-[-26.4px] in px because of not change in responsive*/}
                    </Toolbar>
                </AppBar>

                <div className={`w-full flex items-center justify-around ${screen700?`flex-col`:`flex-row`} ${!screen370?(!screen400?(!screen410?(!screen700?(screen980?`mt-[-6.2rem]`:`mt-[-5.7rem]`):`mt-[19.75rem]`):`mt-[20.25rem]`):`mt-[21.25rem]`):`mt-[22.25rem]`}`}>
                    <div className={`${screen860?`mt-14`:`mt-0.5`}`}>
                        <Detail
                        />
                    </div>
    
                    <div className={`${!screen700?(screen860?`mt-28`:`mt-24`):`mt-[3.25rem]`}`}>
                        <Form
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSection;