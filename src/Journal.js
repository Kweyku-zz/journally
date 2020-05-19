import React from 'react';

const Journal = (props) => {
        return(
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 "> 
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">{props.content}</p>
                <div className="journal-actions  py-4">
                    <span onClick={props.delete} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mr-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                         Delete
                    </span>
                    <span onClick={props.flag} className="bg-red-500 hover:bg-transparent text-white font-semibold hover:text-red-600 py-2 px-4 border border hover:border-red-500 rounded">
                       {props.flagged === true ? 'Unflag' : 'Flag' }
                    </span> 
                </div>
                </div>
            </div>
        )
}

export default Journal