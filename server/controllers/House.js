import express from "express";
import House from "../models/House.js";
import User from "../models/User.js";

export const addHouse = async (req, res) => {
    try {
        // const {
        //     userId,
        //     category,
        //     no_of_rooms,
        //     no_of_bathrooms,
        //     food_categories,
        //     image_path,
        //     price,
        //     description,
        //     location,
        // } = req.body;

        // const food_arr = food_categories.split(',')

        // const newHouse = House({
        //     userId,
        //     category, 
        //     no_of_rooms,
        //     no_of_bathrooms,
        //     food_categories,
        //     image_path ,
        //     price,
        //     description,
        //     location,
        //      });
        const newHouse = new House(req.body);
        const savedHouse = await newHouse.save();
        // console.log(newHouse);
        res.status(201).json(savedHouse);
    }
    catch(e) {
        console.log(e.message);
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

export const getAllBookmarks = async (req, res) => {
    try{
        const {
            id_list
        } = req.body;
        const houseList = [];
        if (id_list) {
            for (let i = 0; i < id_list.length ; i++){
                const house = await House.findOne( { _id : id_list[i]});
                houseList.push(house);
            }
        }

        res.status(200).json({ house : houseList});
    }
    catch(e) {
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

export const bookmarkHouse = async (req, res) => {
    try{
        const {id} = req.params;
        const {userId} = req.params;

        const user = await User.findOne({_id : userId});
        
        let bookmarksArr = user.bookmarks;
        
        if (bookmarksArr.includes(id)){
            bookmarksArr.remove(id)
            await User.updateOne(
                {_id : userId},
                {$set : {
                    "bookmarks": bookmarksArr,
                }},
            )
            res.status(201).json( {newbookmark: bookmarksArr  } );
        }
        else{
            let newArr = [...bookmarksArr, id];
            await User.updateOne(
                {_id : userId},
                {$set : {
                    "bookmarks": newArr,
                }},
            )
            res.status(201).json( {newbookmark: newArr});
        }
        
        
        
    }
    catch(e){
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