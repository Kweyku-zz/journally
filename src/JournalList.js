import React from 'react'
import Journal from './Journal'


const JournalList = ({journals, deleteJournal, flagJournal}) =>{
    const newJournal = journals.length ? journals.map( journal =>{
        return (
            <Journal 
                key={journal.id}
                id={journal.id}
                title={journal.title}
                content={journal.content}
                delete={() => {deleteJournal(journal.id)}}
                flag={() => {flagJournal(journal)}}
                flagged={journal.flagged}
            />
        )
    }) : (
        <div className="journal-collections">
            <h1 className="font-black text-4xl mb-2">No journals added!</h1>
        </div>
    )
    return (
        <div className="journal-list">
             {newJournal}
        </div>
    )
    
}

export default JournalList