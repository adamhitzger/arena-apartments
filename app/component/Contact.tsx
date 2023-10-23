export default function Contact(){
    return(
      
        <div className="p-5 bg-black w-full h-full " id="contact">
         <div className="w-full h-full" >
         <div className=" max-w-fit mx-5 my-8 2xl:mx-8 ">
            <ul className="list-disc">
              <li className="text-white underline underline-offset-4 text-2xl 2xl:text-4xl">Kontakt</li>
            </ul>
        </div>
            <div className="w-full max-h-fit 2xl:flex">
              <div className=" w-full my-3  p-5 border rounded-[25px] bg-white lg:w-2/4 lg:p-10 lg:ml-3 2xl:mr-3 2xl:p-10 2xl:w-2/4 ">
                <form className="2xl:m-5">
                <div className="text-2xl my-5">
                  <label htmlFor="">Celé jméno</label>
                </div>
                <div className="mb-5 border-b-2 border-solid border-black">
                  <input className=" w-full p-2" type="text" required/>
                </div>
                <div className="text-2xl my-5">
                  <label htmlFor="">Email</label>
                </div>
                <div className="mb-5 border-b-2 border-solid border-black">
                  <input className="w-full p-2" type="text" required/>
                </div>
                <div className="text-2xl my-5">
                  <label htmlFor="">Telefonní číslo</label>
                </div>
                <div className="mb-5 border-b-2 border-solid border-black">
                  <input className=" w-full p-2" type="text" required/>
                </div>
                <div className="text-2xl my-5">
                  <label htmlFor="">Zpráva</label>
                </div>
                <div className="mb-5 border-b-2 border-solid border-black">
                  <textarea className=" w-full p-2"></textarea>
                </div>
                <div className="text-xl font-semibold ">
                  <input className="border-2 px-5 py-3 rounded-[20px] bg-green-500" type="submit" value={"Odeslat"}></input>
                </div>
                </form>
              </div>

              <div className="my-3 p-5 flex flex-col w-full rounded-[25px] bg-white lg:w-2/4 lg:p-10 lg:ml-3 2xl:w-2/4 2xl:p-10 2xl:ml-3">  
                <div className=" text-2xl w-full h-fit  text-right ">

                  <div className="flex flex-row justify-end">
                    <div className="pr-5">
                      <span className="underline underline-offset-4">Adresa:</span>
                    </div>
                    <div>
                      <span>Jihlavská 895, Havlíčkův Brod, 580 01</span>
                    </div>
                  </div>

                  <div className="flex flex-row my-3 justify-end">
                    <div className="pr-5">
                      <span className="underline underline-offset-4">Recepce:</span>
                    </div>
                    <div>
                      <span>+420 606 838 786</span>
                    </div>
                  </div>

                  <div className="flex flex-row flex-wrap justify-end">
                    <div className="pr-5">
                      <span className="underline underline-offset-4">E-mail:</span>
                    </div>
                    <div>
                      <span>arenahb@email.cz</span>
                    </div>
                  </div>
                </div>
                {/*Mapa*/}
                <div className="">

                </div>
              </div>

            </div>
          </div>
          </div>
    );
};