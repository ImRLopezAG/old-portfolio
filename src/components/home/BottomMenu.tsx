export const BottomMenu = () => {
  return (
    <>
      <footer className="bottom-menu select-none">
        <div className="flex justify-start w-60 items-center">
          <div className="bg-blue-500 w-16 px-5">
            <img
              className="w-3 h-6 "
              src="./assets/icons/remote.svg"
              alt="remote icon"
            />
          </div>
          <div className="flex px-2 items-center">
            <img
              className="w-5 h-5 mr-1"
              src="./assets/icons/git.svg"
              alt="Git Icon"
            />
            <span className="px-1"> main* </span>
          </div>
          <div className="flex mx-4">
            <img
              className="w-4 h-6"
              src="../assets/icons/refresh.svg"
              alt="Sync Icon"
            />
          </div>
          <div className="flex justify-evenly items-center w-16">
            <img
              className="w-4 h-5"
              src="../assets/icons/error.svg"
              alt="Times Icon"
            />
            <span>0</span>
          </div>
          <div className="flex items-center justify-evenly w-16">
            <img
              className="w-4 h-5"
              src="../assets/icons/alert.svg"
              alt="Danger Icon"
            />
            <span>0</span>
          </div>
        </div>
        <div className="flex justify-end w-8/12 items-center px-5">
          <a
            className="flex flex-row name"
            href="https://github.com/ImRLopezAG"
            target={'_blank'}
            rel="noreferrer"
          >
            <img
              className="w-4 h-5 "
              src="./assets/icons/Github-Copilot.svg"
              alt="Git cat"
            />
            <span className="px-1 copilot">IMRLopezAG</span>
          </a>
        </div>
      </footer>
    </>
  )
}
