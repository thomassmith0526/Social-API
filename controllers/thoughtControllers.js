const { Thought, User } = require('../models');

module.exports ={
    async getThoughts(req, res) {
        try{
            const thoughts = await Thought.find()
            .populate('user');
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({_id:req.params.thoughtId})
            .populate('user')

            if(!thought) {
                return res.status(404).json({ message: 'No thought with that Id'})
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
}