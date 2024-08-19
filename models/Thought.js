const {Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

// const reactionSchema = new Schema(
//     {
//         reactionId: {
//             type: Schema.Types.ObjectId,
//             default: () => new Types.ObjectId(),
//         },
//         reactionBody: {
//             type: String,
//             required: true,
//             maxLength: 280,
//         },
//         username: {
//             type: String,
//             required: true,
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//         }
//     }
// );

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
    
        createdAt: {
            type: Date,
            default: Date.now,
        },
    

        username: {
            type: String,
            required: true,
        },
    
    
        reactions: [reactionSchema]
    },
    {
        toJSON: { 
            virtuals: true,
        },
        id: false,
    }
);



thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

// const reactionData = []

//  Thoughts 
//     .create({reaction: reactionData})
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
const Thoughts = model('thought', thoughtSchema)
module.exports = Thoughts;