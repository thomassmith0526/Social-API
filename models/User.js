const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            // required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
                },
                message: props => `${props.value} is not a valid email address`
            }            
        },
        thoughts: {
            applications: [
                {
                    type: Schema.Types.ObjectID,
                    ref: 'Thoughts'
                },
            ],
        },
        friends: {
            applications: [
                {
                    type: Schema.Types.ObjectID,
                    ref: 'Friends'
                },
            ],
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false, 
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });
const User = model('user', userSchema);

module.exports = User;
