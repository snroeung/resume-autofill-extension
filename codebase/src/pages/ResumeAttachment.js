import { useState } from "react";
function ResumeAttachment() {
    const [resume, setResume] = useState();

    return (
        <div className="py-12 justify-center text-center">
            <header>
                <h2 className="text-2xl font-bold">
                    Attach Resume
                </h2>
            </header>
            <form>
                <div className="flex flex-row justify-center my-2">
                    <label>
                    <span className="sr-only">Upload resume</span>
                    <input type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
    onChange={(e) => setResume(e.target.files[0])}
    />
                </label>
                </div>
            </form>
        </div>
    );
}

export default ResumeAttachment