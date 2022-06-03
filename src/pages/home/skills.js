import React from 'react'
import { useLanguage } from '../../context/languageContext'
import { skills } from '../../helpers/helpers'
import ProgressBar from './progressBar'

const Skills = () => {
  const {language} = useLanguage()
  return (  
    <div className="flex justify-start items-center flex-col">
        <h2 className={`font-bold text-3xl text-textGlobalLight dark:text-textGlobalDark  lg:pt-0`}>{language.skills}</h2>
        {skills.map(item => (
            <div key={item.id} className="w-auto h-auto">
                <h2 className="text-htmlText font-medium py-4">{item.title}</h2>
                <ProgressBar item={item}/>
            </div>
        ))}
    </div>
  )
}

export default Skills