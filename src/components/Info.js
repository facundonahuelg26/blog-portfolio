import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";

const Info = ({darker}) => {
  return (
    <>
      <div className="flex items-center pt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${darker ? 'text-textGlobalDark' : 'text-textGlobalLight'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <CopyToClipboard text="facundonahuelg26@gmail.com">
          <p
            onClick={() => toast("Copied 😁")}
            className={`h-5 w-5 ${darker ? 'text-textGlobalDark' : 'text-textGlobalLight'} px-2 cursor-pointer`}
          >
            facundonahuelg26@gmail.com
          </p>
        </CopyToClipboard>
      </div>
      <div className="flex items-center pt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${darker ? 'text-textGlobalDark' : 'text-textGlobalLight'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
        <CopyToClipboard text="03408-679109">
          <p
            onClick={() => toast("Copied 😁")}
            className={`${darker ? 'text-textGlobalDark' : 'text-textGlobalLight'} px-2 cursor-pointer`}
          >
            03408-679109
          </p>
        </CopyToClipboard>
      </div>
      <div className="pt-2">
        <a
          href="https://github.com/facundonahuelg26"
          target="_blank"
          className={`flex ${darker ? 'text-textGlobalDark' : 'text-textGlobalLight'}`}
          rel="noreferrer"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 ${darker ? 'text-textGlobalDark' : 'text-textGlobalLight'}`}
          >
            <path d="M7.975 16a9.39 9.39 0 003.169-.509c-.473.076-.652-.229-.652-.486l.004-.572c.003-.521.01-1.3.01-2.197 0-.944-.316-1.549-.68-1.863 2.24-.252 4.594-1.108 4.594-4.973 0-1.108-.39-2.002-1.032-2.707.1-.251.453-1.284-.1-2.668 0 0-.844-.277-2.77 1.032A9.345 9.345 0 008 .717c-.856 0-1.712.113-2.518.34C3.556-.24 2.712.025 2.712.025c-.553 1.384-.2 2.417-.1 2.668-.642.705-1.033 1.612-1.033 2.707 0 3.852 2.342 4.72 4.583 4.973-.29.252-.554.692-.642 1.347-.58.264-2.027.692-2.933-.831-.19-.302-.756-1.045-1.549-1.032-.843.012-.34.478.013.667.428.239.919 1.133 1.032 1.422.201.567.856 1.65 3.386 1.184 0 .55.006 1.079.01 1.447l.003.428c0 .265-.189.567-.692.479 1.007.34 1.926.516 3.185.516z"></path>
          </svg>
          <span className="pl-2">Github</span>
        </a>
      </div>
      <div className="pt-2">
        <a 
          href="https://www.linkedin.com/in/facundo-gutierrez-b5969b240" 
          className="flex" 
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18"
            height="18"
            viewBox="0 0 192 192"
            className={`${darker ? 'text-textGlobalDark' : 'text-textGlobalLight'}`}
          >
            {
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <path d="M0,192v-192h192v192z" fill="none"></path>
                <g fill={`${darker ? '#C1D1D9' : '#0D1117'}`}>
                  <g id="surface1">
                    <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
                  </g>
                </g>
               </g>
            }
          </svg>
          <span 
            className={`${darker ? 'text-textGlobalDark' : 'text-textGlobalLight'} pl-2`}
          >Linkedin</span>
        </a>
      </div>
      <Toaster />
    </>
  );
};

export default Info;
