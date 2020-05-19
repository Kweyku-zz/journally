import React , {Component} from 'react';
import {journals} from './journals'
import Form from './Form';
import JournalList from './JournalList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      journals: journals
    }
  }

  addJournal = (journal) => {
    journal.id = Math.random()
    const newJournalGroup = [journal, ...this.state.journals]
      this.setState({
        journals : newJournalGroup
      })
  }
 
  deleteJournal = (id) => {
      console.log(id);
      const filteredJournals = this.state.journals.filter(journal => {
        return journal.id !== id
      })

      this.setState({
        journals: filteredJournals
      })
  }

  flagJournal = (journal) => {

    !journal.flagged ? journal.flagged = true: journal.flagged = false

    const newFlagged = [...this.state.journals]
    
    if(!journal.flagged){
      this.setState({
        journals: [...this.state.journals]
      })
    }else{
      this.setState({
        journals: newFlagged
      })
    }
  }
  
  render(){
    return (
      <div className="App">
        <div className="container mx-auto ">
          <header className="text-center">
            <h1 className="text-6xl text-purple-600">Journally</h1>
          </header>
          <div className="flex ">
              <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
                 <Form addJournal={this.addJournal}/>
              </div>
              <div className="flex-1 text-gray-700  px-4 py-2 m-2">
                <JournalList journals={this.state.journals} deleteJournal={this.deleteJournal} flagJournal={this.flagJournal}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
