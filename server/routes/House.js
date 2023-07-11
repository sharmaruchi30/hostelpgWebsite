import express from "express";
import { addHouse ,getListedHouse,getAllBookmarks , getAllHouse , updateHouse ,deleteHouse, bookmarkHouse } from "../controllers/House.js";

const router = express.Router();
router.get("/" , getAllHouse);  // Get each and every listed houses
router.post("/addhouse", addHouse); // Add new listing
// router.get("/addhouse" , (req, res) => { 
//     res.send("Add House Page");
// } 
// );
router.get("/:id" , getListedHouse); // get particular listed house by user
router.post("/allBookmarks" , getAllBookmarks);
router.put("/:id", updateHouse ); // update the listing 
router.get("/:id/delete", deleteHouse); // delete the listing
router.patch("/:id/:userId/bookmark", bookmarkHouse);
export default router;
