//COMPONENTS
import { FirstSection, SecondSection, ThirdSection, FourthSection, FifthSection } from './components';
//MATERIAL-UI
import useMediaQuery from '@mui/material/useMediaQuery';


function App() {
    const screen1270 = useMediaQuery('(max-width:1270px)');
    const screen1220 = useMediaQuery('(max-width:1220px)');
    const screen1000 = useMediaQuery('(max-width:1000px)');
    const screen980 = useMediaQuery('(max-width:980px)');
    //MOBILE-SCREEN
    const screen700 = useMediaQuery('(max-width:700px)');


    return (
        <div className="root">
            <FirstSection show={false}
            //COMPONENT TRICK
            />

            <div className={`${!screen700?(!screen980?(screen1220?(screen1270?`mt-[85rem]`:``):`mt-[90rem]`):`mt-[100rem]`):`mt-[80rem]`} pb-36 ${!screen700?(screen1000?`ml-[-7rem]`:``):`ml-[2.55rem]`}`}>
                <SecondSection
                />
            </div>

            <ThirdSection
            />

            <FourthSection
            />

            <FifthSection
            />
        </div>
    )
}

export default App;