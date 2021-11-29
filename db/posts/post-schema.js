const mongoose = require('mongoose');
const schema = mongoose.Schema({
    topic: String,
    posted: { type: Date, defaultValue: Date.now },
    userName: String,
    verified: { type: Boolean, defaultValue: false },
    liked: { type: Boolean, defaultValue: false },
    handle: String,
    title: String,
    desc1: String,
    desc2: String,
    link: String,
    time: String,
    "image": String,
    "userImage": String,
    comments: { type: Number, defaultValue: 0 },
    retweets: { type: Number, defaultValue: 0 },
    likes: { type: Number, defaultValue: 0 }
}, { collection: "posts" });
module.exports = schema;
