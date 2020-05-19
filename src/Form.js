import React, {Component} from 'react';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange = (e) => {
        console.log(this.state)
        this.setState({
           [e.target.id]: e.target.value
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addJournal(this.state);
        this.setState({
            title: '',
            content: ''
        });
    }

    render(){
        return(
            <div className="w-full ">
                <form className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
                    <div className="mb-4 text-left">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" value={this.state.title} type="text"
                         placeholder="Title here"  onChange={this.handleChange}/>
                    </div>
                    <div className="mb-6 text-left">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Content
                    </label>
                    <input className="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight 
                        focus:outline-none focus:shadow-outline" id="content" value={this.state.content}type="text" placeholder="Add your content" onChange={this.handleChange} />
                    </div>
                    <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none 
                    focus:shadow-outline" type="submit">
                        Add Journal
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;