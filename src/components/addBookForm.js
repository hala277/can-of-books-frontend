import React, { Component } from 'react'

export class addBookForm extends Component {
    render() {
        return (
            <div>
                {/* onSubmit={ } */}
                <form onSubmit={ this.props.addBookFun}>
                    <input type="text" name="title" placeholder='Enter book name'></input>
                    <input type="text" name="description" placeholder='Enter book description'></input>
                    <input type="text" name="status" placeholder='Enter book status'></input>
                    {/* <input type="text" name="email" placeholder='Enter your email'></input> */}
                    <input type="submit" value="Add Book"></input>
                </form>
            </div>
        )
    }
}

export default addBookForm

