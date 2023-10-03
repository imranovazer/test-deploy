import express from 'express'
import 'dotenv/config'
const app = express();
const PORT = 3000;
const pets = [

    {
        id: 0,
        name: 'Yuta',

        animal: "cat"
    },
    {
        id: 1,
        name: 'Bobik',
        animal: 'dog'
    }
]

app.get('/pets', (req, res) => {
    res.status(200).json(
        {
            status: 'sucess',
            data: pets
        }
    )

})
app.get('/pets/:id', (req, res) => {
    const dataTosend = pets.find(item => item.id == req.params.id)

    res.status(200).json(
        {
            status: 'sucess',
            data: dataTosend
        }
    )

})

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
})