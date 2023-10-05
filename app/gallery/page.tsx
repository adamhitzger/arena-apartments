interface urls {
    string: string;
    url1:string;
    url2:string;
    url3:string;
    url4:string;
    url5:string;
    url6:string;
}

function Section(props: urls){
    return(
        <div className="w-fit ">
            <div className=" max-w-fit mx-5 my-5 2xl:mx-8 ">
                <ul className="list-disc">
                    <li className="underline underline-offset-4 text-2xl 2xl:text-4xl">{props.string}</li>
                </ul>
            </div>
            <div className="grid grid-cols-2 2xl:grid-cols-3 gap-3 mx-5 my-5 2xl:mx-10 ">
                                <div >
                                    <img src={props.url1} alt="" className="rounded-[20px]"/>
                                </div>
                                <div>
                                    <img src={props.url2} alt=""className="rounded-[20px]"/>
                                </div>
                                <div>
                                    <img src={props.url3} alt="" className="rounded-[20px]"/>
                                </div>
                                <div>
                                    <img src={props.url4} alt="" className="rounded-[20px]"/>
                                </div>
                                <div>
                                    <img src={props.url5}alt="" className="rounded-[20px]"/>
                                </div>
                                <div>
                                    <img src={props.url6} alt="" className="rounded-[20px]"/>
                                </div>
                            </div>
                        </div>
    );
};

export default function Gallery() {

    return (
        <div className="p-2 w-full h-full">
           <div className="w-full ">
                <div className="grid gap-x-5 grid-rows-3 w-full">  
                    <Section string="Ubytování" url1="/img/rooms/1.jpg" url2="/img/rooms/2.jpg" url3="/img/rooms/3.jpg" url4="/img/rooms/4.jpg" url5="/img/rooms/5.jpg" url6="/img/rooms/6.jpg"/>
                    <Section string="Wellness" url1="/img/welness/1.jpg" url2="/img/welness/2.jpg" url3="/img/welness/3.jpg" url4="/img/welness/4.jpg" url5="/img/welness/5.jpg" url6="/img/welness/6.jpg"/>
                    <Section string="Fitness" url1="/img/fitness/1.jpg" url2="/img/fitness/2.jpg" url3="/img/fitness/3.jpg" url4="/img/fitness/4.jpg" url5="/img/fitness/5.jpg" url6="/img/fitness/6.jpg"/>    
                </div>
            </div> 
        </div>
    )
}