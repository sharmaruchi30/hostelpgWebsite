import express from "express";
import { addHouse ,getListedHouse , getAllHouse , updateHouse ,deleteHouse } from "../controllers/House.js";

const router = express.Router();
router.get("/" , getAllHouse);  // Get each and every listed houses
router.post("/addhouse", addHouse); // Add new listing
// router.get("/addhouse" , (req, res) => { 
//     res.send("Add House Page");
// } 
// );
router.get("/:id" , getListedHouse); // get particular listed house
router.put("/:id", updateHouse ); // update the listing 
router.get("/:id/delete", deleteHouse); // delete the listing
export default router;
