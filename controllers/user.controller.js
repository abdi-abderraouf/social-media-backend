const User =require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signup=(req,res)=>{
  const data={
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password:bcrypt.hashSync(req.body.password,10),
    bio:req.body.bio,
    picture:req.path||null,
    birthDate:req.body.birthDate,
  }

  const _user = new User(data);
  _user.save().then((createdUser) => {
    res.status(200).json({message:'user added successfully'});
  }).catch((err) => {
    res.status(400).json({message:'problem while creating user'});
  });

}

exports.signin = async(req,res)=>{
           //const email = req.body.email;
           //const password = req.body.password;remplacer par:
      const{email,password}=req.body;
      const user = await User.findOne({email:email});
      if(!user) {
         return res.status(404).json({message:'email invalid'});
      }
        bcrypt.compare(password,user.password).then(
          (isMatch) => {
            if(isMatch == false){
              return res.status(404).json({message:' wrong password'})
            }
            else{
              const token = jwt.sign({data:{id:user.id,role:user.role}},
                process.env.CLE,
                {expiresIn:'1h'}
                )
              return res.status(200).json({message:'success',token:token,user:user});
            }
          }
        )
}



       /* exports.liste = async(req,res) => {
          const user = await User.findAll();

        };*/
   
        

        exports.liste = async (req, res) => {
          try {
            const users = await User.find({});
            res.status(200).json({ message: 'success', users: users });
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'internal server error' });
          }
        };
        

