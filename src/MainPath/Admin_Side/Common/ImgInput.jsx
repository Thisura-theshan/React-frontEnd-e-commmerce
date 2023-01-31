import React, { useState } from "react";

function ImgInput() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <button className="w-56  overflow-hidden ">
            <div className="h-full w-fulll rounded-md bg-blue-200">
                <input className="pt-2 pb-1 pl-1 block w-full text-sm text-slate-500  file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100 " type="file" onChange={handleChange} />
                

                <img src={file} className="h-44 p-1 rounded-md " />

            </div>
        </button>


    );
}

export default ImgInput;
