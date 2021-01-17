import React, { Component } from 'react';

function StoryData() {


    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePicUrl = this.onChangePicUrl.bind(this);
    this.onChangeStory = this.onChangeStory.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    const [ story, setStory ] = useState({
        title: String,
        picUrl: String,
        story: String,
        date: new Date()
    });

    componentDidMount() {
        this.setStory({
            
        })
    }

    onChangeTitle(e) {
        setStory({
            title: e.target.value,
        });
    };

    onChangePicUrl(e) {
        setStory({
            picUrl: e.target.value,
        });
    };

    onChangeStory(e) {
        setStory({
            story: e.target.value,
        });
    };

    onChangeDate(date) {
        setStory({
            date: date
        });
    };

    onSubmit(e) {
        e.preventDefault();

        const story = {
            title = this.state.title,
            picUrl = this.state.picUrl,
            story = this.state.story,
            date = this.state.date
        }

        console.log(story);

        window.location = '/';
    };

    return (
        <div>
            
        </div>
    )
}

export default StoryData
