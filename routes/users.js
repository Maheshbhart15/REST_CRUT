import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// Handle POST request to add a new user
router.post('/', (req, res) => {
    const user = req.body;
    
    // Add new user to the array with a unique ID
    users.push({ ...user, Id: uuidv4() });

    // Send response
    res.send(`User with the name ${user.Firstname} added to the database!`);
});

router.get('/:id',(req,res)=>{
    res.send('you get id route :');
})
export default router;
