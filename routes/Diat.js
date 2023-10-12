import express from 'express';
import { WeightLoss ,WeightGain } from '../db-utils/module.js';
const DiatRouter = express.Router();
import { AppUserModel } from '../db-utils/module.js';

//  DiatRouter.post('/register', async (req, res) => {

//     try {

//         // const payload = req.body;
//         // const appUser = await AppUserModel.findOne({ email: payload.email }, { id: 1, Firstname: 1, Lastname:1,email: 1, _id: 0 });
//         // console.log(payload.email)
//         // if (appUser) {
//         //     res.status(409).send({ msg: 'user already exits' });
//         //     return;
//         // }
//         // bcrypt.hash(payload.password, 10, async function (err, hash) {
//         //     if (err) {
//         //         res.status(500).send({ msg: 'Error in registring' });
//         //         return;
//         //     }
//         //     const authuser = new AppUserModel({ ...payload, password: hash, id: v4(), isVerified: false });
//         //     await authuser.save();
//         // })
//         // res.send({ msg: 'user register successfully ' });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ msg: 'Error in creating' })
//     }

// });


 DiatRouter.get('/weightloss', async function (req, res) {
    try {
        const appUser = await WeightLoss.find();
        if(appUser){
            res.send(appUser);


        }else
        {
            res.send("error data");
         

        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error occuerred while fetching users' });
       

    }
});



DiatRouter.get('/weightgain', async function (req, res) {
    try {
        const appUser = await WeightGain.find();
       
        if(appUser){
            res.send(appUser);

        }else
        {
            res.send("error data");
           

        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error occuerred while fetching users' });
       

    }
});


export default DiatRouter;