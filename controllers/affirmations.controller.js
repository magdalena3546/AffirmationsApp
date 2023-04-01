const Affirmation = require('../models/affirmationModel');

exports.getAll = async(req, res) => {
    try{
        const affirmations = await Affirmation.find({});
        res.status(200).json(affirmations);
    }catch(error) {
        res.status(500).json({message: error.message})
    }
};

exports.getOne =  async(req, res) => {
    try{
        const {id} = req.params;
        const affirmation = await Affirmation.findById(id);
        res.status(200).json(affirmation);
    }catch(error) {
        res.status(500).json({message: error.message})
    }
};

exports.getRandom = async(req, res) => {
    try{
        const affirmation = await Affirmation.aggregate([{ $sample: { size: 1 } }]);
        res.status(200).json(affirmation);
    }catch(error) {
        res.status(500).json({message: error.message})
    }
};

exports.add = async(req, res) => {
    try{
        const affirmation = await Affirmation.create(req.body);
        res.status(200).json(affirmation);
    } catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
};

exports.delete = async(req, res) => {
    try{
        const {id} = req.params;
        const affirmation = await Affirmation.findByIdAndDelete(id);
        if(!affirmation){
            return res.status(404).json({message: `cannot find any affirmation with ID ${id}`})
        }
        res.status(200).json(affirmation);
    }catch(error) {
        res.status(500).json({message: error.message})
    }
};