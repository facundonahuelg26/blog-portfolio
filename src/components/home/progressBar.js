import React from "react";

const ProgressBar = ({ subtitle, progress }) => {

  return (
    <div>
        <div className="flex items-center">
          <p className="text-textGlobalLight dark:text-textGlobalDark pr-2 py-4">{subtitle}</p>
          <div className="w-40 lg:w-96 h-2 bg-globalBg dark:bg-gray-100 rounded">
            <div
              className={`h-2 bg-gradient-to-r from-greenColor to-greenLight text-xs py-1 text-center text-white rounded-l`}
              style={{ width: progress }}
            >
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProgressBar;
