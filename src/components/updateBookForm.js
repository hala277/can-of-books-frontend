import React, { Component } from 'react'

 class updateBookForm extends Component {
    render() {
        return (
            <div>
                <form  onSubmit={this.props.updateBooksForm}>
                    <input type="text" name='title' defaultValue={this.props.bookInfo1.title} />
                    <input type="text" name='description' defaultValue={this.props.bookInfo1.description}/>
                    <input type="text" name='status' defaultValue={this.props.bookInfo1.status}/>
                    {/* <input type="text" name="email" placeholder='Enter your email'></input> */}
                    <input type="submit" value="Update"></input>
                </form> 
            </div>
        )
    }
}

export default updateBookForm
