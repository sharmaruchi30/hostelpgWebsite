import express from "express";
import House from "../models/House.js";

export const addHouse = async (req, res) => {
    try {
        // const {
        //     userId,
        //     category,
        //     no_of_rooms,
        //     food_categories,
        //     image_path,
        //     description,
        //     location,
        // } = req.body;

        // const newHouse = House({
        //     userId,
        //     category, 
        //     no_of_rooms,
        //     food_categories,
        //     image_path ,
        //     description,
        //     location,
        //      });
        const newHouse = new House(req.body);
        const savedHouse = await newHouse.save();
        res.status(201).json(savedHouse);
    }
    catch(e) {
        res.status(400).json({error : e.message});
    }
}

export const getListedHouse = async (req, res) => {
    try {
        const { id } = req.params;
        const house = await House.find({userId : id});
        if (!house) return res.status(400).json({ msg: "No Houses Listed" })

        res.status(200).json({ house });
    }
    catch (e){

        res.status(400).json({ error : e.message});
        
    }
}

export const getAllHouse = async (req, res) => {
    try {
        const houses = await House.find();
        if (!houses) return res.status(400).json({ msg: "No Houses yet" });

        // res.status(200).json({ houses });
        res.send({ houses });
    }
    catch (e){
        res.status(400).json({ error : e.message});
    }
}

export const updateHouse = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedHouse = await House.updateOne(
            {_id : id},
            {$set : req.body},
        )
        res.status(201).json( {msg: "update successfully"} );
    }
    catch(e) {
        res.status(400).json({error : e.message});
    }
}


export const deleteHouse = async (req, res) => {
    try {
        const {id} = req.params;
        await House.deleteOne({_id : id});
        res.status(200).json({msg : "Listing Deleted Successfully!"});
    }
    catch (e) {
        res.status(400).json({error : e.message});
    }
}