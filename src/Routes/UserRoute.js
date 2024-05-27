const express = require('express');
const app = express();
const userRoutes = express.Router();


let User = require ('../models/User')

// add usuário
userRoutes.route('/add').post(function (req, res) {
    let user = new User(req.body);
    user.save()
    .then(user => {
      res.status(200).json({'status': 'success','mssg': 'user added successfully'});
    })
    .catch(err => {
      res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
    });
  });

  // Função para obter todos os usuários
const getAllUsers = (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.status(400).json({'status': 'failure','mssg': 'Something went wrong'});
      } else {
        res.status(200).json({'status': 'success','users': users});
      }
    });
  };
  
  // Função para obter um usuário pelo ID
  const getUserById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        res.status(400).json({'status': 'failure','mssg': 'Something went wrong'});
      } else {
        res.status(200).json({'status': 'success','user': user});
      }
    });
  };


  const updateUserById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (!user) {
        res.status(400).json({'status': 'failure','mssg': 'Unable to find user'});
      } else {
        user.name = req.body.name;
        user.email = req.body.email;
        user.phone_number = req.body.phone_number;
        user.picture = req.body.picture;
  
        user.save()
          .then(() => {
            res.status(200).json({'status': 'success','mssg': 'Update complete'});
          })
          .catch(err => {
            res.status(400).json({'status': 'failure','mssg': 'Unable to update user'});
          });
      }
    });
  };
  
  // Função para deletar um usuário pelo ID
  const deleteUserById = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) {
        res.status(400).json({'status': 'failure','mssg': 'Unable to delete user'});
      } else {
        res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
      }
    });
  };
  
  module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
  };
  module.exports= userRoutes;