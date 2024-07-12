
/** 
const express = require('express');
const router = express.Router();
const Task = require('../models/todotasks');

//To Get all my tasks
router.get('/', async (req, res) => {
    try{
      const tasks = await Task.find({});
      res.render('index', { tasks });  
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// //To Get all tasks (API testing)
// router.get('/api/tasks', async (req, res) => {
//     const tasks = await Task.find({});
//     res.status(200).json(tasks);
// });


//The Create route
//To POST my tasks
router.post('/', async (req, res) => {
    try {
        console.log('POST /tasks', req.body);
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            completed: false,
            createdAt: new Date
        });
        await newTask.save();
        res.redirect('/tasks');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

//The Update route
//To PUT my existing tasks
router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, { completed: req.body.completed === 'true'});
    res.redirect('/tasks');
});

//The Delete route
//To DELETE an unwanted task
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/tasks');
});
*/

const express = require('express');
const router = express.Router();
const Task = require('../models/todotasks'); // Adjust the path as necessary

// To Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.render('index', { tasks });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// The Create route - To POST my tasks
router.post('/', async (req, res) => {
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description || ''
        });
        await newTask.save();
        res.redirect('/tasks');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// The Update route - To PUT my existing tasks
// router.put('/:id', async (req, res) => {
//     try {
//         await Task.findByIdAndUpdate(req.params.id, {
//             title: req.body.title,
//             description: req.body.description,
//             completed: req.body.completed === 'true'
//         });
//         res.redirect('/tasks');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// });

router.put('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (req.body.completed !== undefined) {
        task.completed = req.body.completed === 'true';
        task.completedAt = task.completed ? new Date() : null;
    } else {
        task.title = req.body.title;
        task.description = req.body.description;
    }
    await task.save();
    res.redirect('/tasks');
});

// The Delete route - To DELETE an unwanted task
// router.delete('/:id', async (req, res) => {
//     try {
//         await Task.findByIdAndDelete(req.params.id);
//         res.redirect('/tasks');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// });
router.delete('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    task.deletedAt = new Date();
    await task.save();
    await Task.deleteOne({ _id: req.params.id });
    res.redirect('/tasks');
});

module.exports = router;
