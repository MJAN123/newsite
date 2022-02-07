//MATERIAL-UI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function FourthSection() {
    return (
        <div className="fourthsection pb-36">  {/*pushing down*/}

            <div className="flex justify-center items-center flex-col w-[37%]" style={{ margin: "0 auto" }}>
                <Typography className="!text-4xl !font-bold fontFam !mt-36"> Get Started! </Typography>  {/*pushing down*/}
    
                <Typography className="pl-7 pr-7 text-sm text-center pt-7" variant="p">
                    Let’s talk about how our Start-up package can help you. Schedule a free 15-min initial consultation.
                </Typography>
    
                <Button className="w-[80%] !mt-10 !bg-[#004CFF] !text-[0.9725rem] !font-bold !rounded-[8px] !p-3 !leading-[1.375rem]" variant="contained">
                    GET FREE CONSULTATION
                </Button>    
            </div>

        </div>
    )
}

export default FourthSection;