import { useState, useEffect } from "react";
import { getChromeStorage } from "../chrome";

async function getResumeFromStorage() {
  return new Promise((resolve, reject) => {
    getChromeStorage()
      .then((storage) => {
        storage.sync.get(["resume"], (result) => {
          const dataResult = result.resume?.resume;
          resolve(dataResult);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function ResumeAttachment({ setSavedResume }) {

  //added ignore line since `resume` is not used yet
  // eslint-disable-next-line
  const [storedResumeFilePath, setStoredResumeFilePath] = useState(getResumeFromStorage((result) => { return result }) ?? null);
  const [resumeFilePath, setResumeFilePath] = useState(storedResumeFilePath ?? "");

  function handleResumeFilePath(event) {
    const resume = event.target.files[0];
    //setResumeFilePath(URL.createObjectURL(resume));

    if (resume && !(typeof resume === 'string' && resume.startsWith('data:'))) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const dataUrl = reader.result;
        setResumeFilePath(dataUrl);
      };

      reader.readAsDataURL(resume);
    }
  }

  useEffect(() => {
    getResumeFromStorage().then((data) => {
      setStoredResumeFilePath(data);
      console.log("Stored Resume path:", storedResumeFilePath);
    });
  }, []);

  useEffect(() => {
    if (storedResumeFilePath) {
      setResumeFilePath(storedResumeFilePath);
    }
  }, [storedResumeFilePath]);

  useEffect(() => {
    setSavedResume({ resumeFilePath })
  }, [setSavedResume, resumeFilePath]);

  return (
    <div className="py-12 justify-center text-center">
      <header>
        <h2 className="text-2xl font-bold">
          Attach Resume
        </h2>
      </header>
      <form>
        <div className="flex flex-row justify-center my-4">
          <label>
            <span className="sr-only">Upload resume</span>
            <input type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
              onChange={(event) => handleResumeFilePath(event)} />
          </label>
          {resumeFilePath && <a href={resumeFilePath} target="_blank">Download file</a>}
        </div>
      </form>
    </div>
  );
}

export default ResumeAttachment